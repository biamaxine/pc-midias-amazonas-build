"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalApiReponse = exports.globalApiParam = void 0;
const common_1 = require("@nestjs/common");
const create_api_response_function_1 = require("../functions/create-api-response.function");
const domains_1 = require("./domains");
exports.globalApiParam = {
    email: {
        name: 'email',
        enum: domains_1.DOMAINS.map(domain => `fulano.tal@${domain}`),
        example: 'fulano.tal@policiacivil.am.gov.br',
    },
    id: {
        name: 'id',
        example: '30f645f9-bbf9-4980-9f28-d492b70545e4',
    },
};
exports.globalApiReponse = {
    AUTHENTICATION_NOT_PROVIDED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.BAD_REQUEST, [
        'Autenticação necessária não foi fornecida.',
    ]),
    INCORRECT_PASSWORD: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        'Senha incorreta.',
    ]),
    ACCESS_DENIED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.UNAUTHORIZED, ['Acesso negado.']),
    UNAUTHORIZED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        'Acesso negado.',
        'Senha incorreta.',
    ]),
    ADMINISTRATIVE_ROUTE: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        'Acesso exclusivo para administradores.',
    ]),
    EMAIL_NOT_REGISTERED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NOT_FOUND, [
        'Email não cadastrado.',
    ]),
    USER_NOT_FOUND: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NOT_FOUND, [
        'Usuário não foi encontrado.',
    ]),
    MEDIA_NOT_FOUND: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NOT_FOUND, [
        'Mídia não foi encontrada.',
    ]),
    EMAIL_CONFLICT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.CONFLICT, [
        'Email já cadastrado.',
    ]),
};
//# sourceMappingURL=swagger.global.js.map