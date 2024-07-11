/***********/
/* Imports */
/***********/
// Main imports
const mongoose = require('mongoose');

/***********/
/* Models  */
/***********/
// QuestionSchema model
const QuestionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    answerer: String
});
const Question = mongoose.model('questions', QuestionSchema);

/********************/
/* Functions export */
/********************/
module.exports = { Question }