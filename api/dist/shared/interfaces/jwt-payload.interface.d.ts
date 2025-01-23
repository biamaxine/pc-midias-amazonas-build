import { $Enums } from '@prisma/client';
export interface JwtPayload {
    id: string;
    email: string;
    role: $Enums.UserRole;
    data?: any;
}
