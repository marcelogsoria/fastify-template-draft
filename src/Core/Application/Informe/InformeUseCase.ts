import type {
  createInformeUseCaseParams,
  InformeDTO,
  InformeUseCase,
} from "./types";

const createInformeUseCase = ({
  queryService,
  commandService,
}: createInformeUseCaseParams): InformeUseCase => {
  const _queryService = queryService;
  const _commandService = commandService;

  const getById = (id: string): Promise<InformeDTO | undefined> => {
    return _queryService?.getById(id);
  };

  const create = (informe: InformeDTO): Promise<InformeDTO> => {
    return _commandService.create(informe);
  };

  return { create, getById };
};

export default createInformeUseCase;
