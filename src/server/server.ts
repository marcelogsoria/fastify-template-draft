import fastify, { FastifyInstance } from "fastify";
import swagger from "../plugins/swagger";

const Server = async (): Promise<FastifyInstance> => {
  const server = fastify();

  await server.register(swagger);

  server.get("/ping", async (_request, _reply) => {
    return "pong\n";
  });
  server.put(
    "/some-route/:id",
    {
      schema: {
        description: "post some data",
        tags: ["user", "code"],
        summary: "qwerty",
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "user id",
            },
          },
        },
        body: {
          type: "object",
          properties: {
            hello: { type: "string" },
            obj: {
              type: "object",
              properties: {
                some: { type: "string" },
              },
            },
          },
        },
        response: {
          201: {
            description: "Successful response",
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
          default: {
            description: "Default response",
            type: "object",
            properties: {
              foo: { type: "string" },
            },
          },
        },
        security: [
          {
            apiKey: [],
          },
        ],
      },
    },
    (_req, _reply) => {}
  );
  return server;
};

export default Server;