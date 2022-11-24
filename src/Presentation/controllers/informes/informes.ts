import type { RouteHandler } from "fastify";
import type {
  ApiError,
  GetInformePorIdParams,
  Informe,
} from "../../schemas/informes/types";
import InformeModel from "../../../Infrastructure/Persistence/ByEntity/Informe/InformeMongooseModel";
import InformeUseCase from "../../../Core/Application/Informe/InformeUseCase";
import { createInformeReadMongoService } from "../../../Infrastructure/Persistence/ByEntity/Informe/InformeReadMongoService";
import { createInformeWriteMongoService } from "../../../Infrastructure/Persistence/ByEntity/Informe/InformeWriteMongoService";

export const getInformePorIdHandler: RouteHandler<{
  Params: GetInformePorIdParams;
  Reply: Informe | ApiError;
}> = async function (req, reply) {
  const queryService = createInformeReadMongoService();
  const commandService = createInformeWriteMongoService();
  const informeUseCase = InformeUseCase({ queryService, commandService });

  const informe = await informeUseCase.getById(req.params.id);

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
    const informeForReply: Informe = {
      id: informe.id,
      lineanegocio: informe?.lineanegocio,
      vehiculo_nombre: informe?.vehiculo_nombre,
      marca_vehiculo: informe?.marca_vehiculo,
    };
    reply.send(informeForReply);
  } else {
    reply.code(400).send({ error: "Error durante la creación del informe." });
  }
};
