const mongoose = require('mongoose'), Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer: String
})

const Answer = mongoose.model("answer", AnswerSchema)

module.exports = {Answer};