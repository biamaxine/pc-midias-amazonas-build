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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const default_exception_1 = require("../../shared/classes/default-exception");
const swagger_global_1 = require("../../shared/constants/swagger.global");
const email_guard_1 = require("../../shared/guards/email.guard");
const media_swagger_1 = require("./constants/media.swagger");
const media_create_acess_dto_1 = require("./dto/media-create-acess.dto");
const media_service_1 = require("./media.service");
const swagger = {
    uploadMedia: {
        interceptors: {
            file_interceptor: (0, platform_express_1.FileInterceptor)('file', {
                storage: (0, multer_1.diskStorage)({
                    destination: './uploads',
                    filename: (req, file, callback) => callback(null, file.originalname),
                }),
                fileFilter: (req, file, callback) => {
                    if (!file)
                        return callback(new default_exception_1.DefaultException({
                            message: 'Nenhuma mídia foi fornecida.',
                            status: common_1.HttpStatus.BAD_REQUEST,
                        }), false);
                    if (file.mimetype !== 'video/mp4')
                        return callback(new default_exception_1.DefaultException({
                            message: "Mídias fornecidas precisam estar no formato 'MP4'",
                            status: common_1.HttpStatus.BAD_REQUEST,
                        }), false);
                    return callback(null, true);
                },
            }),
        },
        apiBody: {
            description: '**Arquivo de Mídia**',
            type: 'object',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    'file:': {
                        type: 'string',
                        format: 'binary',
                        description: 'Mídia precisa estar em formato `.mp4`',
                    },
                    'metadata:': {
                        type: 'string',
                        description: 'Metadados do vídeo em como JSON.stringify()',
                    },
                },
            },
        },
    },
};
let MediaController = class MediaController {
    constructor(service) {
        this.service = service;
    }
    UPLOAD(email, file, metadata) {
        console.log({ email });
        return this.service.upload(email, file, metadata);
    }
    CREATE_ACCESS(dto) {
        return this.service.createAccess(dto);
    }
    READ(res, token) {
        return this.service.read(res, token);
    }
    READ_METADATA(token) {
        return this.service.readMetadata(token);
    }
};
exports.MediaController = MediaController;
__decorate([
    (0, common_1.Post)('me/:email/upload'),
    (0, common_1.UseInterceptors)(swagger.uploadMedia.interceptors.file_interceptor),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(email_guard_1.EmailGuard),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.email),
    (0, swagger_1.ApiBody)(swagger.uploadMedia.apiBody),
    (0, swagger_1.ApiOkResponse)(media_swagger_1.mediaApiResponse.upload.OK),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiConflictResponse)(media_swagger_1.mediaApiResponse.upload.CONFLICT),
    (0, swagger_1.ApiInternalServerErrorResponse)(media_swagger_1.mediaApiResponse.upload.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('metadata')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "UPLOAD", null);
__decorate([
    (0, common_1.Post)('create-access'),
    (0, swagger_1.ApiCreatedResponse)(media_swagger_1.mediaApiResponse.createMediaAcess.CREATED),
    (0, swagger_1.ApiNotFoundResponse)(media_swagger_1.mediaApiResponse.createMediaAcess.NOT_FOUND),
    (0, swagger_1.ApiInternalServerErrorResponse)(media_swagger_1.mediaApiResponse.createMediaAcess.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [media_create_acess_dto_1.MediaCreateAccess]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "CREATE_ACCESS", null);
__decorate([
    (0, common_1.Get)('access/:token'),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiNotFoundResponse)(media_swagger_1.mediaApiResponse.read.NOT_FOUND),
    (0, swagger_1.ApiInternalServerErrorResponse)(media_swagger_1.mediaApiResponse.read.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "READ", null);
__decorate([
    (0, common_1.Get)('metadata/:token'),
    (0, swagger_1.ApiOkResponse)(media_swagger_1.mediaApiResponse.readMetadata.OK),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiNotFoundResponse)(media_swagger_1.mediaApiResponse.read.NOT_FOUND),
    (0, swagger_1.ApiInternalServerErrorResponse)(media_swagger_1.mediaApiResponse.read.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "READ_METADATA", null);
exports.MediaController = MediaController = __decorate([
    (0, common_1.Controller)('media'),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaController);
//# sourceMappingURL=media.controller.js.map