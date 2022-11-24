import type { InformeDTO } from "../InformeDTO";

type IInformeWriteRepository = {
  create(informe: InformeDTO): Promise<InformeDTO>;
};

export type { IInformeWriteRepository };
