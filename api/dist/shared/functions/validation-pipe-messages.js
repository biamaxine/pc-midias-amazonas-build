"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMessageMatches = exports.validateMessageIsUrl = exports.validateMessageIsDefined = exports.validateMessageIsEnum = exports.validateMessageIsStrongPassword = exports.validateMessageIsEmail = exports.validateMessageIsString = void 0;
const validateMessageIsString = (field) => {
    return `A propriedade '${field}' precisa ser uma string.`;
};
exports.validateMessageIsString = validateMessageIsString;
exports.validateMessageIsEmail = {
    default: (field) => {
        return `A propriedade '${field}' precisa receber um email válido, seguindo o formato 'email@dom.com'.`;
    },
    whiteList: (field, whiteList) => {
        return `A propriedade '${field}' precisa pertencer a um dos seguintes domínios permitidos: ${whiteList.length
            ? whiteList.map(domain => `@${domain}`).join(', ')
            : Object.keys(whiteList)
                .map(key => `'@${whiteList[key]}'`)
                .join(', ')}.`;
    },
};
exports.validateMessageIsStrongPassword = {
    default: (field) => {
        return `A propriedade '${field}' precisa ser forte: conter ao menos 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial e ter pelo menos 8 caracteres.`;
    },
};
exports.validateMessageIsEnum = {
    default: (field, enumValues) => {
        return `A propriedade '${field}' precisa ser um dos seguintes valores: ${enumValues.length
            ? enumValues.join(', ')
            : Object.keys(enumValues)
                .map(key => enumValues[key])
                .join(', ')}.`;
    },
};
const validateMessageIsDefined = (field) => {
    return `A propriedade '${field}' não pode ser indefinido ou nulo.`;
};
exports.validateMessageIsDefined = validateMessageIsDefined;
exports.validateMessageIsUrl = {
    default: (field) => {
        return `A propriedade '${field}' precisa ser uma URL válida no formato 'protocol://domain/path'. Example: 'https://www.exemplo.com'`;
    },
};
exports.validateMessageMatches = {
    default: (field, example) => {
        return `A propriedade '${field}' precisa corresponder ao formato: ${example}.`;
    },
};
//# sourceMappingURL=validation-pipe-messages.js.map