const db = require('./db')

const Comentarios = db.sequelize.define("comentarios", {
    ticket_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    user_id:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    text:{
        type: db.Sequelize.TEXT,
        allowNull:false
    }
})
Comentarios.sync({force: false});
module.exports = Comentarios