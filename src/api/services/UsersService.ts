/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tokens } from '../models/Tokens';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Register a new user
     * @param requestBody User registration data
     * @returns Tokens User registered successfully
     * @throws ApiError
     */
    public static registerUser(
        requestBody: User,
    ): CancelablePromise<Tokens> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User login
     * @param requestBody User login data
     * @returns Tokens User logged in successfully
     * @throws ApiError
     */
    public static loginUser(
        requestBody: User,
    ): CancelablePromise<Tokens> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Refresh Access Token
     * Refresh the access token using a valid refresh token.
     * @param requestBody
     * @returns any Successful token refresh
     * @throws ApiError
     */
    public static refreshToken(
        requestBody: {
            refreshToken: string;
        },
    ): CancelablePromise<{
        /**
         * The newly generated access token.
         */
        accessToken?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
