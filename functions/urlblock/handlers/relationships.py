import traceback
from datetime import datetime
from logging import Logger

import pytz
from crowdstrike.foundry.function import Request, Response
from falconpy import CustomStorage

from app_core import FUNC, get_client, COLLECTION_RELATION_VER
from app_utils import read_all_objects, relationship_key, resolve_creator

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
            "created_by": resolve_creator(request, body_field='created_by')[0]
        }

        required_fields = ['category_name', 'rule_group_id', 'host_group_id']
        missing_fields = [f for f in required_fields if not relationship_record[f]]
        if missing_fields:
            return Response(code=400, body={"error": "Missing required fields"})

        rel_key = relationship_key(
            relationship_record['category_name'], relationship_record['rule_group_id'], relationship_record['host_group_id'])
        response = custom_storage.PutObjectByVersion(
            body=relationship_record,
            collection_name="relationship",
            collection_version=COLLECTION_RELATION_VER,
            object_key=rel_key
        )

        if response.get('status_code') == 200:
            logger.info(f"Successfully completed /manage-relationship: {rel_key}")
            return Response(code=200, body={"success": True, "relationshipId": rel_key})
        return Response(code=500, body={"error": "Failed to create relationship"})
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Unexpected error"})

@FUNC.handler(method='GET', path='/get-relationship')
def get_relationship(request: Request, _: dict, logger: Logger) -> Response:
    """Get all relationships and format for graph visualization."""
    logger.info("Starting /get-relationship handler")
    try:
        custom_storage = get_client(CustomStorage)
        result = read_all_objects(custom_storage, "relationship", COLLECTION_RELATION_VER, logger=logger)
        if "error" in result:
            raise ValueError("Failed to fetch relationship")

        relationship = result['resources']
        nodes, links, nodes_set = [], [], set()

        required = ('category_name', 'rule_group_id', 'host_group_id')
        relationship = [r for r in relationship if all(r.get(f) for f in required)]
        for rel in relationship:
            if rel['category_name'] not in nodes_set:
                nodes_set.add(rel['category_name'])
                nodes.append({"id": rel['category_name'], "name": rel['category_name'], "type": "category"})
            if rel['rule_group_id'] not in nodes_set:
                nodes_set.add(rel['rule_group_id'])
                nodes.append({"id": rel['rule_group_id'], "name": rel.get('rule_group_name', ''), "type": "rule_group"})
            if rel['host_group_id'] not in nodes_set:
                nodes_set.add(rel['host_group_id'])
                nodes.append({"id": rel['host_group_id'], "name": rel.get('host_group_name', ''), "type": "host_group"})

            links.append({"source": rel['category_name'], "target": rel['rule_group_id']})
            links.append({"source": rel['rule_group_id'], "target": rel['host_group_id']})

        logger.info("Successfully completed /get-relationship")
        return Response(code=200, body={
            "success": True, "relationship": relationship,
            "graphData": {"nodes": nodes, "links": links}, "pagination": result["pagination"],
        })
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to fetch"})
