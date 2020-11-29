const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true    
    }

}, {
    timestamp:true
} );

const User = mongoose.model('User', userSchema);

module.exports = User;

//  u mean ./install inubuntu...yes wait // wait sir 5 min i will install...