import type { InformeDTO } from "#Core/Application/Informe";
import type { IInformeWriteRepository } from "#Core/Application/Informe/interfaces";
import createInformeMongooseModel from "./InformeMongooseModel";

const createInformeWriteMongoService = (): IInformeWriteRepository => {
  const create = async (informe: InformeDTO): Promise<InformeDTO> => {
    const informeMongooseModel = createInformeMongooseModel();
    const informeEnMongoose = new informeMongooseModel(informe);

    await informeEnMongoose.save();

    return <InformeDTO>informeEnMongoose;
  };
  return {
    create,
  };
};
export default createInformeWriteMongoService;
