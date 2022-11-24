import fastify, { FastifyInstance } from "fastify";
import swagger from "../plugins/swagger";
import { informesRoutes } from "../routes/informes";
import initMongoose from "../../Infrastructure/Persistence/Mongoose/mongoose";

const Server = async (): Promise<FastifyInstance> => {
  const server = fastify();

  await server.register(swagger);
  initMongoose();
  server.register(informesRoutes, { prefix: "/informes" });

  return server;
};

export default Server;
