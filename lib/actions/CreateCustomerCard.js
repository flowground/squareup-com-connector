/**
 * Auto-generated action file for "Square Connect" API.
 *
 * Generated at: 2019-05-07T14:44:11.186Z
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
 * Operation: 'CreateCustomerCard'
 * Endpoint Path: '/v2/customers/{customer_id}/cards'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "customer_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "customer_id": "customer_id",
    "address_line_1": "address_line_1",
    "address_line_2": "address_line_2",
    "address_line_3": "address_line_3",
    "administrative_district_level_1": "administrative_district_level_1",
    "administrative_district_level_2": "administrative_district_level_2",
    "administrative_district_level_3": "administrative_district_level_3",
    "country": "country",
    "first_name": "first_name",
    "last_name": "last_name",
    "locality": "locality",
    "organization": "organization",
    "postal_code": "postal_code",
    "sublocality": "sublocality",
    "sublocality_2": "sublocality_2",
    "sublocality_3": "sublocality_3",
    "billing_address": "billing_address",
    "card_nonce": "card_nonce",
    "cardholder_name": "cardholder_name",
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
        operationId: 'CreateCustomerCard',
        pathName: '/v2/customers/{customer_id}/cards',
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