import csv
import io
import json
import time
import traceback
from datetime import datetime
import pytz
from crowdstrike.foundry.function import APIError, Request, Response
from falconpy import CustomStorage
from logging import Logger

from concurrent.futures import ThreadPoolExecutor

from app_core import FUNC, get_client, COLLECTION_DOMAIN_VER
from app_utils import _sanitize_url_list, paginated_search, category_key

# ---------------------------------------------------------------------------
# CSV Helpers
# ---------------------------------------------------------------------------

def transform_csv_row(row):
    """Transform a CSV row to match the Collection schema."""
    category = row[0].strip()
    urls = row[1]
    record = {
        "category": category,
        "domain": urls,
        "wildcard_domain": "",
        "imported_at": int(time.time())
    }
    return record

def validate_record(record):
    """Validate that record meets schema requirements."""
    if not record.get('category'):
        raise ValueError("Missing required field: category")
    if not record.get('domain'):
        raise ValueError("Missing required field: domain")

def process_csv_records(csv_path=None, custom_storage=None, logger=None, collection_name="domain",
                        collection_version=COLLECTION_DOMAIN_VER, max_workers=10, csv_text=None):
    """Process CSV records (from `csv_text` or the file at `csv_path`) and write collection objects in parallel."""
    error_count = 0
    total_rows = 0
    records = []

    def _read_rows(file):
        nonlocal error_count, total_rows
        csv_reader = csv.reader(file)
        next(csv_reader, None)  # Skip header row
        for row in csv_reader:
            total_rows += 1
            try:
                if len(row) >= 2:
                    record = transform_csv_row(row)
                    validate_record(record)
                    records.append(record)
            except ValueError as e:
                error_count += 1
                logger.error(f"Error processing row {total_rows}: {str(e)}")

    if csv_text is not None:
        _read_rows(io.StringIO(csv_text))
    else:
        try:
            with open(csv_path, 'r', encoding='utf-8') as file:
                _read_rows(file)
        except IOError as e:
            raise IOError(f"Error reading CSV file: {str(e)}") from e

    def _put(record):
        resp = custom_storage.PutObjectByVersion(
            body=record,
            collection_name=collection_name,
            collection_version=collection_version,
            object_key=category_key(record['category'])
        )
        if isinstance(resp, dict) and resp.get('status_code', 200) >= 400:
            raise RuntimeError(f"HTTP {resp.get('status_code')}")

    success_count = 0
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [(r, executor.submit(_put, r)) for r in records]
        for record, future in futures:
            try:
                future.result()
                success_count += 1
            except Exception as e:
                error_count += 1
                logger.error(f"Error writing category {record['category']}: {str(e)}")

    return {
        "total_rows": total_rows,
        "success_count": success_count,
        "error_count": error_count
    }


# ===========================================================================
# Handlers
# ===========================================================================

@FUNC.handler(method='POST', path='/import-csv')
def import_csv_handler(request: Request, _: dict, logger: Logger) -> Response:
    """Import domain categorization CSV data (sent as text in `csv`) into a Foundry Collection."""
    logger.info("Starting /import-csv handler")
    try:
        csv_text = request.body.get('csv') if request.body else None
        if not isinstance(csv_text, str) or not csv_text.strip():
            return Response(code=400, body={"error": "CSV content is required in the 'csv' field"})

        custom_storage = get_client(CustomStorage)

        results = process_csv_records(
            csv_text=csv_text,
            custom_storage=custom_storage,
            logger=logger,
            collection_name="domain",
            collection_version=COLLECTION_DOMAIN_VER
        )
        logger.info(f"Successfully completed /import-csv: {results['success_count']} rows imported")
        return Response(
            body={
                "success": True,
                "total_rows": results["total_rows"],
                "successful_imports": results["success_count"],
                "failed_imports": results["error_count"],
                "collection_name": "domain",
                "source_file": "request body",
                "import_timestamp": int(time.time())
            },
            code=200
        )
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(
            code=500,
            errors=[APIError(code=500, message=f"CSV import failed: {str(e)}")]
        )


@FUNC.handler(method='GET', path='/list-categories')
def list_categories(request: Request, _: dict, logger: Logger) -> Response:
    """List all categories from the domain collection."""
    logger.info("Starting /list-categories handler")
    try:
        custom_storage = get_client(CustomStorage)
        try:
            page_size = min(int(request.params.limit), 500) if hasattr(request.params, 'limit') else 100
        except (ValueError, AttributeError, TypeError):
            page_size = 100
        try:
            max_pages = max(1, int(request.params.max_pages)) if hasattr(request.params, 'max_pages') else 10
        except (ValueError, AttributeError, TypeError):
            max_pages = 10

        result = paginated_search(custom_storage, 'domain', COLLECTION_DOMAIN_VER,
                                  page_size=page_size, max_pages=max_pages)
        if "error" in result:
            return Response(code=400, errors=[APIError(code=400, message=f"API Error: {result['error']}")])

        resources = result['resources']
        categories = set()
        domains = []

        for item in resources:
            try:
                if item and isinstance(item, dict):
                    if item.get('category'):
                        categories.add(item['category'])
                    domains.append({
                        'category': item.get('category', ''),
                        'domain': item.get('domain', ''),
                        'wildcard_domain': item.get('wildcard_domain', '')
                    })
            except Exception:
                continue

        logger.info("Successfully completed /list-categories")
        return Response(
            body={
                "total_items": len(resources),
                "unique_categories": len(categories),
                "categories": sorted(list(categories)),
                "domains": domains,
                "metadata": {"limit": page_size, "timestamp": int(time.time())},
                "pagination": result["pagination"]
            },
            code=200
        )
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, errors=[APIError(code=500, message=f"Error querying collection: {str(e)}")])


@FUNC.handler(method='GET', path='/search-categories')
def search_categories(request: Request, _: dict, logger: Logger) -> Response:
    """Search for categories in the domain collection."""
    logger.info("Starting /search-categories handler")
    try:
        custom_storage = get_client(CustomStorage)
        
        # Read from query parameters (since it's a GET request)
        try:
            category = request.params.category if hasattr(request.params, 'category') else ''
        except Exception:
            category = ''

        object_key = category_key(category) if category else "games"
        response = custom_storage.GetVersionedObject(
            collection_name="domain",
            collection_version=COLLECTION_DOMAIN_VER,
            object_key=object_key
        )

        try:
            result = json.loads(response.decode("utf-8"))
        except (AttributeError, UnicodeDecodeError, json.JSONDecodeError):
            error_msg = response.get("errors", [{}])[0].get("message", "Unknown error") if isinstance(response, dict) else str(response)
            return Response(code=500, errors=[APIError(code=500, message=f"Error fetching category: {error_msg}")])

        logger.info(f"Successfully completed /search-categories for {category}")
        return Response(body=result, code=200)

    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, errors=[APIError(code=500, message=f"Error searching collection: {str(e)}")])


@FUNC.handler(method='POST', path='/manage-category')
def manage_category(request: Request, _: dict, logger: Logger) -> Response:
    """Create or update a category with comma-separated URLs."""
    logger.info("Starting /manage-category handler")
    try:
        if not request.body:
            return Response(code=400, body={"error": "Request body is required"})

        category_name = request.body.get('categoryName', '').strip()
        urls = request.body.get('urls', '').strip()

        if not category_name:
            return Response(code=400, body={"error": "Category name is required"})
        if not urls:
            return Response(code=400, body={"error": "URLs are required"})

        custom_storage = get_client(CustomStorage)
        url_list = _sanitize_url_list(urls, separator=',')
        if not url_list:
            return Response(code=400, body={"error": "No valid URLs provided"})

        record = {
            "category": category_name,
            "domain": ';'.join(url_list),
            "imported_at": int(time.time()),
            "last_modified": datetime.now(pytz.UTC).isoformat()
        }

        response = custom_storage.PutObjectByVersion(
            body=record,
            collection_name="domain",
            collection_version=COLLECTION_DOMAIN_VER,
            object_key=category_key(category_name)
        )

        if response.get('status_code') == 200:
            logger.info(f"Successfully completed /manage-category: Created/Updated {category_name}")
            return Response(
                code=200,
                body={
                    "success": True,
                    "message": "Category processed successfully",
                    "operation": "create",
                    "categoryName": category_name,
                    "urlCount": len(url_list)
                }
            )

        return Response(code=500, body={"error": "Failed to process category", "details": response.get('body', {}).get('message', 'Unknown error')})

    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Unexpected error occurred"})
