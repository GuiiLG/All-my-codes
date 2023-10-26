// const express = require('express');
// const app = express();
// const path = express('path');
// const router = express.Router();

// router.get('/', function(req, res){
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

// app.use('/', router)

// app.listen(process.env.port || 3000)



// RUNNING SERVER IN NODE
// const http = require('http')

// const hostname ='127.0.0.1'
// const port = 3000

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader ('Content-Type', 'text/plain');
//     res.end('Olá da danki Code')
// })

// server.listen(port, hostname, ()=>{
//     console.log('servidor rodando')
// })
// ------------------------------------------------------------------------

// Creating web apliccation with http:
// const http = require('http');

// http.createServer((req, res)=>{
//     res.end('ola')
// }).listen(8081)
// console.log('ola mundo')

// Creating web apliccation with express
// const express = require('express')
// const app = express()

// app.get("/", (req, res)=>{ // standard route
//     res.sendFile('everything\frontendMentorChallengs\cards-challenge')

// })
// app.get('/login', (req, res)=>{
//     res.send('ola login')
// } )

// app.listen(8081, ()=>{
//     console.log('Rodando')
// }) // ALWAYS NEED TO BE THE LAST LINE 


const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const Sequelize = require("sequelize")
const sequelize = new Sequelize('loginSystem', 'root', 'M@tado10', {
    host:'localhost',
    dialect:'mysql'
})



app.engine('handlebars'), handlebars({defaultLayout : 'main'})
app.set('view engine', handlebars)

app.listen(8080)
