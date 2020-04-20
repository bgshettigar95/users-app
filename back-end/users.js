const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    age: { type: Number },
    phone: { type: Number }

});


module.exports = { User };