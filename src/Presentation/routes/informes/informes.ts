import type { FastifyInstance, FastifyPluginCallback } from "fastify";
import {
  crearInformeSchema,
  getInformePorIdSchema,
} from "#Presentation/schemas/informes";
import {
  crearInformeHandler,
  getInformePorIdHandler,
} from "#Presentation/controllers/informes";

const informesRoutes: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _options,
  done
) => {
  fastify.route({
    method: "GET",
    url: "/:id",
    schema: getInformePorIdSchema,
    handler: getInformePorIdHandler,
  });

  fastify.route({
    method: "POST",
    url: "/",
    schema: crearInformeSchema,
    handler: crearInformeHandler,
  });

  done();
};

export { informesRoutes };
