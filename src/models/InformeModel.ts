const { Schema, model } = require("mongoose");

const informeSchema = new Schema(
  {
    lineanegocio: String,
    vehiculo_nombre: String,
    marca_vehiculo: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("InformeModel", informeSchema);
