import type { Informe } from "#Core/DomainModel/Entities/Informe";
import type {
  IInformeReadRepository,
  IInformeWriteRepository,
} from "./interfaces";

type InformeDTO = {
  id: string;
  lineanegocio: string;
  vehiculo_nombre: string;
  marca_vehiculo: string;
};

type InformeMapper = {
  mapFromDTO: (dto: InformeDTO) => Informe;
  mapFromEntity: (informe: Informe) => InformeDTO;
};

type createInformeUseCaseParams = {
  queryService: IInformeReadRepository;
  commandService: IInformeWriteRepository;
};

type InformeUseCase = {
  getById: (id: string) => Promise<InformeDTO | undefined>;
  create: (informe: InformeDTO) => Promise<InformeDTO>;
};

export type {
  createInformeUseCaseParams,
  InformeDTO,
  InformeMapper,
  InformeUseCase,
};
