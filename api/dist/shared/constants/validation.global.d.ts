import { ValidationOptions } from 'class-validator';
declare const validation: {
    email: {
        isString: ValidationOptions;
        isEmail: [ValidationOptions, validator.IsEmailOptions, ValidationOptions];
    };
    name: {
        isString: ValidationOptions;
    };
    role: {
        isString: ValidationOptions;
        isEnum: ValidationOptions;
    };
    password: {
        isString: ValidationOptions;
        isStrongPassword: ValidationOptions;
        isDefined: ValidationOptions;
    };
    newPassword: {
        isString: ValidationOptions;
        isStrongPassword: ValidationOptions;
    };
    url: {
        isString: ValidationOptions;
        isUrl: ValidationOptions;
    };
    filename: {
        isString: ValidationOptions;
    };
};
export default validation;
