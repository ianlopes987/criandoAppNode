const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const {hash} = require("bcryptjs");

class UsersController{
    async create(request,response){
        const {name,email,password} = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("select * from users where email = (?)",[email]);

        if(checkUserExists){
            throw new AppError("Este email ja existe");
        }

        const hashedPassword = await hash(password,8);

        await database.run("INSERT INTO users (name,email,password) VALUES (?,?,?)",[name,email,hashedPassword]);

        return response.status(200).json();
    }
}

module.exports = UsersController;


/* é através da users controller que definimos o que sera apresentado a partir da solicitacao de uma rota
é nesse arquivo que controlamos o que vai ser feito ao acessar determinadas rotas. */

/* */