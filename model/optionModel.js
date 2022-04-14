const mongoose = require('mongoose'), Schema = mongoose.Schema;

const OptionSchema = new Schema({
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String
})

const Option = mongoose.model("option", OptionSchema)

module.exports = {Option};