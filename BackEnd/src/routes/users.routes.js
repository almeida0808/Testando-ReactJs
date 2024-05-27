const { Router } = require("express"); // O Router permite que você defina rotas em arquivos separados e, em seguida, use essas rotas em seu aplicativo principal
const usersRoutes = Router(); // guardamos a função router dentro da const userRoutes

const UsersController = require("../controllers/UsersController"); // importa o user controller
const usersController = new UsersController(); // cria uma nova intancia do nosso controller, permite que

usersRoutes.post("/", usersController.create); // avisa que toda vez que acessar a rota raiz que no caso é /users usando o  metodo post(criar) ele vai fazer a função create que está no user controller

module.exports = usersRoutes;
