import type { InformeDTO } from "./InformeDTO";
import type { IInformeReadRepository } from "./interfaces/IInformeReadRepository";
import type { IInformeWriteRepository } from "./interfaces/IInformeWriteRepository";

type InformeUseCaseParams = {
  queryService: IInformeReadRepository;
  commandService: IInformeWriteRepository;
};

const InformeUseCase = ({
  queryService,
  commandService,
}: InformeUseCaseParams) => {
  const _queryService = queryService;
  const _commandService = commandService;

  const getById = (id: string): Promise<InformeDTO | undefined> => {
    return _queryService.getById(id);
  };

  const create = (informe: InformeDTO): Promise<InformeDTO> => {
    return _commandService.create(informe);
  };

  return { create, getById };
};

export default InformeUseCase;
