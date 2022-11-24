import { model } from "mongoose";
import { informeMongooseSchema } from "./InformeMongooseSchema";

const informeMongooseModel = model("informe", informeMongooseSchema);

export default informeMongooseModel;
