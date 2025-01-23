"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const media_module_1 = require("./routes/media/media.module");
const user_module_1 = require("./routes/user/user.module");
const view_module_1 = require("./routes/view/view.module");
const prisma_service_1 = require("./shared/services/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: './uploads',
                serveRoot: '/uploads',
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.office365.com',
                    port: 587,
                    secure: false,
                    auth: { user: process.env.MAILER_USER, pass: process.env.MAILER_PASS },
                },
                defaults: {
                    from: `"Delegacia Geral de Polícia Cívil do Amazonas" <${process.env.MAILER_USER}>`,
                },
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            view_module_1.ViewModule,
            media_module_1.MediaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map