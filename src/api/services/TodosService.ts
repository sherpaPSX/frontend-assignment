/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TodoRequest } from '../models/TodoRequest';
import type { TodoResponse } from '../models/TodoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TodosService {
    /**
     * Get the list of todos
     * @returns TodoResponse Successful response
     * @throws ApiError
     */
    public static getTodoList(): CancelablePromise<Array<TodoResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/todo/list',
        });
    }
    /**
     * Get a specific todo by ID
     * @param id
     * @returns TodoResponse Successful response
     * @throws ApiError
     */
    public static getTodoById(
        id: string,
    ): CancelablePromise<TodoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/todo/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete a todo by ID
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteTodoById(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/todo/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a todo by ID
     * @param id
     * @param requestBody
     * @returns TodoResponse Todo updated successfully
     * @throws ApiError
     */
    public static updateTodoById(
        id: string,
        requestBody?: TodoRequest,
    ): CancelablePromise<TodoResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/todo/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a new todo
     * @param requestBody
     * @returns TodoResponse Todo created successfully
     * @throws ApiError
     */
    public static createTodo(
        requestBody?: TodoRequest,
    ): CancelablePromise<TodoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/todo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Mark a todo as complete
     * @param id
     * @returns any Todo marked as complete successfully
     * @throws ApiError
     */
    public static markTodoComplete(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/todo/{id}/complete',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Mark a todo as incomplete
     * @param id
     * @returns any Todo marked as incomplete successfully
     * @throws ApiError
     */
    public static markTodoIncomplete(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/todo/{id}/incomplete',
            path: {
                'id': id,
            },
        });
    }
}
