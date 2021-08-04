const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const questionSchema = Schema(
    {
        // Light description
        country: { type: String, required: true },
        questions: { type: Array, required: true, default: [] },
        rightAnswer: { type: String, required: true },
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
