const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const countrySchema = Schema({
    
    name: String,
    "native country name": String,
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
    "gross domestic product per capita": Number,
    flagImage: String

}, {collection: "countries"});


Country = mongoose.model("Country", countrySchema);

module.exports = {
    Country,
}
