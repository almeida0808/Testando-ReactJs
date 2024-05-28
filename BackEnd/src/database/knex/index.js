const config = require("../../../knexfile"); // pega o nosso arquivo de configuração do knex
const knex = require("knex"); // importa o knex

const connection = knex(config.development); // informa pro knex que vamos usar as configurações que estão dentro do arquivo config

module.exports = connection; // exporta a nossa conexão do knex
