/* tslint:disable */
/* eslint-disable */
/**
 * Example
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
  Club,
} from '../models/index';
import {
    ClubFromJSON,
    ClubToJSON,
} from '../models/index';

export interface ListRequest {
    personId: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async listRaw(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Club>> {
        if (!runtime.exists(requestParameters, 'personId')) {
            throw new runtime.RequiredError(
                'personId',
                'Required parameter "personId" was null or undefined when calling list().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/person/display/{personId}`.replace(`{${"personId"}}`, encodeURIComponent(String(requestParameters['personId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClubFromJSON(jsonValue));
    }

    /**
     */
    async list(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Club> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
