const { MongoClient } = require("mongodb");

const database = async (service) => {
  
    const uri = process.env.DB_CONFIG;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("connected");

        await service();
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
        console.log("closed");
    }
};

module.exports = { database };
