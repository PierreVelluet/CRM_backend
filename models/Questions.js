const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const random = require("mongoose-simple-random");

const answersValidation = (answers) => {
    return answers.length == 3;
};

const answerItemSchema = Schema({
    answer: { type: String, required: true },
    answerNumber: { type: Number, required: true },
    correct: { type: Boolean, required: true }
});

const questionSchema = Schema(
    {
        country: {
            type: String,
            required: [
                true,
                "You must have a country associated to your question"
            ]
        },
        question: {
            type: String,
            required: [true, "You must write a question"]
        },
        answers: {
            type: [
                {
                    type: answerItemSchema,
                    required: true
                }
            ],
            validate: [
                answersValidation,
                "You must have exactly 3 answers in your quizz"
            ]
        },
        type: {
            type: String,
            required: [true, "You must have a type associated to your question"]
        },
        correctAnswerImage: {
            type: String,
            required: [
                true,
                "You must have an image associated to the correct answer"
            ]
        },
        explanation: {
            type: String,
            required: [
                true,
                "You must have an explanation associated to the correct answer"
            ]
        },
        ressourceLink: {
            type: String,
            required: [
                true,
                "You must have a ressource link associated to the correct answer (simple wikipedia link prefered)"
            ]
        },
        category: {
            type: String,
            required: [
                true,
                "You must have a category associated to your question"
            ]
        }
    },
    { collection: "questions" }
);

questionSchema.plugin(random);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
