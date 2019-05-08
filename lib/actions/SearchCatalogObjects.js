/**
 * Auto-generated action file for "Square Connect" API.
 *
 * Generated at: 2019-05-07T14:44:11.183Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / squareup-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'SearchCatalogObjects'
 * Endpoint Path: '/v2/catalog/search'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "begin_time": "begin_time",
    "cursor": "cursor",
    "include_deleted_objects": "include_deleted_objects",
    "include_related_objects": "include_related_objects",
    "limit": "limit",
    "object_types": "object_types",
    "attribute_name": "attribute_name",
    "attribute_value": "attribute_value",
    "exact_query": "exact_query",
    "modifier_list_ids": "modifier_list_ids",
    "items_for_modifier_list_query": "items_for_modifier_list_query",
    "tax_ids": "tax_ids",
    "items_for_tax_query": "items_for_tax_query",
    "attribute_prefix": "attribute_prefix",
    "prefix_query": "prefix_query",
    "attribute_max_value": "attribute_max_value",
    "attribute_min_value": "attribute_min_value",
    "range_query": "range_query",
    "initial_attribute_value": "initial_attribute_value",
    "sort_order": "sort_order",
    "sorted_attribute_query": "sorted_attribute_query",
    "keywords": "keywords",
    "text_query": "text_query",
    "query": "query",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['oauth2'] = {token: cfg['oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'SearchCatalogObjects',
        pathName: '/v2/catalog/search',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}