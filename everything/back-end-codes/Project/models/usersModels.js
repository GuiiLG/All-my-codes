const mongoose = require('mongoose')
const UserSchema = mongoose.model('users',{
            name:{
                type: String,
                require: true
            },
            email: {
                type:String,
                require:true
            }
            
})
 