const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const countrySchema = Schema({
    // Light description
    name: String,
    capital: String,
    language: String,
    government: String,
    leader: String,
    area: Number,
    population: Number,
    timeZone: String,
    // other data
    quizzes: [{ type: Schema.Types.ObjectId, ref: "Quizz" }],
    bgImage: String



    // image: String,
    // quizzes: [{ type: Schema.Types.ObjectId, ref: "Quizz" }]
}, {collection: "countrys"});

const quizzSchema = Schema({
    _id: Schema.Types.ObjectId,
    questions: Schema.Types.Array,
    country_name: String
});

Country = mongoose.model("Country", countrySchema);
Quizz = mongoose.model("Quizz", quizzSchema);

module.exports = {
    Country,
    Quizz
}
