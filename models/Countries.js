const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const countrySchema = Schema({
    // Light description
    name: String,
    capital: String,
    language: String,
    government: String,
    leader: {type: String, default: "Manu"},
    area: Number,
    population: Number,
    timeZone: String,
    flagImage: String

}, {collection: "countries"});


Country = mongoose.model("Country", countrySchema);

module.exports = {
    Country,
}
