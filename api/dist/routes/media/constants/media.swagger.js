"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaApiResponse = exports.mediaApiProperty = void 0;
const common_1 = require("@nestjs/common");
const create_api_response_function_1 = require("../../../shared/functions/create-api-response.function");
exports.mediaApiProperty = {
    filename: {
        name: 'filename',
        description: 'Nome da mídia.',
        type: 'string',
        example: '9dd819ed-de78-4154-8c6a-6b752198808a.mp4',
    },
    url: {
        name: 'url',
        description: 'URL do frontend que consumirá a aplicação',
        type: 'string',
        example: 'https://pcmidias.policiacivil.am.gov.br/media/access/:token',
    },
};
exports.mediaApiResponse = {
    upload: {
        OK: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.OK, ['Mídia foi adicionada com sucesso.'], { data: '9dd819ed-de78-4154-8c6a-6b752198808a.mp4' }),
        CONFLICT: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.CONFLICT, [
            'Uma mídia com esse nome já foi adicionada.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Não foi possível adicionar a mídia.',
        ]),
    },
    createMediaAcess: {
        CREATED: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.CREATED, [
            'Acesso à Midia de Depoimento criado com sucesso.',
        ]),
        NOT_FOUND: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.NOT_FOUND, [
            'Mídia não foi encontrada.',
        ]),
        INTERNAL_SERVER_ERROR: (0, create_api_response_function_1.createApiResponse)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, [
            'Mídia registrada no DB mas não foi encontrada nos arquivos.',
            'Não foi possível criar o usuário.',
            'Não foi possível enviar o email de resposta à solicitação.',
        ]),
    },
};
//# sourceMappingURL=media.swagger.js.map