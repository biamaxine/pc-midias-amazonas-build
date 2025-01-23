import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Request } from 'express';
import { UserEntity } from 'src/routes/user/entities/user.entity';
import { JwtPayload } from 'src/shared/interfaces/jwt-payload.interface';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class AuthService {
    private readonly jwt;
    private readonly prisma;
    constructor(jwt: JwtService, prisma: PrismaService);
    createTokenAccess(payload: JwtPayload, options?: JwtSignOptions): string;
    validate({ email }: JwtPayload): Promise<UserEntity>;
    decodeTokenAccess(token: string): JwtPayload;
    returnJwtExtractor(): (req: Request) => string;
    private jwtExtractor;
}
