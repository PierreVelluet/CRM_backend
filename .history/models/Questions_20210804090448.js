const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const questionSchema = Schema(
    {
        country: { type: String, required: true },
        questions: { type: Array, required: true, default: [{questionNumber: Number ,question: String}] },
        rightAnswer: { type: Number, required: true },
        conceptImage: { type: String, required: true },
        explanation: { type: String, required: true },
        ressourceLink: { type: String, required: true }
    },
    { collection: "questions" }
);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
