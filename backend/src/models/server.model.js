import express from "express";
import cors from "cors";
import router from "../router/index.router.js";
import mongoose from "mongoose";
export default class Server {
  constructor() {
    this.app = express();
    this.port = "4500";
    this.path = "/api";
    this.database();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.app.use(cors());

    this.app.use(express.json());
    
  }

  routes() {
    this.app.use(this.path, router);
  }

  database(){
    const config = {useUnifiedTopology: true, useNewUrlParser: true };
    mongoose.connect('mongodb://localhost/api-post', config)
    .then(db => console.log("db conectada") )
    .catch(err=> console.log(err))
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server online en el puerto ${this.port}`);
    });
  }
}
