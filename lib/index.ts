// const fp = require('fastify-plugin')
// const als = require('async-local-storage')

import * as als from "async-local-storage"
import { FastifyInstance, FastifyRequest } from "fastify"
import * as fp from "fastify-plugin"
import { Server, IncomingMessage, ServerResponse } from "http"

const plugin = (
  fastify: FastifyInstance<Server, FastifyRequest<IncomingMessage>, ServerResponse>,
  options: {propName: string},
  next: () => any
) => {
  const propName = options.propName || 'logger'
  als.enable()  
  fastify.addHook("onRequest", async (request) => {
    als.set(propName, request.log, false)
  })
  fastify.addHook("onSend", async (request) => {
    als.remove()
  })
  next()
}

module.exports = fp(plugin, '1.x')
