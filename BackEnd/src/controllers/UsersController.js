const AppError = require("../utils/AppError"); // nosso appError
const knex = require("../database/knex"); // conexão com nosso banco de dados
const { hash } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body; // pega os dados de dentro da requisição que foi feita pelo usuário

    if (!name || !email || !password) {
      // caso alguma informação n seja informado ele retorna um erro
      throw new AppError("As Informações do Usuário estão incompletas");
    }
    if (password.length < 8) {
      // caso a senha seja menor q 8 caracteres
      throw new AppError("A senha deve ter no mínimo 8 caracteres");
    }

    const checkUserExists = await knex("users").where({ email }).first(); // verifica se o email informado já existe no database

    if (checkUserExists) {
      // caso exista
      throw new AppError("Esse email já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      // caso passe pelas verificações ele faz um insert passando as infos que foram passadas
      name,
      email,
      password: hashedPassword,
    });

    response.status(201).json("Usuário criado com sucesso!"); // envia como respota as informaçoes que foram capturadas
  }
}

module.exports = UsersController;
