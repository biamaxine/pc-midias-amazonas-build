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
exports.ViewRepository = void 0;
const common_1 = require("@nestjs/common");
const default_exception_1 = require("../../shared/classes/default-exception");
const prisma_service_1 = require("../../shared/services/prisma.service");
let ViewRepository = class ViewRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.view.create({ data });
        }
        catch (err) {
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível registrar a Visualização de Mídia.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
    async read(options = {}) {
        const { userId, mediaId } = options;
        return await this.prisma.view.findMany({
            where: {
                ...(userId && { userId }),
                ...(mediaId && { mediaId }),
            },
        });
    }
};
exports.ViewRepository = ViewRepository;
exports.ViewRepository = ViewRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ViewRepository);
//# sourceMappingURL=view.repository.js.map