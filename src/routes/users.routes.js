const {Router} = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();


function myMiddleware(request,response,next){
    console.log("Voce passou pelo Middleware");

    if(!request.body.isAdmin){
        return response.json({message:"user unauthorized"});
    }

    next();
} /* nesse caso criamos um middleware que é uma função que serve como
um fiscal do que pode ou nao ser executado a partir de uma solicitacao feita para o servidor
como por exemplo se determinado usuario é ou não administrador para ter acesso ou nao 
a determinada funcao */





const usersController = new UsersController();


usersRoutes.post("/",myMiddleware,usersController.create); //indicando o caminho da rota

module.exports = usersRoutes;

/* nesse arquivo que criamos as rotas que serao acessadas atraves do cliente.  */