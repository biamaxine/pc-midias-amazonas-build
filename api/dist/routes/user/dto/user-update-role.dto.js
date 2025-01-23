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
exports.UserUpdateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const validation_global_1 = require("../../../shared/constants/validation.global");
const user_swagger_1 = require("../constants/user.swagger");
class UserUpdateRoleDto {
}
exports.UserUpdateRoleDto = UserUpdateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)(user_swagger_1.userApiProperty.role),
    (0, class_validator_1.IsString)(validation_global_1.default.role.isString),
    (0, class_validator_1.IsEnum)(client_1.$Enums.UserRole, validation_global_1.default.role.isEnum),
    __metadata("design:type", String)
], UserUpdateRoleDto.prototype, "role", void 0);
//# sourceMappingURL=user-update-role.dto.js.map