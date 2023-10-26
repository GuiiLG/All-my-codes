const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('../models/usersModels')
const Users = mongoose.model('users')


router.get('/', (req,res)=>{
    res.render('create/login')
})
router.post('/newUser', (req,res)=>{
    let name = req.body.name
    let email = req.body.email


    const newUser =  new Users({
        name : name,
        email: email
    })
    newUser.save().then(()=>{
        req.flash("success_msg", `Created with success ${name}!`)
        res.redirect('/')
    })
    .catch((error)=>{
        req.flash('error_msg','Something went wrong :(!')
        res.redirect('/')
    })

    

    

})
router.get('/showUsers', (req,res)=>{
    Users.find().then((users)=>{
        res.render('home/showUsers', {users:users})
    }).catch((error)=>{
        req.flash('error_msg', 'error to list')
    })

})

module.exports = router