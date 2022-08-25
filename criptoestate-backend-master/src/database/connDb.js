const mongoose = require('mongoose');
const {db} = require('./urlDb');

class ConnDb{
    constructor(){
        this.connection();
    }

    async connection(){
        /*opcion 1
        this.conn = await mongoose.connect(db);
        */
        mongoose.connect(db).then(()=>{
            console.log("Estoy conectado a la Base de Datos :D");
        })
    }
}

module.exports = ConnDb;