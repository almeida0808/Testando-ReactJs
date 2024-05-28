const AppError = require("../utils/AppError"); // nosso appError

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body; // pega os dados de dentro da requisição que foi feita pelo usuário

    if (!name || !email || !password) {
      // caso alguma informação n seja informado ele retorna um erro
      throw new AppError("As Informações do Usuário estão incompletas");
    }
    if (password.length < 8) {
      // caso a senha seja menor q 8 caracteres
      throw new AppError("A senha deve ter no mínimo 8 caracteres");
    }
    response.json({ name, email, password }); // envia como respota as informaçoes que foram capturadas
  }
}

module.exports = UsersController;
