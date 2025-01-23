"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userApiResponse = exports.userApiQuery = exports.userApiProperty = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const domains_1 = require("../../../shared/constants/domains");
const create_api_response_function_1 = require("../../../shared/functions/create-api-response.function");
exports.userApiProperty = {
    email: {
        name: 'email',
        description: 'Email Institucional do usuário.',
        type: 'string',
        enum: domains_1.DOMAINS.map(domain => `fulano.tal@${domain}`),
        example: 'fulano.tal@policiacivil.am.gov.br',
    },
    name: {
        name: 'name',
        description: 'Nome do usuário.',
        type: 'string',
        example: 'Fulano de Tal',
    },
    role: {
        name: 'role',
        description: 'Nível de Acesso e Permissões do usuário.',
        type: 'string',
        enum: client_1.$Enums.UserRole,
        example: 'external_user',
    },
    password: {
        name: 'password',
        description: 'Senha do usuário (permitido apenas para usuários internos e administradores).',
        type: 'string',
        example: 'Senha@123',
    },
    newPassword: {
        name: 'newPassword',
        description: 'Nova senha para o usuário.',
        type: 'string',
        example: 'NovaSenha@123',
    },
};
exports.userApiQuery = {
    adminRead: {
        email: {
            name: 'email',
            description: 'Email Institucional de um usuário.',
            required: false,
        },
        name: {
            name: 'name',
            description: 'Nome de um usuário.',
            required: false,
        },
    },
};
exports.userApiResponse = {
    signUp: {
        CREATED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.CREATED, [
            'Usuário criado com sucesso.',
        ]),
        BAD_REQUEST: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.BAD_REQUEST, [
            'Usuários Externos não podem definir senha.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível criar o usuário.',
        ]),
    },
    signIn: {
        CREATED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.CREATED, ['Acesso autorizado.'], {
            token: 'Token Example ',
        }),
    },
    read: {
        OK: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.OK, ['Exibindo informações do usuário'], {
            data: {
                id: '550e8400-e29b-41d4-a716-446655440000',
                email: 'fulano.tal@policiacivil.am.gov.br',
                name: 'Fulano de Tal',
                role: 'external_user',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        }),
    },
    adminRead: {
        OK: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.OK, ['Exibindo usuários do sistema.'], {
            data: [
                {
                    id: '550e8400-e29b-41d4-a716-446655440000',
                    email: 'fulano.tal@policiacivil.am.gov.br',
                    name: 'Fulano de Tal',
                    role: 'external_user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
        }),
    },
    updateName: {
        NO_CONTENT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NO_CONTENT, [
            "Nome de Usuário atualizado com sucesso para 'Fulano de Tal'",
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível atualizar o nome do usuário.',
        ]),
    },
    updatePassword: {
        NO_CONTENT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NO_CONTENT, [
            'Senha atualizada com sucesso.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível atualizar a senha do usuário.',
        ]),
    },
    updateRole: {
        NO_CONTENT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NO_CONTENT, [
            'Permissão de Usuário atualizada com sucesso.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível atualizar as permissões do usuário.',
        ]),
    },
    delete: {
        NO_CONTENT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NO_CONTENT, [
            'Usuário excluído com sucesso.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível excluir o usuário.',
        ]),
    },
};
//# sourceMappingURL=user.swagger.js.map