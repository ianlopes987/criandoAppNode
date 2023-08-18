const AppError = require("../utils/AppError");

class UsersController{
    create(request,response){
        const {name,email,password} = request.body;

        if(!name){
            throw new AppError("Nome é obrigatório!!");
        }

        response.status(201).json({name,email});
    }
}

module.exports = UsersController;


/* é através da users controller que definimos o que sera apresentado a partir da solicitacao de uma rota
é nesse arquivo que controlamos o que vai ser feito ao acessar determinadas rotas. */

/* */