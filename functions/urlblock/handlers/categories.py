import csv
import json
import os
import time
import traceback
from datetime import datetime
import pytz
from crowdstrike.foundry.function import APIError, Request, Response
from falconpy import CustomStorage
from logging import Logger

from app_core import FUNC, get_client, COLLECTION_DOMAIN_VER
from app_utils import _sanitize_url_list

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

def process_csv_records(csv_path, custom_storage, logger, collection_name="domain", collection_version=COLLECTION_DOMAIN_VER):
    """Process CSV records and create collection objects."""
    success_count = 0
    error_count = 0
    total_rows = 0
    try:
        with open(csv_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.reader(file)
            next(csv_reader)  # Skip header row
            for row in csv_reader:
                total_rows += 1
                try:
                    if len(row) >= 2:
                        record = transform_csv_row(row)
                        validate_record(record)
                        custom_storage.PutObjectByVersion(
                            body=record,
                            collection_name=collection_name,
                            collection_version=collection_version,
                            object_key=record['category']
                        )
                        success_count += 1
                except ValueError as e:
                    error_count += 1
                    logger.error(f"Error processing row {total_rows}: {str(e)}")
                    continue
    except IOError as e:
        raise IOError(f"Error reading CSV file: {str(e)}") from e
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
    """Import domain categorization CSV data into a Foundry Collection."""
    logger.info("Starting /import-csv handler")
    try:
        custom_storage = get_client(CustomStorage)
        current_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        csv_file = os.path.join(current_dir, 'output.csv')

        results = process_csv_records(
            csv_path=csv_file,
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
                "source_file": csv_file,
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


@FUNC.handler(method='GET', path='/categories')
def get_categories(request: Request, _: dict, logger: Logger) -> Response:
    """Retrieve categories directly from CSV file."""
    logger.info("Starting /categories handler")
    try:
        current_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        csv_file = os.path.join(current_dir, 'output.csv')
        
        if not os.path.exists(csv_file):
            return Response(code=404, body={"error": "CSV file not found", "path": csv_file})

        categories_dict = {}
        with open(csv_file, 'r', encoding='utf-8') as f:
            csv_reader = csv.reader(f)
            next(csv_reader)
            for row in csv_reader:
                if len(row) >= 2:
                    category = row[0].strip()
                    urls = row[1].strip()
                    url_list = [url.strip() for url in urls.split(';') if url.strip()]
                    if url_list:
                        categories_dict[category] = ';'.join(url_list)

        return Response(code=200, body={'categories': categories_dict})

    except Exception as e:
        logger.error(f"Error reading categories: {str(e)}")
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to read categories"})


@FUNC.handler(method='GET', path='/list-categories')
def list_categories(request: Request, _: dict, logger: Logger) -> Response:
    """List all categories from the domain collection."""
    logger.info("Starting /list-categories handler")
    try:
        custom_storage = get_client(CustomStorage)
        try:
            limit = int(request.params.limit if hasattr(request.params, 'limit') else 1000)
        except (ValueError, AttributeError):
            limit = 1000

        response = custom_storage.SearchObjects(
            collection_name='domain',
            limit=limit,
            collection_version=COLLECTION_DOMAIN_VER
        )

        if not response:
            return Response(code=500, errors=[APIError(code=500, message="No response received from API")])
        if "errors" in response:
            return Response(code=400, errors=[APIError(code=400, message=f"API Error: {response['errors']}")])

        resources = response.get('resources', [])
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
                "metadata": {"limit": limit, "timestamp": int(time.time())}
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

        object_key = category.replace(' ', '_') if category else "Games"
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
            object_key=category_name.replace(' ', '_')
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
