import type { FromSchema } from "json-schema-to-ts";
import type {
  apiErrorSchema,
  getInformePorIdParamsSchema,
  informeSchema,
  informeParaCreacionSchema,
} from "./informes";

type ApiError = FromSchema<typeof apiErrorSchema>;

type GetInformePorIdParams = FromSchema<typeof getInformePorIdParamsSchema>;

type InformeFromSchema = FromSchema<typeof informeSchema>;
type InformeParaCreacionFromSchema = FromSchema<
  typeof informeParaCreacionSchema
>;

export type {
  ApiError,
  GetInformePorIdParams,
  InformeFromSchema as Informe,
  InformeParaCreacionFromSchema as InformeParaCreacion,
};
