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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../../auth/auth.service");
const default_exception_1 = require("../../shared/classes/default-exception");
const default_response_1 = require("../../shared/classes/default-response");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(repository, auth) {
        this.repository = repository;
        this.auth = auth;
    }
    async signUp({ email, name, role, password, }) {
        if (!role || (role === 'external_user' && password))
            throw new default_exception_1.DefaultException({
                message: 'Usuários Externos não podem definir senha.',
                status: common_1.HttpStatus.BAD_REQUEST,
            });
        await this.repository.create({
            email,
            name,
            role: role ?? 'external_user',
            password: password ? await bcrypt.hash(password, 10) : undefined,
        });
        return new default_response_1.DefaultResponse({
            message: 'Usuário criado com sucesso.',
            status: common_1.HttpStatus.CREATED,
        });
    }
    async signIn({ email, password }) {
        const { id, role, password: encrypted, } = (await this.repository.read({ email }));
        await this.checkPassword(password, encrypted);
        const token = this.auth.createTokenAccess({ id, email, role });
        return new default_response_1.DefaultResponse({
            message: 'Acesso autorizado.',
            status: common_1.HttpStatus.CREATED,
            token,
        });
    }
    async read(email) {
        const { id, name, role, createdAt, updatedAt } = (await this.repository.read({ email }));
        return new default_response_1.DefaultResponse({
            message: 'Exibindo informações do usuário.',
            status: common_1.HttpStatus.OK,
            data: { id, email, name, role, createdAt, updatedAt },
        });
    }
    async adminRead(id, query = {}) {
        const message = 'Exibindo usuários do sistema.';
        const status = common_1.HttpStatus.OK;
        if (id) {
            const { email, name, role, createdAt, updatedAt } = (await this.repository.read({ id }));
            return new default_response_1.DefaultResponse({
                message,
                status: common_1.HttpStatus.OK,
                data: [{ id, email, name, role, createdAt, updatedAt }],
            });
        }
        const users = (await this.repository.read({
            filter: { ...query },
        }));
        return new default_response_1.DefaultResponse({
            message,
            status,
            data: users.map(({ id, email, name, role, createdAt, updatedAt }) => ({ id, email, name, role, createdAt, updatedAt })),
        });
    }
    async updateName(email, { name }) {
        await this.repository.update(email, { name });
        return new default_response_1.DefaultResponse({
            message: `Nome de Usuário atualizado com sucesso para '${name}'.`,
            status: common_1.HttpStatus.NO_CONTENT,
        });
    }
    async updatePassword(email, { password, newPassword }) {
        const user = (await this.repository.read({ email }));
        await this.checkPassword(password, user.password);
        await this.repository.update(email, {
            password: await bcrypt.hash(newPassword, 10),
        });
        return new default_response_1.DefaultResponse({
            message: 'Senha atualizada com sucesso.',
            status: common_1.HttpStatus.NO_CONTENT,
        });
    }
    async updateRole(id, { role }) {
        const user = (await this.repository.read({ id }));
        await this.repository.update(user.email, { role });
        return new default_response_1.DefaultResponse({
            message: 'Permissão de Usuário atualizada com sucesso.',
            status: common_1.HttpStatus.NO_CONTENT,
        });
    }
    async delete(id) {
        const user = (await this.repository.read({ id }));
        await this.repository.delete(user.email);
        return new default_response_1.DefaultResponse({
            message: 'Usuário excluído com sucesso.',
            status: common_1.HttpStatus.NO_CONTENT,
        });
    }
    async checkPassword(password, encrypted) {
        if (!(await bcrypt.compare(password, encrypted)))
            throw new default_exception_1.DefaultException({
                message: 'Senha incorreta.',
                status: common_1.HttpStatus.UNAUTHORIZED,
            });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.service.js.map