"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiResponse = createApiResponse;
const common_1 = require("@nestjs/common");
const default_response_1 = require("../classes/default-response");
function createApiResponse(status, message, { data, token, } = {}) {
    const apiResponse = {
        description: typeof status === 'string' ? status : common_1.HttpStatus[status],
        type: (default_response_1.DefaultResponse),
    };
    if (message.length > 1) {
        apiResponse.examples = {};
        message.forEach(item => {
            apiResponse.examples[item] = {
                summary: item,
                value: new default_response_1.DefaultResponse({
                    message: item,
                    status,
                }),
            };
        });
    }
    else {
        apiResponse.example = new default_response_1.DefaultResponse({
            message: message[0],
            status,
            data,
            token,
        });
    }
    return apiResponse;
}
//# sourceMappingURL=create-api-response.function.js.map