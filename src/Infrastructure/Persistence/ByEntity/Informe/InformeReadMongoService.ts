import type { InformeDTO } from "../../../../Core/Application/Informe/InformeDTO";
import informeMapper from "../../../../Core/Application/Informe/InformeMapper";
import type { IInformeReadRepository } from "../../../../Core/Application/Informe/interfaces/IInformeReadRepository";
import informeMongooseModel from "./InformeMongooseModel";

const createInformeReadMongoService = (): IInformeReadRepository => {
  const getById = async (id: string): Promise<InformeDTO | undefined> => {
    const informeDesdeMongoose = await informeMongooseModel.findById(id);
    if (!informeDesdeMongoose) {
      return undefined;
    }

    const informeDTO = informeMapper.mapFromEntity(informeDesdeMongoose);

    return informeDTO;
  };
  return {
    getById,
  };
};
export { createInformeReadMongoService };
