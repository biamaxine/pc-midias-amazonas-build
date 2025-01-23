import { $Enums } from '@prisma/client';
export interface UserView {
    id: string;
    email: string;
    role: $Enums.UserRole;
    name?: string;
    createdAt: Date;
    updatedAt: Date;
}
