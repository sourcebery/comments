var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
});

module.exports = mongoose.model('User', schema);