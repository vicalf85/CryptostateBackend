const {Router} = require('express');
const UserController = require('../controllers/userController');

class UserRouter {
    constructor() {
        //Crear ruta como atributo de la clase
        this.router = Router();
        this.config();
    }

    config() {
        //Crear objeto UserController
        const userC = new UserController();
        this.router.post('/user', userC.register);
    }
}

module.exports = UserRouter;
