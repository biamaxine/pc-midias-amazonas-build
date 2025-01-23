import { PrismaService } from 'src/shared/services/prisma.service';
import { ViewEntity } from './entities/view.entity';
import { ViewCreateModel } from './models/view-create.model';
export declare class ViewRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: ViewCreateModel): Promise<ViewEntity>;
    read(options?: {
        userId?: string;
        mediaId?: string;
    }): Promise<ViewEntity[]>;
}
