const { MongoClient } = require("mongodb");

async function dbConnection(service, ...rest) {

  const uri = process.env.DB_CONFIG;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('database.js')
    // Make the appropriate DB calls
    const data = await service(...rest);

    return data;

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { dbConnection };
