import { HttpStatus } from '@nestjs/common';
export declare class DefaultResponse<T = any> {
    message: string;
    status: HttpStatus;
    data?: T;
    token?: string;
    constructor(config: {
        message: string;
        status: HttpStatus;
        data?: T;
        token?: string;
    });
}
