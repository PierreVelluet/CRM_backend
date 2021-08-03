const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const questionSchema = Schema(
    {
        // Light description
        country: {type: String},
        questions: Array,
        rightAnswer: Number,
        conceptImage: String,
        explanation: String,
        ressourceLink: String
    },
    { collection: "questions" }
);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
}
