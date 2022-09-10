import type { FastifySchema } from "fastify";

export const informeSchema = {
  type: "object",
  required: ["lineanegocio", "vehiculo_nombre", "marca_vehiculo"],
  properties: {
    _id: {
      type: "string",
    },
    lineanegocio: {
      type: "string",
    },
    vehiculo_nombre: {
      type: "string",
    },
    marca_vehiculo: {
      type: "string",
    },
  }
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
  body: informeSchema,
  response: {
    201: informeSchema,
    400: apiErrorSchema,
  },
};
