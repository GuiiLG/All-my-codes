// Calling sequelize that connects do the DATABASE
const login = require('./models/sequelize')

// Calling the library express
const express = require('express')
const app = express()

// Getting handlebars:
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))
app.set('view engine', 'handlebars')

Handlebars.registerHelper('json', function (content) {
    return JSON.stringify(content);
});

// Getting bodyParser:
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Creating routes

app.get('/', (req, res)=>{
    login.findAll().then((login)=>{
        res.render('home', {login : login})
        
    })
    
})
app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/database', (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    login.create({
        name: name,
        email: email
    }).then(()=>{
        res.redirect('/')
    }).catch((error)=>{
        console.log(error)
    })
})
app.get('/getEmail/:name/:email', ()=>{
    
})

app.listen('8081', (req, res)=>{
    console.log('running')
})