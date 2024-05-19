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
import type { ItemId } from './ItemId';
import {
    ItemIdFromJSON,
    ItemIdFromJSONTyped,
    ItemIdToJSON,
} from './ItemId';

/**
 * This represent an error normally linked to a specific item from a previous request
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Usually contains the simple name of the exception
     * @type {string}
     * @memberof ModelError
     */
    type: string;
    /**
     * 
     * @type {ItemId}
     * @memberof ModelError
     */
    itemInfo?: ItemId;
    /**
     * Simple explanation of the error
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
    /**
     * Message of the exception that will help developer to debug this problem if needed
     * @type {string}
     * @memberof ModelError
     */
    exception?: string;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): value is ModelError {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'itemInfo': json['itemInfo'] == null ? undefined : ItemIdFromJSON(json['itemInfo']),
        'details': json['details'] == null ? undefined : json['details'],
        'exception': json['exception'] == null ? undefined : json['exception'],
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'itemInfo': ItemIdToJSON(value['itemInfo']),
        'details': value['details'],
        'exception': value['exception'],
    };
}

