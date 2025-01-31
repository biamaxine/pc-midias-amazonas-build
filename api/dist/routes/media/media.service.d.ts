import { MailerService } from '@nestjs-modules/mailer';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { DefaultResponse } from 'src/shared/classes/default-response';
import { UserRepository } from '../user/user.repository';
import { ViewRepository } from '../view/view.repository';
import { MediaCreateAccess } from './dto/media-create-acess.dto';
import { MediaRepository } from './media.repository';
export declare class MediaService {
    private readonly repository;
    private readonly USER;
    private readonly auth;
    private readonly mailer;
    private readonly VIEW;
    constructor(repository: MediaRepository, USER: UserRepository, auth: AuthService, mailer: MailerService, VIEW: ViewRepository);
    upload(email: string, file: Express.Multer.File, metadata: string): Promise<DefaultResponse<string>>;
    createAccess({ filename, url, email, }: MediaCreateAccess): Promise<DefaultResponse>;
    readMetadata(token: string): Promise<DefaultResponse>;
    read(res: Response, token: string): Promise<void>;
    private createWaterMark;
    private generateHTML;
    private getMediaPath;
}
