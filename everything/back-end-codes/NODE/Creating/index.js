const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")

const Post = require('./models/Post')

// BodyParser:
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Template engine handlebars
app.engine('handlebars', handlebars.engine ({
    defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))
app.set('view engine', 'handlebars')



app.get('/', (req, res)=>{
    res.render('form')
})

app.post('/rota', (req, res) =>{
    let name = req.body.name
    let email = req.body.email
    Post.create({
        titulo: name,
        texto: email
    }).then(()=>{
        res.redirect('/home')
    })
    .catch((error)=>{
        res.send(error)
    })
})
app.get('/home', (req,res)=>{
    Post.findAll().then((posts)=>{
        res.render('home', {posts: posts})
        console.log(posts)
    })
        
})

app.listen(8080, ()=>{
    console.log('runninggg')
})