import { $Enums } from '@prisma/client';
export interface UserCreateModel {
    email: string;
    name?: string;
    role: $Enums.UserRole;
    password?: string;
}
