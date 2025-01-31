"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const app_module_1 = require("./app.module");
const appOptions = {};
async function bootstrap() {
    if (process.env.NODE_ENV === 'production')
        appOptions.httpsOptions = {
            key: fs.readFileSync(path.join(__dirname, '..', 'policiacivil.key')),
            cert: fs.readFileSync(path.join(__dirname, '..', 'policiacivil.crt')),
        };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { ...appOptions });
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    app.use((req, res, next) => {
        res.setTimeout(300000, () => {
            console.error('Request timeout.');
            res.status(408).send('Request Timeout');
        });
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle('PC Mídias Amazonas')
        .setDescription('Documentação de Rotas da Aplicação.')
        .setVersion('1.0.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, swagger);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    app.use(morgan('dev'));
    app.enableCors({
        origin: [process.env.FRONT_URL],
        methods: ['POST', 'GET', 'PATCH', 'DELETE'],
        exposedHeaders: [
            'X-Metadata-Duration',
            'X-Metadata-Width',
            'X-Metadata-Height',
            'X-Metadata-Size',
        ],
    });
    await app.listen(process.env.PORT ?? 3000, () => {
        console.log(`✓ API listening in mode: ${process.env.NODE_ENV.toUpperCase()}.`, `\n✓ API listening at ${process.env.API_URL}:${process.env.PORT}.`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map