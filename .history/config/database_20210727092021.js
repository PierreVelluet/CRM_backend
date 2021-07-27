const { MongoClient } = require("mongodb");

const Country = require("../models/Countries")

async function dbCall(service, ...rest) {

  const uri = process.env.DB_CONFIG;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // const data = await service(client, ...rest);
    Country.findOne({"name": "Japan"}, function (err, country) {
      if (err) return handleError(err);
      console.log('toto')
      console.log(country)
    })

    // return data;

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { dbCall };
