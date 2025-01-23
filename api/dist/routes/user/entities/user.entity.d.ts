import { $Enums, User } from '@prisma/client';
export declare class UserEntity implements User {
    id: string;
    email: string;
    role: $Enums.UserRole;
    name: undefined | string;
    password: undefined | string;
    createdAt: Date;
    updatedAt: Date;
}
