/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ResponseMeta } from './ResponseMeta';
import {
    ResponseMetaFromJSON,
    ResponseMetaFromJSONTyped,
    ResponseMetaToJSON,
} from './ResponseMeta';

/**
 * 
 * @export
 * @interface DefaultMetaOnlyResponse
 */
export interface DefaultMetaOnlyResponse {
    /**
     * 
     * @type {ResponseMeta}
     * @memberof DefaultMetaOnlyResponse
     */
    meta: ResponseMeta;
}

/**
 * Check if a given object implements the DefaultMetaOnlyResponse interface.
 */
export function instanceOfDefaultMetaOnlyResponse(value: object): value is DefaultMetaOnlyResponse {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function DefaultMetaOnlyResponseFromJSON(json: any): DefaultMetaOnlyResponse {
    return DefaultMetaOnlyResponseFromJSONTyped(json, false);
}

export function DefaultMetaOnlyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultMetaOnlyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': ResponseMetaFromJSON(json['meta']),
    };
}

export function DefaultMetaOnlyResponseToJSON(value?: DefaultMetaOnlyResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': ResponseMetaToJSON(value['meta']),
    };
}

