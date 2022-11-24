import type { FastifySchema } from "fastify";

export const informeParaCreacionSchema = {
  type: "object",
  required: ["lineanegocio", "vehiculo_nombre", "marca_vehiculo"],
  properties: {
    lineanegocio: {
      type: "string",
    },
    vehiculo_nombre: {
      type: "string",
    },
    marca_vehiculo: {
      type: "string",
    },
  },
} as const;

export const informeSchema = {
  ...informeParaCreacionSchema,
  required: [...informeParaCreacionSchema.required, "id"],
  properties: {
    ...informeParaCreacionSchema.properties,
    id: {
      type: "string",
    },
  },
} as const;

export const apiErrorSchema = {
  type: "object",
  required: ["error"],
  properties: {
    error: { type: "string" },
  },
  additionalProperties: false,
} as const;

export const getInformePorIdParamsSchema = {
  type: "object",
  required: ["id"],
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
} as const;

export const getInformePorIdSchema: FastifySchema = {
  tags: ["Informes"],
  description: "Get Informe por id",
  params: getInformePorIdParamsSchema,
  response: {
    200: informeSchema,
    404: apiErrorSchema,
  },
};

export const crearInformeSchema: FastifySchema = {
  tags: ["Informes"],
  description: "Crea un nuevo informe",
  body: informeParaCreacionSchema,
  response: {
    201: informeSchema,
    400: apiErrorSchema,
  },
};
