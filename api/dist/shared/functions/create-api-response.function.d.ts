import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
export declare function createApiResponse<T = any>(status: HttpStatus, message: string[], { data, token, }?: {
    data?: T;
    token?: string;
    examples?: Record<string, string>;
}): ApiResponseOptions;
