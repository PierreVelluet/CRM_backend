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
    { collection: "questions", validate: [isQuestionsLengthEnough, "you must have 3 questions in your qui"] }
);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
