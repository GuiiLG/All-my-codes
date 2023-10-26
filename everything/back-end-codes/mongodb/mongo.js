const mongoose = require('mongoose')



// Mongoose Configured
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/my_database', {
    useNewUrlParser: true
})
    .then(()=>{
        console.log('conected')
    })
    .catch((error)=>{
        console.log('error')
    })

// // Defining Model
// const userSchema = mongoose.Schema({
//     name:{
//         type: String,
//         require: true
//     },
//     age: {
//         type: Number
//     },
//     email: {
//         type:String,
//         require:true
//     }
    

// })
// // Collection
//     mongoose.model('Users', userSchema)

// // Creating new User
// const newUser = mongoose.model('Users')
// new userSchema({
//     name:'Guilherme',
//     age:19,
//     email:'guiluigiribeiro@gmail.com'

// }).save().then(()=>{
//     console.log('created')
// }).catch((error)=>{
//     console.log('error')
// })

const UserSchema = mongoose.model('Users',{
            name:{
                type: String,
                require: true
            },
            age: {
                type: Number
            },
            email: {
                type:String,
                require:true
            }
            
})
const newUser = new UserSchema({
    name:'Alexandre',
    age:30,
    email:'gmail@gmail.com'
})
newUser.save().then(()=>{
    console.log('created')
}).catch((error)=>{
    console.log('user error:'+ error)
})