const { Country } = require("../../models/Countries");

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            success: false,
            message: "Data to update can not be empty!"
        });
    }

    let isUnique = true;
    await Country.findOne({ name: req.body.name }).then((data) => {
        if (data) {
            isUnique = false;
        }
    });

    if (!isUnique) {
        res.status(404).send({
            success: false,
            message: `Country '${req?.body?.name}' already exists!`
        });
        return;
    }

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
        flagImage: req.body.flagImage,
        establishment: req.body.establishment,
        density: req.body.density,
        nativeCountryName: req.body.nativeCountryName,
        greeting: req.body.greeting
    });

    // Save Country in the database
    country
        .save(country)
        .then((data) => {
            res.send({ success: true, data });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                success: false,
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
                    success: false,
                    message: "Not found Country with name " + name
                });
            else res.send({success: true, data});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                success: true,
                message: "Error retrieving Country with name=" + name
            });
        });
};

exports.findAll = (req, res) => {
    Country.find()
        .then((data) => {
            res.send({success: true, data});
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

    const filter = { name: req?.params?.name };
    const name = filter?.name;
    const update = {}

    // map existing fields to update the country
    Object.entries(req?.body)?.map(el => update[el[0]] = el[1]);

    Country.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    success: false,
                    message: `Cannot update Country with name '${name}'.`
                });
            } else
                res.send({
                    success: true,
                    message: "Country was updated successfully."
                });
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message: `Error updating Country with name ${name}.`
            });
        });
};

exports.delete = (req, res) => {
    const name = req.params.name;

    Country.findOneAndDelete(name)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    success: false,
                    message: `Cannot delete Country with name=${name}. Maybe Country was not found!`
                });
            } else {
                res.send({
                    success: true,
                    message: `Country ${name} was deleted successfully!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                success: false,
                message: `Could not delete Country with name: '${name}'`
            });
        });
};
