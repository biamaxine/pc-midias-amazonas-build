import { $Enums } from '@prisma/client';
export interface UserUpdateModel {
    name?: string;
    role?: $Enums.UserRole;
    password?: string;
}
