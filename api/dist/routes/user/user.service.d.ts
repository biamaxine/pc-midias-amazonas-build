import { AuthService } from 'src/auth/auth.service';
import { DefaultResponse } from 'src/shared/classes/default-response';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserUpdateNameDto } from './dto/user-update-name.dto';
import { UserUpdatePasswordDto } from './dto/user-update-password.dto';
import { UserUpdateRoleDto } from './dto/user-update-role.dto';
import { AdminReadQuery } from './interfaces/admin-read.query';
import { UserView } from './interfaces/user-view.interface';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly repository;
    private readonly auth;
    constructor(repository: UserRepository, auth: AuthService);
    signUp({ email, name, role, password, }: SignUpDto): Promise<DefaultResponse>;
    signIn({ email, password }: SignInDto): Promise<DefaultResponse>;
    read(email: string): Promise<DefaultResponse<UserView>>;
    adminRead(id?: string, query?: AdminReadQuery): Promise<DefaultResponse<UserView[]>>;
    updateName(email: string, { name }: UserUpdateNameDto): Promise<DefaultResponse>;
    updatePassword(email: string, { password, newPassword }: UserUpdatePasswordDto): Promise<DefaultResponse>;
    updateRole(id: string, { role }: UserUpdateRoleDto): Promise<DefaultResponse>;
    delete(id: string): Promise<DefaultResponse>;
    private checkPassword;
}
