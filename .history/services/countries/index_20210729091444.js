//Read
const {Country} = require("../../models/Countries");

// async function getCountry(name) {
//     const result = await Country.findOne({ name: name });
//     if (result) {
//         return result;
//     } else {
//         console.log(`No country found with the name of '${name}'`);
//     }
// }

// async function createCountry(name) {

//     Country.create({ name: name }, function (err, country) {
//         console.log("ok")
//         if (err) console.log(err);
//         // saved!
//         console.log(country)
//       });
    
//     // const country = new Country({ name: name });
//     // console.log(country)
//     // country.save(function (err) {
//     //     if (err) return handleError(err);
//     //     // saved!
//     // });

// }

// module.exports = {
//     getCountry,
//     createCountry
// };

exports.create = (req, res) => {
    // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
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
}