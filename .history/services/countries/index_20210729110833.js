//Read
const { Country } = require("../../models/Countries");

// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.name) {
//         res.status(400).send({ message: "Content can not be empty!" });
//         return;
//     }

//     // Create a Country
//     const country = new Country({
//         name: req.body.name
//     });

//     // Save Country in the database
//     country
//         .save(country)
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message ||
//                     "Some error occurred while creating the Country."
//             });
//         });
// };

const findOne = (reqRes) => {
  const { req, res } = reqRes;
  const name = req.params.name;

  console.log(name)

  Country.findById(name)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Country with name " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Country with name=" + name });
    });
};

module.exports = {
  findOne
}