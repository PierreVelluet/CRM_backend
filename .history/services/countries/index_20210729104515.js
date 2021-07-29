//Read
const { Country } = require("../../models/Countries");

import { dbConnection } from "../../config/database";


exports.create = (req, res) => {
  dbConnection(
    () => {

    }

  )
    
};

exports.findOne = (req, res) => {
  const name = req.params.name;

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