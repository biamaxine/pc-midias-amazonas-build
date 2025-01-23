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
exports.EmailGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/auth.service");
const default_exception_1 = require("../classes/default-exception");
let EmailGuard = class EmailGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const token = this.auth.returnJwtExtractor()(req);
        const payload = this.auth.decodeTokenAccess(token);
        if (payload.email !== req.params.email)
            throw new default_exception_1.DefaultException({
                message: 'Acesso negado.',
                status: common_1.HttpStatus.UNAUTHORIZED,
            });
        return true;
    }
};
exports.EmailGuard = EmailGuard;
exports.EmailGuard = EmailGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], EmailGuard);
//# sourceMappingURL=email.guard.js.map