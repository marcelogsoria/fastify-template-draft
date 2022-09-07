import fastify, { FastifyInstance } from "fastify";
import swagger from "../plugins/swagger";
import { informesRoutes } from "../routes/informes";

const Server = async (): Promise<FastifyInstance> => {
  const server = fastify();

  await server.register(swagger);
  server.register(informesRoutes, { prefix: "/informes" });

  return server;
};

export default Server;
