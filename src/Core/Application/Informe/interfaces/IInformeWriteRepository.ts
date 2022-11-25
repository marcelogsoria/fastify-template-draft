import type { InformeDTO } from "../types";

type IInformeWriteRepository = {
  create(informe: InformeDTO): Promise<InformeDTO>;
};

export type { IInformeWriteRepository };
