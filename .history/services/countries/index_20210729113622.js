//Read
const { Country } = require("../../models/Countries");
const { database } = require("../../config/database");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Country
    const country = new Country({
        name: req.body.name
    });

    // Save Country in the database
    country
        .save(country)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Country."
            });
        });
};

exports.findOne = async (req, res) => {
    await database("connect");
    const name = req.params.name;

    console.log("req.params.name:", name);

    Country.findAll(name)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "Not found Country with name " + name
                });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Country with name=" + name
            });
        });
};
