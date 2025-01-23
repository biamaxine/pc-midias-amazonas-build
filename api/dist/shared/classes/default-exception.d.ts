import { HttpException } from '@nestjs/common';
import { DefaultResponse } from './default-response';
export declare class DefaultException<T = any> extends HttpException {
    constructor(res: DefaultResponse<T> & {
        log?: boolean;
    });
}
