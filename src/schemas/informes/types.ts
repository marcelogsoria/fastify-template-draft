import type { FromSchema } from "json-schema-to-ts";
import type {
  apiErrorSchema,
  getInformePorIdParamsSchema,
  informeSchema,
} from "./informes";

export type ApiError = FromSchema<typeof apiErrorSchema>;

export type GetInformePorIdParams = FromSchema<
  typeof getInformePorIdParamsSchema
>;

export type Informe = FromSchema<typeof informeSchema>;
