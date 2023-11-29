const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    password :{
        type: String,
        required: true,
    },

});



const User = mongoose.model('User', userSchema);

module.exports = User;
