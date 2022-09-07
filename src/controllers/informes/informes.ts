import type { RouteHandler } from "fastify";
import type {
  ApiError,
  GetInformePorIdParams,
  Informe,
} from "../../schemas/informes/types";
import { informes } from "./__fixtures__/informes";

export const getInformePorIdHandler: RouteHandler<{
  Params: GetInformePorIdParams;
  Reply: Informe | ApiError;
}> = async function (req, reply) {
  const { id } = req.params;
  const informeEncontrado = informes.find((p) => p.id === id);

  if (informeEncontrado) {
    reply.send(informeEncontrado);
  } else {
    reply.code(404).send({ error: "No se encontró el Informe" });
  }
};

export const crearInformeHandler: RouteHandler<{
  Body: Informe;
  Reply: Informe | ApiError;
}> = async function (req, reply) {
  const nuevoInforme = req.body;
  const informeCreado = { ...nuevoInforme, id: "123123123" };

  if (informeCreado) {
    reply.send(informeCreado);
  } else {
    reply.code(400).send({ error: "Error durante la creación del informe." });
  }
};
