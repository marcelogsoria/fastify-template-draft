// import type { FastifySchema } from "fastify";
// import type { FromSchema } from "json-schema-to-ts";

// const informeSchema = {
//   type: "object",
//   required: ["lineanegocio", "vehiculo_nombre", "marca_vehiculo"],
//   properties: {
//     id: {
//       type: "string",
//       examples: [1],
//     },
//     lineanegocio: {
//       type: "string",
//       examples: ["I"],
//     },
//     vehiculo_nombre: {
//       type: "string",
//       examples: ["PEUGEOT 208 1.5 5P ALLURE NAV   (RES 2016)"],
//     },
//     marca_vehiculo: {
//       type: "string",
//       examples: ["PEUGEOT"],
//     },
//   },
//   examples: [
//     {
//       lineanegocio: "I",
//       vehiculo_nombre: "PEUGEOT 208 1.5 5P ALLURE NAV   (RES 2016)",
//       marca_vehiculo: "PEUGEOT",
//     },
//     {
//       id: "asoidjoaisjda",
//       lineanegocio: "I",
//       vehiculo_nombre: "PEUGEOT 208 1.5 5P ALLURE NAV   (RES 2016)",
//       marca_vehiculo: "PEUGEOT",
//     },
//   ],
// } as const;

// const getInformePorIdParamsSchema = {
//   type: "object",
//   require: ["id"],
//   properties: {
//     id: { type: "integer" },
//   },
//   additionalProperties: false,
// } as const;

// export type GetInformePorIdParams = FromSchema<
//   typeof getInformePorIdParamsSchema
// >;

// export const getInformePorIdSchema: FastifySchema = {
//   tags: ["Informes"],
//   description: "Get Informe por id",
//   params: getInformePorIdParamsSchema,
//   response: {
//     200: informeSchema,
//     404: {
//       description: "The post was not found",
//       // refer to postNotFound whenever a route use params
//       // $ref: "postNotFound#",
//     },
//   },
// };

// export const crearInformeSchema: FastifySchema = {
//   tags: ["Posts"],
//   description: "Crea un nuevo informe",
//   body: informeSchema,
//   response: {
//     201: informeSchema,
//   },
// };

// // Querystring Schema
// const querystringSchema = {
//   type: "object",
//   properties: {
//     deleted: { type: "boolean" },
//   },
//   additionalProperties: false,
// } as const;

// export type Querystring = FromSchema<typeof querystringSchema>;

// // Body Schema
// export const bodySchema = {
//   type: "object",
//   properties: {
//     id: { type: "number" },
//     title: { type: "string" },
//     published: { type: "boolean" },
//     content: { type: "string" },
//     tags: { type: "array", items: { type: "string" } },
//     deleted: { type: "boolean" },
//   },
//   required: ["title", "published", "content", "tags", "deleted"],
// } as const;

// export const postSchema = {
//   $id: "post",
//   type: "object",
//   properties: {
//     id: { type: "number" },
//     title: { type: "string" },
//     published: { type: "boolean" },
//     content: { type: "string" },
//     tags: { type: "array", items: { type: "string" } },
//     deleted: { type: "boolean" },
//   },
//   required: ["title", "published", "content", "tags", "deleted"],
// } as const;

// // We don't need to create a separate "bodySchema".
// // But directly infer type from postSchema
// export type Body = FromSchema<typeof postSchema>;

// // Reply Schema
// // Check https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#adding-a-shared-schema
// const replySchema = {
//   type: "object",
//   properties: {
//     posts: {
//       type: "array",
//       items: { $ref: "post#" },
//     },
//   },
//   additionalProperties: false,
// } as const;

// // Check https://github.com/ThomasAribart/json-schema-to-ts#references
// export type Reply = FromSchema<
//   typeof replySchema,
//   { references: [typeof postSchema] }
// >;

// export type PostNotFound = FromSchema<typeof postNotFoundSchema>;

// /* Get */
// export const getPostsSchema: FastifySchema = {
//   // Routes with same tags will be grouped in Swagger UI
//   tags: ["Posts"],
//   description: "Obtiene un infor",
//   querystring: querystringSchema,
//   response: {
//     200: {
//       // Return array of post
//       ...replySchema,
//     },
//   },
// };

// /* Post */
// export const postPostsSchema: FastifySchema = {
//   tags: ["Posts"],
//   description: "Crea un nuevo informe",
//   body: postSchema,
//   response: {
//     201: {
//       description: "The post was created",
//       // include a Location header that points to the URL of the new resource
//       headers: {
//         Location: {
//           type: "string",
//           description: "URL of the new resource",
//         },
//       },
//       // Return newly created resource as the body of the response
//       ...postSchema,
//     },
//   },
// };

// /* Put */
// export const putPostsSchema: FastifySchema = {
//   tags: ["Posts"],
//   description: "Update a post",
//   params: paramsSchema,
//   body: postSchema,
//   response: {
//     204: {
//       description: "The post was updated",
//       type: "null",
//     },
//     404: {
//       description: "The post was not found",
//       $ref: "postNotFound#",
//     },
//   },
// };

// /* Delete */
// export const deletePostsSchema: FastifySchema = {
//   tags: ["Posts"],
//   description: "Delete a post",
//   params: paramsSchema,
//   response: {
//     204: {
//       description: "The post was deleted",
//       type: "null",
//     },
//     404: {
//       description: "The post was not found",
//       $ref: "postNotFound#",
//     },
//   },
// };
