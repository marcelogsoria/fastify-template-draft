import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/innboxes2")
  .then(() => console.log("Mongodb conencted"))
  .catch((err) => console.log(err));
