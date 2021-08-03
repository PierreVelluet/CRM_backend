const { Question } = require("../../models/Questions");

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: "Data to update can not be empty!"
        });
    }

    let isUnique = true;
    await Question.findOne({ name: req.body.name }).then((data) => {
        if (data) {
            isUnique = false;
        }
    });

    if (!isUnique) {
        res.status(404).send({
            success: false,
            message: `Question '${req?.body?.name}' already exists!`
        });
        return;
    }

    // Create a Question
    const question = new Question({
        country: req.body.country,
        questions: req.body.questions,
        rightAnswer: req.body.rightAnswer,
        conceptImage: req.body.conceptImage,
        explanation: req.body.explanation,
        area: req.body.area,
        population: req.body.population,
        timeZone: req.body.timeZone,
        quiz: req.body.quiz,
        bgImage: req.body.bgImage
    });
    country: String,
    questions: Array,
    rightAnswer: Number,
    conceptImage: String,
    explanation: String,
    ressourceLink: String

    // Save Question in the database
    question
        .save(question)
        .then((data) => {
            res.send({ success: true, data });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                success: false,
                message:
                    err.message ||
                    "Some error occurred while creating the Question."
            });
        });
};