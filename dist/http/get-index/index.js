"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const utils_1 = require("../../shared/utils");
async function handler(request) {
    return {
        statusCode: utils_1.STATUSES.OK,
        headers: {
            "Content-Type": utils_1.CONTENT_TYPES.json,
        },
        body: JSON.stringify({ "Welcome to Arc using TypeScript": true }),
    };
}
exports.handler = handler;
