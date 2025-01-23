"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const domains_1 = require("./domains");
const validation_pipe_messages_1 = require("../functions/validation-pipe-messages");
const validation = {
    email: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('email'),
        },
        isEmail: [
            { message: validation_pipe_messages_1.validateMessageIsEmail.default('email') },
            { host_whitelist: domains_1.DOMAINS },
            { message: validation_pipe_messages_1.validateMessageIsEmail.whiteList('email', domains_1.DOMAINS) },
        ],
    },
    name: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('name'),
        },
    },
    role: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('role'),
        },
        isEnum: {
            message: validation_pipe_messages_1.validateMessageIsEnum.default('role', client_1.$Enums.UserRole),
        },
    },
    password: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('password'),
        },
        isStrongPassword: {
            message: validation_pipe_messages_1.validateMessageIsStrongPassword.default('password'),
        },
        isDefined: {
            message: (0, validation_pipe_messages_1.validateMessageIsDefined)('password'),
        },
    },
    newPassword: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('newPassword'),
        },
        isStrongPassword: {
            message: validation_pipe_messages_1.validateMessageIsStrongPassword.default('newPassword'),
        },
    },
    url: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('url'),
        },
        isUrl: {
            message: validation_pipe_messages_1.validateMessageIsUrl.default('url'),
        },
    },
    filename: {
        isString: {
            message: (0, validation_pipe_messages_1.validateMessageIsString)('filename'),
        },
    },
};
exports.default = validation;
//# sourceMappingURL=validation.global.js.map