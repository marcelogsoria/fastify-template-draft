import type { InformeDTO } from "../InformeDTO";

type IInformeReadRepository = {
  //   getAll(): Promise<InformeDTO[]>;
  getById(id: string): Promise<InformeDTO | undefined>;
  //   getByUsername(username: string): Promise<InformeDTO>;
  //   existsByUsername(username: string): Promise<boolean>;
};

export type { IInformeReadRepository };
