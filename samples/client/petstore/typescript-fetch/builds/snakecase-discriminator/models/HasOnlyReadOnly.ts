/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HasOnlyReadOnly
 */
export interface HasOnlyReadOnly {
    /**
     * 
     * @type {string}
     * @memberof HasOnlyReadOnly
     */
    readonly bar?: string;
    /**
     * 
     * @type {string}
     * @memberof HasOnlyReadOnly
     */
    readonly foo?: string;
}

/**
 * Check if a given object implements the HasOnlyReadOnly interface.
 */
export function instanceOfHasOnlyReadOnly(value: object): value is HasOnlyReadOnly {
    return true;
}

export function HasOnlyReadOnlyFromJSON(json: any): HasOnlyReadOnly {
    return HasOnlyReadOnlyFromJSONTyped(json, false);
}

export function HasOnlyReadOnlyFromJSONTyped(json: any, ignoreDiscriminator: boolean): HasOnlyReadOnly {
    if (json == null) {
        return json;
    }
    return {
        
        'bar': json['bar'] == null ? undefined : json['bar'],
        'foo': json['foo'] == null ? undefined : json['foo'],
    };
}

  export function HasOnlyReadOnlyToJSON(json: any): HasOnlyReadOnly {
      return HasOnlyReadOnlyToJSONTyped(json, false);
  }

  export function HasOnlyReadOnlyToJSONTyped(value?: Omit<HasOnlyReadOnly, 'bar'|'foo'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

