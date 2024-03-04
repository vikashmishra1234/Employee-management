import express from "express";
import cors from "cors";

import mongoose from "mongoose";

 import Router from "./routes/routes.js";

const app = express();

const Port = 5000;

app.use(cors())


app.use(express.json());
app.use("/", Router);

app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});

const Connection = async (options) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://vikashmishra8371:LYhXlIcJlzSsX6bH@cluster0.xtyp9ke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(console.log("Successfully connected to the database"));
  } catch (error) {
    console.log("could not to the database", error);
  }
};

Connection();
