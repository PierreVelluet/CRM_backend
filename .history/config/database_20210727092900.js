const { MongoClient } = require("mongodb");

const Country = require("../models/Countries")

async function dbCall(service) {

  const uri = process.env.DB_CONFIG;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // const data = await service(client, ...rest);
    const data = await service();

    return data;

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { dbCall };
