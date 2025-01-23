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
exports.MediaRepository = void 0;
const common_1 = require("@nestjs/common");
const default_exception_1 = require("../../shared/classes/default-exception");
const prisma_service_1 = require("../../shared/services/prisma.service");
let MediaRepository = class MediaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.media.create({ data });
        }
        catch (err) {
            if (err.code === 'P2002')
                throw new default_exception_1.DefaultException({
                    message: 'Uma mídia com esse nome já foi adicionada.',
                    status: common_1.HttpStatus.CONFLICT,
                    data: err,
                });
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível adicionar a mídia.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
    async read(options = {}) {
        const { id, filename } = options;
        if (id || filename) {
            const media = await this.prisma.media.findUnique({
                where: id ? { id } : { filename },
            });
            if (media)
                return media;
            throw new default_exception_1.DefaultException({
                message: 'Mídia não foi encontrada.',
                status: common_1.HttpStatus.NOT_FOUND,
            });
        }
        throw new default_exception_1.DefaultException({
            message: 'Nenhum identificador de mídia foi fornecido.',
            status: common_1.HttpStatus.BAD_REQUEST,
        });
    }
    async delete(options = {}) {
        const { id, filename } = options;
        if (id || filename) {
            try {
                return await this.prisma.media.delete({
                    where: id ? { id } : { filename },
                });
            }
            catch (err) {
                if (err.code === 'P2025')
                    throw new default_exception_1.DefaultException({
                        message: 'Mídia não foi encontrada.',
                        status: common_1.HttpStatus.NOT_FOUND,
                        data: err,
                    });
                throw new default_exception_1.DefaultException({
                    message: 'Não foi possível excluir a mídia.',
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    data: err,
                    log: true,
                });
            }
        }
        throw new default_exception_1.DefaultException({
            message: 'Nenhum identificador de mídia foi fornecido.',
            status: common_1.HttpStatus.BAD_REQUEST,
        });
    }
};
exports.MediaRepository = MediaRepository;
exports.MediaRepository = MediaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MediaRepository);
//# sourceMappingURL=media.repository.js.map