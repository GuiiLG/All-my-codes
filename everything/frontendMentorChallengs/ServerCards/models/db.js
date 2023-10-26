const Sequelize = require("sequelize")
const sequelize = new Sequelize('loginCards', 'root', '12345', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

