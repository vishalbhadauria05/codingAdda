const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 2,
        maxLength : 20
    },
    lastName : {
        type : String,
        required : true,
        minLength : 2 ,
        maxLength : 20
    },
    emailId : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        uppercase : true,
        immutable : true
    },
    age : {
        type : Number,
        min : 6,
        max : 80
    },
    role : {
        type : String,
        enum : ['admin', 'user'],
        default : 'user'
    },
    problemSolved : {
        type : [String]
    }
}, {timestamps : true})

const User = mongoose.model('user', userSchema)
module.exports = User