require("express-async-errors");
const AppError = require("./utils/AppError");

const database = require("./database/sqlite"); // importa nossa coneão com banco de dados

const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

database(); // roda a conexão com banco de dados

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    // caso o error capturado seja um erro do cliente:
    return response.status(error.statusCode).json({
      // retorna o status code do erro , que por padrao definimos o 400
      status: "error",
      message: error.message,
    });
  }

  return response.status(500).json({
    // caso seja um erro do lado do servidor ele cai aqui, retornando um status code de 500
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = 1717;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
