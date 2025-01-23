import { PrismaService } from 'src/shared/services/prisma.service';
import { UserEntity } from './entities/user.entity';
import { UserCreateModel } from './models/user-create.model';
import { UserUpdateModel } from './models/user-update.model';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: UserCreateModel): Promise<UserEntity>;
    read(options?: {
        id?: string;
        email?: string;
        filter?: {
            email?: string;
            name?: string;
        };
    }): Promise<UserEntity | UserEntity[]>;
    update(email: string, data: UserUpdateModel): Promise<UserEntity>;
    delete(email: string): Promise<UserEntity>;
}
