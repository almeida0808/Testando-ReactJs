class UsersController {
  create(request, response) {
    const { name, email, password } = request.body; // pega os dados de dentro da requisição que foi feita pelo usuário
    response.json({ name, email, password }); // envia como respota as informaçoes que foram capturadas
  }
}

module.exports = UsersController;
