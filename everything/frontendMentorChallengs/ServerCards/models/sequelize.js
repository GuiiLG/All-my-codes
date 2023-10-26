const db = require('./db')

const login = db.sequelize.define('logins', {
    name: {
        type : db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
})
module.exports = login