const db = require('./db')
//defininir o nome da tabela
const Produtos = db.sequelize.define("produtos", {
    nome:{
        type: db.Sequelize.STRING,
        //campo obrigatorio n pode ser nulo
        allowNull: false 
    },
    preco: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    descricao:{
        type: db.Sequelize.TEXT,
        allowNull: false       
    }

});
Produtos.sync({force: false});//false para n duplicar as tabelas quando o servidor abrir e fechar novamente caso eu force a criação dele
module.exports = Produtos;
