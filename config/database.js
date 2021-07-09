const { MongoClient } = require("mongodb");

async function dbCall(service, ...rest) {
  const uri = "mongodb+srv://Pierre:Peyo5202@cluster0.ieszb.mongodb.net/test";
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await service(client, ...rest);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { dbCall };
