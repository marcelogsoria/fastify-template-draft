import fastify, { FastifyInstance } from "fastify";
import swagger from "#Presentation/plugins/swagger";
import { informesRoutes } from "#Presentation/routes/informes";
import { initMongoose } from "#Infrastructure/Persistence/Mongoose";

const createServer = async (): Promise<FastifyInstance> => {
  const server = fastify();

  await server.register(swagger);
  initMongoose();
  server.register(informesRoutes, { prefix: "/informes" });

  return server;
};

export { createServer };
