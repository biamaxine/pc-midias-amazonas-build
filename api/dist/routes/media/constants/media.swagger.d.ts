import { ApiPropertyOptions } from '@nestjs/swagger';
export declare const mediaApiProperty: {
    filename: ApiPropertyOptions;
    url: ApiPropertyOptions;
};
export declare const mediaApiResponse: {
    upload: {
        OK: import("@nestjs/swagger").ApiResponseOptions;
        CONFLICT: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    createMediaAcess: {
        CREATED: import("@nestjs/swagger").ApiResponseOptions;
        NOT_FOUND: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
};
