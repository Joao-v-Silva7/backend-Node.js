const db = require('./db');

const Anexos = db.sequelize.define("anexos", {
    ticket_id:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    user_id:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    nome_arquivo:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    url_storage:{
        type: db.Sequelize.STRING(500),
        allowNull: false
    },
    tipo_mime:{
        type: db.Sequelize.STRING(50),
        allowNull:false
    }
})
Anexos.sync({force: false});
module.exports = Anexos;