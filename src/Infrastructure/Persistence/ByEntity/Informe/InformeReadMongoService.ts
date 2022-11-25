import type { InformeDTO } from "#Core/Application/Informe";
import type { IInformeReadRepository } from "#Core/Application/Informe/interfaces";
import { createInformeMapper } from "#Core/Application/Informe";
import createInformeMongooseModel from "./InformeMongooseModel";

const createInformeReadMongoService = (): IInformeReadRepository => {
  const getById = async (id: string): Promise<InformeDTO | undefined> => {
    const informeMongooseModel = createInformeMongooseModel();
    const informeDesdeMongoose = await informeMongooseModel.findById(id);
    if (!informeDesdeMongoose) {
      return undefined;
    }

    const informeMapper = createInformeMapper();

    const informeDTO = informeMapper.mapFromEntity(informeDesdeMongoose);

    return informeDTO;
  };
  return {
    getById,
  };
};
export default createInformeReadMongoService;
