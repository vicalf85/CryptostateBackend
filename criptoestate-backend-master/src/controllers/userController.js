const User = require('../models/user');
const jsonwebtoken = require ('jsonwebtoken');

class UserController{

    register(req, res){
        let objUser = req.body;
        if (objUser.name && objUser.lastname && objUser.phone && objUser.email && objUser.wallet && objUser.password){
            User.create(objUser, (error, data)=>{
                if(error){
                    res.status(500).json({info: 'Error de inserción'});
                }else{
                    //console.table(req.body);
                    console.log(data);
                    let token = jsonwebtoken.sign(`${data._id}`, process.env.NODE_PRIVATE_KEY);
                    res.status(201).json({token});
                }
            });
        }else{
            res.status(400),json({info: 'Datos incompletos'})
        }
        
    }

}

module.exports = UserController;