exports.up = (
  knex // função de adicionar tabela
) =>
  knex.schema.createTable("users", (table) => {
    // função do knex para criar tabelas , primeiro parametro é o nome da tabela, segundo são uma função que especifica cada coluna da tabela, ou seja nforma qual tipo , qual nome de cada coluna.

    table.increments("id").primary(); // informa que é um valor do tipo increments, ou seja toda vez que é adicionado um usuário ele incrementa um, e informa que esse id é a chave primaria

    // campos do tipo text
    table.text("name");
    table.text("avatar");

    //informa quando o usuário foi criado
    table.timestamp("created_at").default(knex.fn.now());
    //informa quando foi atualizado
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users"); // apaga a tabela
