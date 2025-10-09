const { Sequelize } = require("sequelize");
//conexão com o banco de dados
const sequelize = new Sequelize(
    "cadastro",
    "root",
    "123456",
    {
        host: "localhost",
        dialect: "mysql"  //colocar o nome do respectivo banco que estiver trabalhando
    }
);

sequelize.authenticate(function(){
    console.log("Banco de dados conectado com Sucesso");
}).catch(function(erro){
    console.log("Erro ao se conectar com o banco de dados" + erro);
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}