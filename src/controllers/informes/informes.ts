import type { RouteHandler } from "fastify";
import type {
  ApiError,
  GetInformePorIdParams,
  Informe,
} from "../../schemas/informes/types";
const InformeModel = require("../../models/InformeModel");

export const getInformePorIdHandler: RouteHandler<{
  Params: GetInformePorIdParams;
  Reply: Informe | ApiError;
}> = async function (req, reply) {
  const informe = await InformeModel.findById(req.params.id);
  console.log(informe);
  if (informe) {
    reply.send(informe);
  } else {
    reply.code(404).send({ error: "No se encontró el Informe" });
  }
};

export const crearInformeHandler: RouteHandler<{
  Body: Informe;
  Reply: Informe | ApiError;
}> = async function (req, reply) {
  const informe = new InformeModel(req.body);

  await informe.save();

  if (informe) {
    reply.send(informe);
  } else {
    reply.code(400).send({ error: "Error durante la creación del informe." });
  }
};
