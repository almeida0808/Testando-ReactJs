class AppError {
  // essa class serve pra padronizar as mensagens de erro da nossa aplicação

  // o fato de criar essas duas variaveis no topo da class faz com que elas sejam visiveis pra todo o restante das funcionalidades aqui dentro
  message;
  statusCode;

  // o metodo contrutor é chamado toda vez que a class é intanciada e nos informamospra ele que tem que ter uma mensagem de erro e caso n tenha o status code ele deixa como 400
  constructor(message, statusCode = 400) {
    // quando usamos o this nos estamos chamando aquelas duas variaveis do scoppo global da nossa class e atribuindo como valor a message e status code que foi passada quando a class foi instanciada
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
