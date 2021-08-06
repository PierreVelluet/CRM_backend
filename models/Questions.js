const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

const validator = (questions) => {
    return questions.length == 3;
};

const QuestionItemSchema = Schema({
    question: { type: String, required: true },
    questionNumber: { type: Number, required: true }
});

const questionSchema = Schema(
    {
        country: { type: String, required: true },
        questions: {
            type: [
                {
                    type: QuestionItemSchema,
                    required: true

                }
            ],
            validate: [
                validator,
                "You must have exactly 3 questions in your quizz"
            ]
        },

        rightAnswer: { type: Number, required: true },
        conceptImage: { type: String, required: true },
        explanation: { type: String, required: true },
        ressourceLink: { type: String, required: true }
    },
    { collection: "questions" }
);

questionSchema.plugin(random);

Question = mongoose.model("Question", questionSchema);

module.exports = {
    Question
};
