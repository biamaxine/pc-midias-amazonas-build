import { PrismaService } from 'src/shared/services/prisma.service';
import { MediaEntity } from './entities/media.entity';
import { CreateMediaModel } from './models/create-media.model';
export declare class MediaRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMediaModel): Promise<MediaEntity>;
    read(options?: {
        id?: string;
        filename?: string;
    }): Promise<MediaEntity>;
    delete(options?: {
        id?: string;
        filename?: string;
    }): Promise<MediaEntity>;
}
