"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultException = void 0;
const common_1 = require("@nestjs/common");
const default_response_1 = require("./default-response");
class DefaultException extends common_1.HttpException {
    constructor(res) {
        super(res.message, res.status);
        if (common_1.HttpException.captureStackTrace)
            common_1.HttpException.captureStackTrace(this, common_1.HttpException);
        if (res.log)
            console.error(new default_response_1.DefaultResponse({
                message: res.message,
                status: res.status,
                data: res.data,
                token: res.token,
            }));
    }
}
exports.DefaultException = DefaultException;
//# sourceMappingURL=default-exception.js.map