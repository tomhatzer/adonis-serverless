"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const standalone_1 = require("@adonisjs/core/build/standalone");
const aws_lambda_create_request_response_1 = __importDefault(require("aws-lambda-create-request-response"));
var app;
function createServer() {
    return new standalone_1.Ignitor(__dirname).httpServer().start().catch(console.error);
}
exports.handle = (event, context, callback) => {
    try {
        context.callbackWaitsForEmptyEventLoop = process.env.WAIT_FOR_EMPTY_EVENT_LOOP === 'yes';
        if (app === undefined) {
            app = createServer();
        }
        const { req, res } = aws_lambda_create_request_response_1.default(event, callback);
        return app(req, res);
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=lambda.js.map