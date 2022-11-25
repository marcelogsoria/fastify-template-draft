import { model } from "mongoose";
import createInformeMongooseSchema from "./InformeMongooseSchema";

const informeMongooseSchema = createInformeMongooseSchema();

const createInformeMongooseModel = () =>
  model("informe", informeMongooseSchema);

export default createInformeMongooseModel;
