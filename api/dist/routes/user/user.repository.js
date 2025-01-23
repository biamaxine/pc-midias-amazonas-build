"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const default_exception_1 = require("../../shared/classes/default-exception");
const prisma_service_1 = require("../../shared/services/prisma.service");
let UserRepository = class UserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.user.create({ data });
        }
        catch (err) {
            if (err.code === 'P2002')
                throw new default_exception_1.DefaultException({
                    message: 'Email já cadastrado.',
                    status: common_1.HttpStatus.CONFLICT,
                    data: err,
                });
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível criar o usuário.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
    async read(options = {}) {
        const { id, email, filter } = options;
        if (id || email) {
            const user = await this.prisma.user.findUnique({
                where: id ? { id } : { email },
            });
            if (!user)
                throw new default_exception_1.DefaultException({
                    message: id ? 'Usuário não encontrado.' : 'Email não cadastrado.',
                    status: common_1.HttpStatus.NOT_FOUND,
                });
            return user;
        }
        return await this.prisma.user.findMany({
            where: {
                email: { contains: filter.email, mode: 'insensitive' },
                name: { contains: filter.name, mode: 'insensitive' },
            },
        });
    }
    async update(email, data) {
        const { name, role, password } = (await this.read({ email }));
        try {
            return await this.prisma.user.update({
                where: { email },
                data: {
                    name: data.name ?? name,
                    role: data.role ?? role,
                    password: data.password ?? password,
                },
            });
        }
        catch (err) {
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível atualizar o usuário.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
    async delete(email) {
        try {
            return await this.prisma.user.delete({ where: { email } });
        }
        catch (err) {
            if (err.code === 'P2025')
                throw new default_exception_1.DefaultException({
                    message: 'Email não cadastrado.',
                    status: common_1.HttpStatus.NOT_FOUND,
                    data: err,
                });
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível excluir o usuário.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map