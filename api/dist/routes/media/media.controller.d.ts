import { DefaultResponse } from 'src/shared/classes/default-response';
import { MediaService } from './media.service';
import { MediaCreateAccess } from './dto/media-create-acess.dto';
import { Response } from 'express';
export declare class MediaController {
    private readonly service;
    constructor(service: MediaService);
    UPLOAD(email: string, file: Express.Multer.File): Promise<DefaultResponse<string>>;
    CREATE_ACCESS(dto: MediaCreateAccess): Promise<DefaultResponse>;
    READ(res: Response, token: string): Promise<DefaultResponse>;
}
