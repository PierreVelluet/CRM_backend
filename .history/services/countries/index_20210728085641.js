//Read
const {Country} = require("../../models/Countries");

async function getCountry(name) {
    const result = await Country.findOne({ name: name });
    if (result) {
        return result;
    } else {
        console.log(`No country found with the name of '${name}'`);
    }
}

async function createCountry(name) {
    
    const country = new Country({ name: name });
    country.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });

}

module.exports = {
    getCountry,
    createCountry
};
