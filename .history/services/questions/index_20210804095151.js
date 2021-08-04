const { Question } = require("../../models/Questions");

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: "Data to update can not be empty!"
        });
    }

    // Create a Question
    const question = new Question({
        country: req.body.country,
        questions: req.body.questions,
        rightAnswer: req.body.rightAnswer,
        conceptImage: req.body.conceptImage,
        explanation: req.body.explanation,
        ressourceLink: req.body.ressourceLink,
    });

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

exports.findAllByCountry = (req, res) => {
    Question.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Questions."
            });
        });
};