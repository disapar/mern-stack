import express from "express";
import cors from 'cors';
import router from "../router/index.router.js";


export default class Server{

    constructor(){

        this.app = express();
        this.port = '4500';
        this.path = '/api';
        this.midlewares()
        this.routes();
    }

    midlewares(){
        this.app.use(cors())

        this. app.use(express.json())

    }

    routes(){
        this.app.use(this.path, router)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online en el puerto ${this.port}`)
        })
    }

}