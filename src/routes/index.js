const {Router} = require("express");

const routes = Router();

const usersRouter = require("./users.routes");

routes.use("/users", usersRouter);

module.exports = routes;

/* nesse arquivo é que chamamos as rotas de fato */