//importar dependencias necesarias
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
//importar modulos
const ConnDb = require('./database/connDb');
const UserRouter = require('./routers/userRouter');

class Server{

  constructor(){
    //console.log(process.env.NODE_PRIVATE_KEY);
    //asociar base de datos
    this.connDb = new ConnDb();
    //Para crear aplicacion express
    this.app = express();
    this.config();
  }
  
  config(){
    //indicar que se procesaran datos en formato json en las peticiones a recibir
    this.app.use(express.json());
    //indicar el uso de morgan para el monitoreo de las peticiones http
    this.app.use(morgan());
    //configurrar/almacenar el puerto por donde correra el servidor
    this.app.set('PORT', process.env.PORT || 4000);
    //--------crear la ruta-------/end point (api) raiz
    let router = express.Router();
    router.get('/', (req, res)=>{
      res.status(200).json({mensaje: "Todo está ok"});
    });
    let userR = new UserRouter();
    //---anadir ruta a express---
    this.app.use(router);
    this.app.use(userR.router)
    //poner a la escucha el servidor
    this.app.listen(this.app.get('PORT'), ()=>{
      console.log("Servidor corriendo por el puerto --->", this.app.get('PORT'));
    });

  }

}

new Server();
