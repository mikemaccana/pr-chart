"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const utils_1 = require("../../shared/utils");
async function handler(request) {
    utils_1.log(`Request to non-existent route ${request.rawPath}`);
    return {
        statusCode: utils_1.STATUSES["Not Found"],
        headers: {
            "Content-Type": utils_1.CONTENT_TYPES.html,
        },
        body: `<h1>Not found</h1>`,
    };
}
exports.handler = handler;
