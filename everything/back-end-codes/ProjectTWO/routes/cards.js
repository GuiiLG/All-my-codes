
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/cardsModel')
const Cards = mongoose.model('cards')
const bodyParser = require('body-parser')



router.get('/', (req,res)=>{
    Cards.find().then((cards)=>{
        res.render('content/showCards', {cards:cards})
    })
    
    
})
router.get('/create', (req, res)=>{
    res.render('content/createCard')
    
})
router.post('/dataCards', (req, res)=>{
    req.body.title
    req.body.text
    
    const newCard = new Cards({
        title: req.body.title,
        text: req.body.text
    })
    newCard.save().then(()=>{
        req.flash('success_msg', 'Card Created with success')
        res.redirect('/cards')
    })
    .catch((err)=>{
        req.flash('error_msg', 'Card failed to create')
        res.redirect('/cards')
    })
    
})
router.get('/edit/:id', (req,res)=>{
    Cards.findOne({_id:req.params.id}).then((card)=>{
        res.render('content/edit',{ card : card})
    }).catch(()=>{
        req.flash('error_msg', 'Cards dont exist')
        res.redirect('/cards')
    })
    
})
router.post('/edit/dataCardsEdit', (req,res)=>{
    Cards.findOne({_id: req.body.id}).then((card)=>{
        card.title = req.body.title
        card.text = req.body.text
        card.save().then(()=>{
            req.flash('success_msg', 'card edited with success')
            res.redirect('/cards')
        }).catch(()=>{
            req.flash('error_msg', 'Error to edit')
        })


    }).catch(()=>{
        console.log('error')
    })
})

 
module.exports = router