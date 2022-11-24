import type { FromSchema } from "json-schema-to-ts";
import type {
  apiErrorSchema,
  getInformePorIdParamsSchema,
  informeSchema,
  informeParaCreacionSchema,
} from "./informes";

export type ApiError = FromSchema<typeof apiErrorSchema>;

export type GetInformePorIdParams = FromSchema<
  typeof getInformePorIdParamsSchema
>;

export type Informe = FromSchema<typeof informeSchema>;
export type InformeParaCreacion = FromSchema<typeof informeParaCreacionSchema>;
