const express = require('express')
const mongoose = require('mongoose')

const Cards = mongoose.model('cards',{
    title:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    releaseDate:{
        type:Date,
        default: Date.now()
    }
})
