const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const countrySchema = Schema({
    // Light description
    name: String,
    nativeCountryName: String,
    greeting: String,
    capital: String,
    language: String,
    government: String,
    leader: String,
    area: Number,
    population: Number,
    density: Number,
    timeZone: String,
    establishment: String,
    flagImage: String

}, {collection: "countries"});


Country = mongoose.model("Country", countrySchema);

module.exports = {
    Country,
}
