/* tslint:disable */
/* eslint-disable */
/**
 * Enum test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EnumPatternObject,
  FakeEnumRequestGetInline200Response,
  NumberEnum,
  StringEnum,
} from '../models/index';
import {
    EnumPatternObjectFromJSON,
    EnumPatternObjectToJSON,
    FakeEnumRequestGetInline200ResponseFromJSON,
    FakeEnumRequestGetInline200ResponseToJSON,
    NumberEnumFromJSON,
    NumberEnumToJSON,
    StringEnumFromJSON,
    StringEnumToJSON,
} from '../models/index';

export interface FakeEnumRequestGetInlineRequest {
    stringEnum?: FakeEnumRequestGetInlineStringEnumEnum;
    nullableStringEnum?: FakeEnumRequestGetInlineNullableStringEnumEnum;
    numberEnum?: FakeEnumRequestGetInlineNumberEnumEnum;
    nullableNumberEnum?: FakeEnumRequestGetInlineNullableNumberEnumEnum;
}

export interface FakeEnumRequestGetRefRequest {
    stringEnum?: StringEnum;
    nullableStringEnum?: StringEnum;
    numberEnum?: NumberEnum;
    nullableNumberEnum?: NumberEnum;
}

export interface FakeEnumRequestPostInlineRequest {
    fakeEnumRequestGetInline200Response?: FakeEnumRequestGetInline200Response;
}

export interface FakeEnumRequestPostRefRequest {
    enumPatternObject?: EnumPatternObject;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async fakeEnumRequestGetInlineRaw(requestParameters: FakeEnumRequestGetInlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FakeEnumRequestGetInline200Response>> {
        const queryParameters: any = {};

        if (runtime.exists(requestParameters, 'stringEnum')) {
            queryParameters['string-enum'] = requestParameters['stringEnum'];
        }

        if (runtime.exists(requestParameters, 'nullableStringEnum')) {
            queryParameters['nullable-string-enum'] = requestParameters['nullableStringEnum'];
        }

        if (runtime.exists(requestParameters, 'numberEnum')) {
            queryParameters['number-enum'] = requestParameters['numberEnum'];
        }

        if (runtime.exists(requestParameters, 'nullableNumberEnum')) {
            queryParameters['nullable-number-enum'] = requestParameters['nullableNumberEnum'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/enum-request-inline`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FakeEnumRequestGetInline200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestGetInline(requestParameters: FakeEnumRequestGetInlineRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FakeEnumRequestGetInline200Response> {
        const response = await this.fakeEnumRequestGetInlineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestGetRefRaw(requestParameters: FakeEnumRequestGetRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnumPatternObject>> {
        const queryParameters: any = {};

        if (runtime.exists(requestParameters, 'stringEnum')) {
            queryParameters['string-enum'] = requestParameters['stringEnum'];
        }

        if (runtime.exists(requestParameters, 'nullableStringEnum')) {
            queryParameters['nullable-string-enum'] = requestParameters['nullableStringEnum'];
        }

        if (runtime.exists(requestParameters, 'numberEnum')) {
            queryParameters['number-enum'] = requestParameters['numberEnum'];
        }

        if (runtime.exists(requestParameters, 'nullableNumberEnum')) {
            queryParameters['nullable-number-enum'] = requestParameters['nullableNumberEnum'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/enum-request-ref`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnumPatternObjectFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestGetRef(requestParameters: FakeEnumRequestGetRefRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnumPatternObject> {
        const response = await this.fakeEnumRequestGetRefRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestPostInlineRaw(requestParameters: FakeEnumRequestPostInlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FakeEnumRequestGetInline200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/enum-request-inline`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FakeEnumRequestGetInline200ResponseToJSON(requestParameters['fakeEnumRequestGetInline200Response']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FakeEnumRequestGetInline200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestPostInline(requestParameters: FakeEnumRequestPostInlineRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FakeEnumRequestGetInline200Response> {
        const response = await this.fakeEnumRequestPostInlineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestPostRefRaw(requestParameters: FakeEnumRequestPostRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnumPatternObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/enum-request-ref`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnumPatternObjectToJSON(requestParameters['enumPatternObject']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnumPatternObjectFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestPostRef(requestParameters: FakeEnumRequestPostRefRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnumPatternObject> {
        const response = await this.fakeEnumRequestPostRefRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FakeEnumRequestGetInlineStringEnumEnum = {
    One: 'one',
    Two: 'two',
    Three: 'three'
} as const;
export type FakeEnumRequestGetInlineStringEnumEnum = typeof FakeEnumRequestGetInlineStringEnumEnum[keyof typeof FakeEnumRequestGetInlineStringEnumEnum];
/**
 * @export
 */
export const FakeEnumRequestGetInlineNullableStringEnumEnum = {
    One: 'one',
    Two: 'two',
    Three: 'three'
} as const;
export type FakeEnumRequestGetInlineNullableStringEnumEnum = typeof FakeEnumRequestGetInlineNullableStringEnumEnum[keyof typeof FakeEnumRequestGetInlineNullableStringEnumEnum];
/**
 * @export
 */
export const FakeEnumRequestGetInlineNumberEnumEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type FakeEnumRequestGetInlineNumberEnumEnum = typeof FakeEnumRequestGetInlineNumberEnumEnum[keyof typeof FakeEnumRequestGetInlineNumberEnumEnum];
/**
 * @export
 */
export const FakeEnumRequestGetInlineNullableNumberEnumEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type FakeEnumRequestGetInlineNullableNumberEnumEnum = typeof FakeEnumRequestGetInlineNullableNumberEnumEnum[keyof typeof FakeEnumRequestGetInlineNullableNumberEnumEnum];
