//Read
const Country = require("../../models/Countries");

async function getCountry(name) {
    const result = await Country.findOne({ name: name });
    if (result) {
        return result;
    } else {
        console.log(`No country found with the name of '${name}'`);
    }
}

module.exports = {
    getCountry,
    createCountry
};
