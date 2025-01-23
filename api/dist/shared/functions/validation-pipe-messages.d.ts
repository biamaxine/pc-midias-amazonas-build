type Enum = Record<string, string>;
export declare const validateMessageIsString: (field: string) => string;
export declare const validateMessageIsEmail: {
    default: (field: string) => string;
    whiteList: (field: string, whiteList: string[] | Enum) => string;
};
export declare const validateMessageIsStrongPassword: {
    default: (field: string) => string;
};
export declare const validateMessageIsEnum: {
    default: (field: string, enumValues: string[] | Enum) => string;
};
export declare const validateMessageIsDefined: (field: string) => string;
export declare const validateMessageIsUrl: {
    default: (field: string) => string;
};
export declare const validateMessageMatches: {
    default: (field: string, example: string) => string;
};
export {};
