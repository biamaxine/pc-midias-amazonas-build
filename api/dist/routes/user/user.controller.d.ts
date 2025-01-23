import { DefaultResponse } from 'src/shared/classes/default-response';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserUpdateNameDto } from './dto/user-update-name.dto';
import { UserUpdatePasswordDto } from './dto/user-update-password.dto';
import { UserUpdateRoleDto } from './dto/user-update-role.dto';
import { AdminReadQuery } from './interfaces/admin-read.query';
import { UserView } from './interfaces/user-view.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    SIGN_UP(dto: SignUpDto): Promise<DefaultResponse>;
    SIGN_IN(dto: SignInDto): Promise<DefaultResponse>;
    READ(email: string): Promise<DefaultResponse<UserView>>;
    ADMIN_READ(id?: string, query?: AdminReadQuery): Promise<DefaultResponse<UserView[]>>;
    UPDATE_NAME(email: string, dto: UserUpdateNameDto): Promise<DefaultResponse>;
    UPDATE_PASSWORD(email: string, dto: UserUpdatePasswordDto): Promise<DefaultResponse>;
    UPDATE_ROLE(id: string, dto: UserUpdateRoleDto): Promise<DefaultResponse>;
    DELETE(id: string): Promise<DefaultResponse>;
}
