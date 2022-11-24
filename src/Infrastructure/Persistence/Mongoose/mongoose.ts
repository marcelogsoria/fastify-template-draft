import mongoose from "mongoose";

const initMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/msea")
    .then(() => console.log("Mongodb conencted"))
    .catch((err) => console.log(err));
};

export default initMongoose;
