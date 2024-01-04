"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinaeFerntest3ImdbApiError = void 0;
class MinaeFerntest3ImdbApiError extends Error {
    constructor({ message, statusCode, body }) {
        super(buildMessage({ message, statusCode, body }));
        Object.setPrototypeOf(this, MinaeFerntest3ImdbApiError.prototype);
        if (statusCode != null) {
            this.statusCode = statusCode;
        }
        if (body !== undefined) {
            this.body = body;
        }
    }
}
exports.MinaeFerntest3ImdbApiError = MinaeFerntest3ImdbApiError;
function buildMessage({ message, statusCode, body, }) {
    let lines = [];
    if (message != null) {
        lines.push(message);
    }
    if (statusCode != null) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }
    if (body != null) {
        lines.push(`Body: ${JSON.stringify(body, undefined, 2)}`);
    }
    return lines.join("\n");
}