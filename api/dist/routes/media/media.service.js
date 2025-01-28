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
exports.MediaService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const auth_service_1 = require("../../auth/auth.service");
const default_exception_1 = require("../../shared/classes/default-exception");
const default_response_1 = require("../../shared/classes/default-response");
const uuid = require("uuid");
const user_repository_1 = require("../user/user.repository");
const view_repository_1 = require("../view/view.repository");
const media_repository_1 = require("./media.repository");
let MediaService = class MediaService {
    constructor(repository, USER, auth, mailer, VIEW) {
        this.repository = repository;
        this.USER = USER;
        this.auth = auth;
        this.mailer = mailer;
        this.VIEW = VIEW;
    }
    async upload(email, file) {
        const user = (await this.USER.read({ email }));
        const filename = `${uuid.v4()}.mp4`;
        await this.repository.create({ authorId: user.id, filename });
        await fs.promises.rename(file.path, `./uploads/${filename}`);
        return new default_response_1.DefaultResponse({
            message: 'Mídia de Depoimento foi adicionada com sucesso.',
            status: common_1.HttpStatus.CREATED,
            data: filename,
        });
    }
    async createAccess({ filename, url, email, }) {
        await this.repository.read({ filename });
        if (!fs.existsSync(`./uploads/${filename}`)) {
            await this.repository.delete({ filename });
            throw new default_exception_1.DefaultException({
                message: 'Mídia registrada no DB mas não foi encontrada nos arquivos.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            });
        }
        const { user: { id, role }, created, } = await this.USER.read({ email })
            .then((user) => ({ user, created: false }))
            .catch(async () => await this.USER.create({ email, role: 'external_user' }).then((user) => ({ user, created: true })));
        const token = this.auth.createTokenAccess({ id, email, role, data: { filename } }, { expiresIn: '1h' });
        try {
            await this.mailer.sendMail({
                to: email,
                subject: 'PCAM MÍDIAS: Resposta de Solicitação de Acesso à Mídia',
                html: this.generateHTML(url, token),
            });
            return new default_response_1.DefaultResponse({
                message: 'Acesso à Midia de Depoimento criado com sucesso.',
                status: common_1.HttpStatus.CREATED,
                token,
            });
        }
        catch (err) {
            if (created)
                await this.USER.delete(email);
            throw new default_exception_1.DefaultException({
                message: 'Não foi possível enviar o email de resposta à solicitação.',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                data: err,
                log: true,
            });
        }
    }
    async read(res, token) {
        const payload = this.auth.decodeTokenAccess(token);
        const { email, data } = payload;
        if (!data.filename)
            throw new default_exception_1.DefaultException({
                message: 'Acesso negado.',
                status: common_1.HttpStatus.UNAUTHORIZED,
            });
        const user = (await this.USER.read({ email }));
        const media = {
            data: await this.repository.read({ filename: data.filename }),
            path: path.join(__dirname, '..', '..', '..', 'uploads', data.filename),
        };
        await this.VIEW.create({ userId: user.id, mediaId: media.data.id });
        media.stream = fs.createReadStream(media.path);
        res.set({
            'Content-Type': 'video/mp4',
            'Content-Length': fs.statSync(media.path).size,
        });
        media.stream.pipe(res);
        return new default_response_1.DefaultResponse({
            message: 'Mídia de Depoimento está sendo exibida ao Usuário.',
            status: common_1.HttpStatus.OK,
        });
    }
    generateHTML(url, token) {
        return `
      <h1> PCAM Mídias - Delegacia Geral de Polícia Cívil do Amazonas </h1>
      <hr>
      <p> Você solicitou acesso à uma Mídia de Depoimento. </p>
      <p> Para acessar o depoimento, <a href="${url}/${token}">CLIQUE AQUI</a>. </p>
      <p> Sua visualização do depoimento só será registrada após seu acesso ao link. <p/>

      <hr>
      <p> Caso não tenha realizado esta solicitação, por favor, ignore este email. </p>
    `;
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [media_repository_1.MediaRepository,
        user_repository_1.UserRepository,
        auth_service_1.AuthService,
        mailer_1.MailerService,
        view_repository_1.ViewRepository])
], MediaService);
//# sourceMappingURL=media.service.js.map