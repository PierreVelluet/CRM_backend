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

exports.findAllByCountryName = (req, res) => {
    const {country} = req?.params;
    Question.find({country})
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

exports.findAll = (req, res) => {
    Question.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message:
                    err.message ||
                    "Some error occurred while retrieving Countrys."
            });
        });
};

exports.findRandomQuestions = (req, res) => {

    const { country } = req?.params;

    

    Question.countDocuments({country}, (err, count) => {

        const skipRecords = getRandomArbitrary(1 - count-limitrecords);
        
        Question.find({country}).skip(skipRecords)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message:
                    err.message ||
                    "Some error occurred while retrieving Countrys."
            });
        });
    })
    {

    }
    Question.aggregate([ { $sample: { size: 3 } } ])
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message:
                    err.message ||
                    "Some error occurred while retrieving Countrys."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: "Data to update can not be empty!"
        });
    }

    const update = {}
    // map existing fields to update the question
    Object.entries(req?.body)?.map(el => update[el[0]] = el[1]);

    Question.findByIdAndUpdate(req?.params?.id, update, {
        returnOriginal: false
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    success: false,
                    message: `Cannot update Question with id '${id}'.`
                });
            } else
                res.send({
                    success: true,
                    message: "Question was updated successfully."
                });
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message: `Error updating Question with id ${id}.`
            });
        });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Question.findOneAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    success: false,
                    message: `Cannot delete Question with id: ${id}. Maybe Question was not found!`
                });
            } else {
                res.send({
                    success: true,
                    message: `Question with id: ${id} was deleted successfully!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message: `Could not delete Question with id: '${id}'`
            });
        });
};

exports.deleteAllByCountry = (req, res) => {

    const country = req.params.country;

    Question.deleteMany({ country })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    success: false,
                    message: `Cannot delete Questions with country: ${country}. Maybe Questions were not found!`
                });
            } else {
                res.send({
                    success: true,
                    message: `Questions with country: ${country} were deleted successfully!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message: `Could not delete Questions with country: '${country}'`
            });
        });
};

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
