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
        name: req.body.name,
        capital: req.body.capital,
        language: req.body.language,
        government: req.body.government,
        leader: req.body.leader,
        area: req.body.area,
        population: req.body.population,
        timeZone: req.body.timeZone,
        quiz: req.body.quiz,
        bgImage: req.body.bgImage
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