import fastifySwagger, { SwaggerOptions } from '@fastify/swagger';
import type { FastifyPluginCallback } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

// using declaration merging, add your plugin props to the appropriate fastify interfaces
// if prop type is defined here, the value will be typechecked when you call decorate{,Request,Reply}
declare module 'fastify' {
  interface FastifyRequest {
    myPluginProp: string
  }
  interface FastifyReply {
    myPluginProp: number
  }
}

// define options
export interface MyPluginOptions {
  myPluginOption: string
}

// define plugin using callbacks
const myPluginCallback: FastifyPluginCallback<MyPluginOptions> = (fastify, options, next) => {

  const swaggerConfig:SwaggerOptions = {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    hideUntagged: true,
    exposeRoute: true,
    ...options
  };

  fastify.register(fastifySwagger, swaggerConfig)

  next()
}

// export plugin using fastify-plugin
export default fastifyPlugin(myPluginCallback, '4.x')
// or
// export default fp(myPluginAsync, '3.x')