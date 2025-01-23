import { ApiPropertyOptions, ApiQueryOptions } from '@nestjs/swagger';
export declare const userApiProperty: {
    email: ApiPropertyOptions;
    name: ApiPropertyOptions;
    role: ApiPropertyOptions;
    password: ApiPropertyOptions;
    newPassword: ApiPropertyOptions;
};
export declare const userApiQuery: {
    adminRead: {
        email: ApiQueryOptions;
        name: ApiQueryOptions;
    };
};
export declare const userApiResponse: {
    signUp: {
        CREATED: import("@nestjs/swagger").ApiResponseOptions;
        BAD_REQUEST: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    signIn: {
        CREATED: import("@nestjs/swagger").ApiResponseOptions;
    };
    read: {
        OK: import("@nestjs/swagger").ApiResponseOptions;
    };
    adminRead: {
        OK: import("@nestjs/swagger").ApiResponseOptions;
    };
    updateName: {
        NO_CONTENT: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    updatePassword: {
        NO_CONTENT: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    updateRole: {
        NO_CONTENT: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
    delete: {
        NO_CONTENT: import("@nestjs/swagger").ApiResponseOptions;
        INTERNAL_SERVER_ERROR: import("@nestjs/swagger").ApiResponseOptions;
    };
};
