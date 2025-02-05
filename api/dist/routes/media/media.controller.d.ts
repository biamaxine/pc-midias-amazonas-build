import { Response } from 'express';
import { DefaultResponse } from 'src/shared/classes/default-response';
import { MediaCreateAccess } from './dto/media-create-acess.dto';
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly service;
    constructor(service: MediaService);
    UPLOAD(email: string, file: Express.Multer.File, metadata: string): Promise<DefaultResponse<string>>;
    CREATE_ACCESS(dto: MediaCreateAccess): Promise<DefaultResponse>;
    CHECK(filename: string): Promise<DefaultResponse>;
    READ(res: Response, token: string): Promise<void>;
    READ_METADATA(token: string): Promise<DefaultResponse>;
}
