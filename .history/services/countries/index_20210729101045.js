//Read
const { Country } = require("../../models/Countries");


exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const country = new Country({
        name: req.body.name
    });

    // Save Tutorial in the database
    country
        .save(tutorial)
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

exports.findOne = (req, res) => {
  const name = req.params.name;

  Tutorial.findById(name)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with name " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with name=" + name });
    });
};