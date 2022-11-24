import type { InformeDTO } from "../../../../Core/Application/Informe/InformeDTO";
import type { IInformeWriteRepository } from "../../../../Core/Application/Informe/interfaces/IInformeWriteRepository";
import informeMongooseModel from "./InformeMongooseModel";

const createInformeWriteMongoService = (): IInformeWriteRepository => {
  const create = async (informe: InformeDTO): Promise<InformeDTO> => {
    const informeEnMongoose = new informeMongooseModel(informe);

    await informeEnMongoose.save();

    return <InformeDTO>informeEnMongoose;
  };
  return {
    create,
  };
};
export { createInformeWriteMongoService };
