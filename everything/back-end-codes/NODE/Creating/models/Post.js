const db = require('./db')

const Post = db.sequelize.define('posts', {
    titulo:{
        type: db.Sequelize.STRING
    },
    texto :{
        type: db.Sequelize.TEXT
    }
})
module.exports = Post