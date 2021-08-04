const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const isQuestionsLengthEnough = (value) => {
    return value.length === 3;
} 

const QuestionItemSchema = Schema({
    question: { type: String, required: true },
    questionNumber: { type: Number, required: true }, 
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
    { collection: "questions", validate: [isQuestionsLengthEnough, "You must have exactly 3 questions in your quizz"] }
);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
