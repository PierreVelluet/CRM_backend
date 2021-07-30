const { Country } = require("../../models/Countries");

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(404).send({ message: "Content can not be empty!" });
        return;
    }
    let isUnique = true;
    Country.findOne({ name: req.body.name }).then((data) => {
        if (data) {
            isUnique = true;
            res.status(200).send({
                message: `Country '${req?.body?.name}' already exists!`
            });
            return;
        }
    });

    // Create a Country
    const country = new Country({
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

    // Save Country in the database
    country
        .save(country)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Country."
            });
        });
};

exports.findByName = (req, res) => {
    const name = req.params.name;

    Country.findOne({ name })
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "Not found Country with name " + name
                });
            else res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                message: "Error retrieving Country with name=" + name
            });
        });
};
