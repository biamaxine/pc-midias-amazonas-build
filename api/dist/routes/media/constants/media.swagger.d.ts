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
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    check: {
        OK: import("@nestjs/swagger").ApiResponseOptions;
        BAD_REQUEST: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    read: {
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    readMetadata: {
        OK: import("@nestjs/swagger").ApiResponseOptions;
    };
};
