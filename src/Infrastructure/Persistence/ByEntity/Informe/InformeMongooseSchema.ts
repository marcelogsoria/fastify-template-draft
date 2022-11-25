import { Schema } from "mongoose";
import type { InformeDTO } from "#Core/Application/Informe";

const createInformeMongooseSchema = () =>
  new Schema<InformeDTO>(
    {
      lineanegocio: { type: String, required: true },
      vehiculo_nombre: { type: String, required: true },
      marca_vehiculo: { type: String, required: true },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default createInformeMongooseSchema;
