import { Strategy } from 'passport-jwt';
import { UserEntity } from 'src/routes/user/entities/user.entity';
import { JwtPayload } from 'src/shared/interfaces/jwt-payload.interface';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly auth;
    constructor(auth: AuthService);
    validate(payload: JwtPayload): Promise<UserEntity>;
}
export {};
