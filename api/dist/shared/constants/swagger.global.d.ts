import { ApiParamOptions } from '@nestjs/swagger';
export declare const globalApiParam: {
    email: ApiParamOptions;
    id: ApiParamOptions;
};
export declare const globalApiReponse: {
    AUTHENTICATION_NOT_PROVIDED: import("@nestjs/swagger").ApiResponseOptions;
    INCORRECT_PASSWORD: import("@nestjs/swagger").ApiResponseOptions;
    ACCESS_DENIED: import("@nestjs/swagger").ApiResponseOptions;
    UNAUTHORIZED: import("@nestjs/swagger").ApiResponseOptions;
    ADMINISTRATIVE_ROUTE: import("@nestjs/swagger").ApiResponseOptions;
    EMAIL_NOT_REGISTERED: import("@nestjs/swagger").ApiResponseOptions;
    USER_NOT_FOUND: import("@nestjs/swagger").ApiResponseOptions;
    MEDIA_NOT_FOUND: import("@nestjs/swagger").ApiResponseOptions;
    EMAIL_CONFLICT: import("@nestjs/swagger").ApiResponseOptions;
};
