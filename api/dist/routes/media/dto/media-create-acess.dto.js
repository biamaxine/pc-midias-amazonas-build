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
exports.MediaCreateAccess = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_swagger_1 = require("../../user/constants/user.swagger");
const validation_global_1 = require("../../../shared/constants/validation.global");
const media_swagger_1 = require("../constants/media.swagger");
class MediaCreateAccess {
}
exports.MediaCreateAccess = MediaCreateAccess;
__decorate([
    (0, swagger_1.ApiProperty)(media_swagger_1.mediaApiProperty.filename),
    (0, class_validator_1.IsString)(validation_global_1.default.filename.isString),
    __metadata("design:type", String)
], MediaCreateAccess.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(media_swagger_1.mediaApiProperty.url),
    (0, class_validator_1.IsString)(validation_global_1.default.url.isString),
    (0, class_validator_1.IsUrl)({}, validation_global_1.default.url.isUrl),
    __metadata("design:type", String)
], MediaCreateAccess.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(user_swagger_1.userApiProperty.email),
    (0, class_validator_1.IsString)(validation_global_1.default.email.isString),
    (0, class_validator_1.IsEmail)({}, validation_global_1.default.email.isEmail[0]),
    (0, class_validator_1.IsEmail)(validation_global_1.default.email.isEmail[1], validation_global_1.default.email.isEmail[2]),
    __metadata("design:type", String)
], MediaCreateAccess.prototype, "email", void 0);
//# sourceMappingURL=media-create-acess.dto.js.map