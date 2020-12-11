"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromNow = exports.deepClone = exports.stringify = exports.warn = exports.log = exports.repeat = exports.wait = exports.asyncForEach = exports.CONTENT_TYPES = exports.STATUSES = void 0;
const http_1 = require("http");
exports.STATUSES = Object.fromEntries(Object.entries(http_1.STATUS_CODES).map((entry) => [entry[1], Number(entry[0])]));
exports.CONTENT_TYPES = {
    html: "text/html; charset=utf8",
    // JSON doesn't need a charset - it's assumed to be in UTF-8
    json: "application/json",
};
async function asyncForEach(array, iterator) {
    for (let index = 0; index < array.length; index++) {
        await iterator(array[index], index, array);
    }
}
exports.asyncForEach = asyncForEach;
const wait = async (timeInMs) => {
    return new Promise((resolve) => setTimeout(resolve, timeInMs));
};
exports.wait = wait;
async function repeat(func, count) {
    const results = [];
    for (let index = 0; index < count; index++) {
        results.push(func());
    }
    return Promise.all(results);
}
exports.repeat = repeat;
// eslint-disable-next-line no-console
exports.log = console.log.bind(console);
// eslint-disable-next-line no-console
exports.warn = console.warn.bind(console);
const stringify = (input) => {
    return JSON.stringify(input, null, 2);
};
exports.stringify = stringify;
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepClone = deepClone;
const dateFromNow = function (adjustmentMs) {
    const now = new Date().valueOf();
    return new Date(now + adjustmentMs);
};
exports.dateFromNow = dateFromNow;
