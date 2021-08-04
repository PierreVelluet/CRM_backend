const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const isQuestionsLengthEnough = (value) => {
    return value.length === 3;
} 

const QuestionItemSchema = Schema({
    question: { type: String, required: true }
});

const questionSchema = Schema(
    {
        country: { type: String, required: true },
        questions: [{ type: QuestionItemSchema, required: true }],
        rightAnswer: { type: Number, required: true },
        conceptImage: { type: String, required: true },
        explanation: { type: String, required: true },
        ressourceLink: { type: String, required: true },
       
    },
    { collection: "questions", validate: [isQuestionsLengthEnough, "{PATH} exceeds the limit of 10"] }
);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
