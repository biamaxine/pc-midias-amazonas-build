import { $Enums } from '@prisma/client';
export declare class SignUpDto {
    email: string;
    name?: string;
    role?: $Enums.UserRole;
    password?: string;
}
