const usersRouter = require("./users.routes"); // importas as rotas users

const { Router } = require("express"); // permite que usamos rotas em arquivos separados

const routes = Router(); // roda a função acima guardando na const routes

routes.use("/users", usersRouter); // toda vez que for acessado a rota /users ele encaminha para o arquivo usersRouter

module.exports = routes;
