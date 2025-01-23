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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const swagger_global_1 = require("../../shared/constants/swagger.global");
const admin_guard_1 = require("../../shared/guards/admin.guard");
const email_guard_1 = require("../../shared/guards/email.guard");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const sign_up_dto_1 = require("./dto/sign-up.dto");
const user_update_name_dto_1 = require("./dto/user-update-name.dto");
const user_update_password_dto_1 = require("./dto/user-update-password.dto");
const user_update_role_dto_1 = require("./dto/user-update-role.dto");
const user_service_1 = require("./user.service");
const user_swagger_1 = require("./constants/user.swagger");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    SIGN_UP(dto) {
        return this.service.signUp(dto);
    }
    SIGN_IN(dto) {
        return this.service.signIn(dto);
    }
    READ(email) {
        return this.service.read(email);
    }
    ADMIN_READ(id, query = {}) {
        return this.service.adminRead(id, query);
    }
    UPDATE_NAME(email, dto) {
        return this.service.updateName(email, dto);
    }
    UPDATE_PASSWORD(email, dto) {
        return this.service.updatePassword(email, dto);
    }
    UPDATE_ROLE(id, dto) {
        return this.service.updateRole(id, dto);
    }
    DELETE(id) {
        return this.service.delete(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('auth/sign-up'),
    (0, swagger_1.ApiCreatedResponse)(user_swagger_1.userApiResponse.signUp.CREATED),
    (0, swagger_1.ApiBadRequestResponse)(user_swagger_1.userApiResponse.signUp.BAD_REQUEST),
    (0, swagger_1.ApiConflictResponse)(swagger_global_1.globalApiReponse.EMAIL_CONFLICT),
    (0, swagger_1.ApiInternalServerErrorResponse)(user_swagger_1.userApiResponse.signUp.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "SIGN_UP", null);
__decorate([
    (0, common_1.Post)('auth/sign-in'),
    (0, swagger_1.ApiCreatedResponse)(user_swagger_1.userApiResponse.signIn.CREATED),
    (0, swagger_1.ApiNotFoundResponse)(swagger_global_1.globalApiReponse.EMAIL_NOT_REGISTERED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.INCORRECT_PASSWORD),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "SIGN_IN", null);
__decorate([
    (0, common_1.Get)('me/:email'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(email_guard_1.EmailGuard),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.email),
    (0, swagger_1.ApiOkResponse)(user_swagger_1.userApiResponse.read.OK),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "READ", null);
__decorate([
    (0, common_1.Get)(['admin/users', 'admin/users/:id']),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Rota exclusiva para administradores.' }),
    (0, swagger_1.ApiParam)({ ...swagger_global_1.globalApiParam.id, required: false }),
    (0, swagger_1.ApiQuery)(user_swagger_1.userApiQuery.adminRead.email),
    (0, swagger_1.ApiQuery)(user_swagger_1.userApiQuery.adminRead.name),
    (0, swagger_1.ApiOkResponse)(user_swagger_1.userApiResponse.adminRead.OK),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiNotFoundResponse)(swagger_global_1.globalApiReponse.USER_NOT_FOUND),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ADMIN_READ", null);
__decorate([
    (0, common_1.Patch)('me/:email/update/name'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(email_guard_1.EmailGuard),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.email),
    (0, swagger_1.ApiNoContentResponse)(user_swagger_1.userApiResponse.updateName.NO_CONTENT),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ACCESS_DENIED),
    (0, swagger_1.ApiInternalServerErrorResponse)(user_swagger_1.userApiResponse.updateName.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_name_dto_1.UserUpdateNameDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UPDATE_NAME", null);
__decorate([
    (0, common_1.Patch)('me/:email/update/password'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(email_guard_1.EmailGuard),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.email),
    (0, swagger_1.ApiNoContentResponse)(user_swagger_1.userApiResponse.updatePassword.NO_CONTENT),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.UNAUTHORIZED),
    (0, swagger_1.ApiInternalServerErrorResponse)(user_swagger_1.userApiResponse.updatePassword.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_password_dto_1.UserUpdatePasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UPDATE_PASSWORD", null);
__decorate([
    (0, common_1.Patch)('admin/update/role/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Rota exclusiva para administradores.' }),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.id),
    (0, swagger_1.ApiNoContentResponse)(user_swagger_1.userApiResponse.updateRole.NO_CONTENT),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ADMINISTRATIVE_ROUTE),
    (0, swagger_1.ApiNotFoundResponse)(swagger_global_1.globalApiReponse.USER_NOT_FOUND),
    (0, swagger_1.ApiInternalServerErrorResponse)(user_swagger_1.userApiResponse.updateRole.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_role_dto_1.UserUpdateRoleDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UPDATE_ROLE", null);
__decorate([
    (0, common_1.Delete)('admin/delete/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Rota exclusiva para administradores.' }),
    (0, swagger_1.ApiParam)(swagger_global_1.globalApiParam.id),
    (0, swagger_1.ApiNoContentResponse)(user_swagger_1.userApiResponse.delete.NO_CONTENT),
    (0, swagger_1.ApiBadRequestResponse)(swagger_global_1.globalApiReponse.AUTHENTICATION_NOT_PROVIDED),
    (0, swagger_1.ApiUnauthorizedResponse)(swagger_global_1.globalApiReponse.ADMINISTRATIVE_ROUTE),
    (0, swagger_1.ApiNotFoundResponse)(swagger_global_1.globalApiReponse.USER_NOT_FOUND),
    (0, swagger_1.ApiInternalServerErrorResponse)(user_swagger_1.userApiResponse.delete.INTERNAL_SERVER_ERROR),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "DELETE", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map