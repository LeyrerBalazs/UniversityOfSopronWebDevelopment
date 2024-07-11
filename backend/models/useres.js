/***********/
/* Imports */
/***********/
// Main imports
const mongoose = require('mongoose');

/***********/
/* Models  */
/***********/
// userSchema model
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    status: String,
    about: String,
    img: String,
    password: String
});
const User = mongoose.model('users', userSchema);

/********************/
/* Functions export */
/********************/
module.exports = { User }