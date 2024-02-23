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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NullableClass
 */
export interface NullableClass {
    [key: string]: object | any;
    /**
     * 
     * @type {number}
     * @memberof NullableClass
     */
    integerProp?: number;
    /**
     * 
     * @type {number}
     * @memberof NullableClass
     */
    numberProp?: number;
    /**
     * 
     * @type {boolean}
     * @memberof NullableClass
     */
    booleanProp?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NullableClass
     */
    stringProp?: string;
    /**
     * 
     * @type {Date}
     * @memberof NullableClass
     */
    dateProp?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NullableClass
     */
    datetimeProp?: Date;
    /**
     * 
     * @type {Array<object>}
     * @memberof NullableClass
     */
    arrayNullableProp?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof NullableClass
     */
    arrayAndItemsNullableProp?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof NullableClass
     */
    arrayItemsNullable?: Array<object>;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof NullableClass
     */
    objectNullableProp?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object | null; }}
     * @memberof NullableClass
     */
    objectAndItemsNullableProp?: { [key: string]: object | null; };
    /**
     * 
     * @type {{ [key: string]: object | null; }}
     * @memberof NullableClass
     */
    objectItemsNullable?: { [key: string]: object | null; };
}

/**
 * Check if a given object implements the NullableClass interface.
 */
export function instanceOfNullableClass(value: object): boolean {
    return true;
}

export function NullableClassFromJSON(json: any): NullableClass {
    return NullableClassFromJSONTyped(json, false);
}

export function NullableClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullableClass {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        
            ...json,
        'integerProp': !exists(json, 'integer_prop') ? undefined : json['integer_prop'],
        'numberProp': !exists(json, 'number_prop') ? undefined : json['number_prop'],
        'booleanProp': !exists(json, 'boolean_prop') ? undefined : json['boolean_prop'],
        'stringProp': !exists(json, 'string_prop') ? undefined : json['string_prop'],
        'dateProp': !exists(json, 'date_prop') ? undefined : (new Date(json['date_prop'])),
        'datetimeProp': !exists(json, 'datetime_prop') ? undefined : (new Date(json['datetime_prop'])),
        'arrayNullableProp': !exists(json, 'array_nullable_prop') ? undefined : json['array_nullable_prop'],
        'arrayAndItemsNullableProp': !exists(json, 'array_and_items_nullable_prop') ? undefined : json['array_and_items_nullable_prop'],
        'arrayItemsNullable': !exists(json, 'array_items_nullable') ? undefined : json['array_items_nullable'],
        'objectNullableProp': !exists(json, 'object_nullable_prop') ? undefined : json['object_nullable_prop'],
        'objectAndItemsNullableProp': !exists(json, 'object_and_items_nullable_prop') ? undefined : json['object_and_items_nullable_prop'],
        'objectItemsNullable': !exists(json, 'object_items_nullable') ? undefined : json['object_items_nullable'],
    };
}

export function NullableClassToJSON(value?: NullableClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'integer_prop': value['integerProp'],
        'number_prop': value['numberProp'],
        'boolean_prop': value['booleanProp'],
        'string_prop': value['stringProp'],
        'date_prop': !exists(value, 'dateProp') ? undefined : ((value['dateProp'] as any).toISOString().substring(0,10)),
        'datetime_prop': !exists(value, 'datetimeProp') ? undefined : ((value['datetimeProp'] as any).toISOString()),
        'array_nullable_prop': value['arrayNullableProp'],
        'array_and_items_nullable_prop': value['arrayAndItemsNullableProp'],
        'array_items_nullable': value['arrayItemsNullable'],
        'object_nullable_prop': value['objectNullableProp'],
        'object_and_items_nullable_prop': value['objectAndItemsNullableProp'],
        'object_items_nullable': value['objectItemsNullable'],
    };
}

