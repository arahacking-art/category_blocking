import traceback
from datetime import datetime
import pytz
from crowdstrike.foundry.function import Request, Response
from falconpy import CustomStorage
from logging import Logger

from app_core import FUNC, get_client, COLLECTION_RELATION_VER

@FUNC.handler(method='POST', path='/manage-relationship')
def manage_relationship(request: Request, _: dict, logger: Logger) -> Response:
    """Create or update relationship between category, rule group, and host."""
    logger.info("Starting /manage-relationship handler")
    try:
        custom_storage = get_client(CustomStorage)
        relationship_record = {
            "category_name": request.body.get('category_name', ''),
            "rule_group_id": request.body.get('rule_group_id', ''),
            "rule_group_name": request.body.get('rule_group_name', ''),
            "host_group_id": request.body.get('host_group_id', ''),
            "host_group_name": request.body.get('host_group_name', ''),
            "policy_name": request.body.get('policy_name', ''),
            "created_at": request.body.get('created_at', datetime.now(pytz.UTC).isoformat()),
            "created_by": request.body.get('created_by', 'unknown')
        }

        required_fields = ['category_name', 'rule_group_id', 'host_group_id']
        missing_fields = [f for f in required_fields if not relationship_record[f]]
        if missing_fields: return Response(code=400, body={"error": "Missing required fields"})

        relationship_key = f"{relationship_record['category_name']}_{relationship_record['rule_group_id']}_{relationship_record['host_group_id']}"
        response = custom_storage.PutObjectByVersion(
            body=relationship_record,
            collection_name="relationship",
            collection_version=COLLECTION_RELATION_VER,
            object_key=relationship_key
        )

        if response.get('status_code') == 200:
            logger.info(f"Successfully completed /manage-relationship: {relationship_key}")
            return Response(code=200, body={"success": True, "relationshipId": relationship_key})
        return Response(code=500, body={"error": "Failed to create relationship"})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Unexpected error"})

@FUNC.handler(method='GET', path='/get-relationship')
def get_relationship(request: Request, _: dict, logger: Logger) -> Response:
    """Get all relationships and format for graph visualization."""
    logger.info("Starting /get-relationship handler")
    try:
        custom_storage = get_client(CustomStorage)
        response = custom_storage.SearchObjects(
            collection_name="relationship",
            collection_version=COLLECTION_RELATION_VER,
            limit=1000
        )

        if response.get('status_code') != 200:
            raise ValueError("Failed to fetch relationship")

        relationship = response.get('resources', [])
        nodes, links, nodes_set = [], [], set()

        for rel in relationship:
            if rel['category_name'] not in nodes_set:
                nodes_set.add(rel['category_name'])
                nodes.append({"id": rel['category_name'], "name": rel['category_name'], "type": "category"})
            if rel['rule_group_id'] not in nodes_set:
                nodes_set.add(rel['rule_group_id'])
                nodes.append({"id": rel['rule_group_id'], "name": rel['rule_group_name'], "type": "rule_group"})
            if rel['host_group_id'] not in nodes_set:
                nodes_set.add(rel['host_group_id'])
                nodes.append({"id": rel['host_group_id'], "name": rel['host_group_name'], "type": "host_group"})

            links.append({"source": rel['category_name'], "target": rel['rule_group_id']})
            links.append({"source": rel['rule_group_id'], "target": rel['host_group_id']})

        logger.info("Successfully completed /get-relationship")
        return Response(code=200, body={"success": True, "relationship": relationship, "graphData": {"nodes": nodes, "links": links}})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to fetch"})
