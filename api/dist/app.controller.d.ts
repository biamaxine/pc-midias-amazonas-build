import { AppService } from './app.service';
import { DefaultResponse } from './shared/classes/default-response';
export declare class AppController {
    private readonly service;
    constructor(service: AppService);
    READ(): DefaultResponse;
}
