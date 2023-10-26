// Loading Modules
const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const user = require('./routes/user')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')


// Config
    // Session
        app.use(session({
            secret: 'naosei',
            resave: true,
            saveUninitialized: true
        }))
    // Flash
        app.use(flash())
    // Middleware
        app.use((req, res, next)=>{
            res.locals.success_msg = req.flash('success_msg') 
            res.locals.error_msg = req.flash('error_msg')
            next()
        })

    // Body-parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main', runtimeOptions:{
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }
        }))
        app.set('view engine', 'handlebars')
    // Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://127.0.0.1/my_database',{
            useNewUrlParser: true
        })
        .then(()=>{
            console.log('connected to database')
        })
        .catch(()=>{
            console.log('error in connect to database')
        })
    // Path
        app.use(express.static(path.join(__dirname,'public')))
        
        
// Routes
app.get('/', (req,res)=>{
    res.render('home/home')
})
app.use('/login', user)

// Other
app.listen('8081', ()=>{
    console.log('Server is running')
})