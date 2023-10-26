









// ------------------------------------------------------------------------------
const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/login.html')

})
app.post('/createUser', (req, res)=>{
    const login = require('./login')
    const { inputName, inputEmail } = login;

    user.create({
        nome: inputName,
        email: inputEmail
    }).then(() => {
        res.send('User created successfully');
    }).catch((error) => {
        res.status(500).send('Error creating user: ' + error);
    });
})


const Sequelize = require("sequelize")
const sequelize = new Sequelize('loginSystem', 'root', 'M@tado10', {
    host:'localhost',
    dialect:'mysql'
})



// -------------------------------------------------------------
// const user = sequelize.define('users', {
//     nome:{
//         type: Sequelize.STRING
//     },
//     email:{
//         type: Sequelize.STRING
//     }
// })
// user.sync({force:true})



app.listen(8080, ()=>{
    console.log('Running')
})


// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('test', 'root', 'M@tado10', {
//     host: 'localhost',
//     dialect:'mysql'
// })
// sequelize.authenticate()
//     .then(()=>{
//         console.log('Conected')

//     })
//     .catch((error)=>{
//         console.log('Failed to conect ' + error)
//     })

// const alunos = sequelize.define('alunos', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     texto: {
//         type: Sequelize.TEXT
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     }
// })  
// alunos.create({
//     nome: 'Guilherme',
//     texto:"AIAIAIAIAIAIA",
//     idade : '19'
// })

// // alunos.sync({force:true})

