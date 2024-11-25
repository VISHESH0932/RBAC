const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user',UserSchema)
module.exports = User;