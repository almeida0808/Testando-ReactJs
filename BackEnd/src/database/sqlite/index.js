const sqlite = require("sqlite"); // responsavel pela conexão com database
const sqlite3 = require("sqlite3"); // driver/versão do sqlite
const path = require("path"); // path é do propio node e cuida dos caminhos de arquivos e diretórios.

async function sqlConnection() {
  // sempre que tiver banco de dados no meio da função usar o async

  const database = await sqlite.open({
    // pede pro sqlite abrir uma conexão com o database
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });

  return database; // retorna o database para podermos usar e outros lugares
}

module.exports = sqlConnection;
