"use strict";
// const fp = require('fastify-plugin')
// const als = require('async-local-storage')
Object.defineProperty(exports, "__esModule", { value: true });
const als = require("async-local-storage");
const fp = require("fastify-plugin");
const plugin = (fastify, options, next) => {
    const propName = options.propName || 'logger';
    als.enable();
    fastify.addHook("onRequest", async (request) => {
        als.set(propName, request.log, false);
    });
    fastify.addHook("onSend", async (request) => {
        als.remove();
    });
    next();
};
module.exports = fp(plugin, '1.x');
//# sourceMappingURL=index.js.map