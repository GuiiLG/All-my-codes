const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const flash = require('connect-flash')
const mongoose = require('mongoose') 
const session = require('express-session')
const path = require('path')
const cards = require('./routes/cards')

// Config
    // Session
        app.use(session({
            secret: 'naosei',
            resave: true,
            saveUninitialized: true
        }))
    // Flash
        app.use(flash())
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main', runtimeOptions:{
                allowProtoMethodsByDefault: true,
                allowProtoPropertiesByDefault:true
            }

        }))
        app.set('view engine', 'handlebars')
    // Middleware
        app.use((req,res, next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // Mongoose
        mongoose.Promise = global
        mongoose.connect('mongodb://127.0.0.1/cardsCollection', {
            useNewUrlParser: true
        }).then(()=>{
            console.log('connected')
        }).catch((error)=>{
            console.log(error)
        })



    // BodyParser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
    // Public
        app.use(express.static(path.join(__dirname, 'public')))
// Routes
app.get('/', (req,res)=>{
    res.render('content/menu')
})

app.use('/cards', cards)








// Port
app.listen('8081', (req,res)=>{
    console.log('Running')
})