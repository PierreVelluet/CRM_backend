const { Country } = require("../../models/Countries");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // name: String,
    // capital: String,
    // language: String,
    // government: String,
    // leader: String,
    // area: Number,
    // population: Number,
    // timeZone: String,
    // // other data
    // quiz: [{ type: Schema.Types.ObjectId, ref: "Quizz" }],
    // bgImage: String

    // Create a Tutorial
    const tutorial = new Tutorial({
      name: req.body.name ?? "",
      capital: req.body.capital ?? "",
      language: req.body.language ? req.body.published : false
    });
  
    // Save Tutorial in the database
    tutorial
      .save(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
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
