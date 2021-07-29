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

exports.crete