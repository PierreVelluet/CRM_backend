const { MongoClient } = require("mongodb");
const uri = process.env.DB_CONFIG;

const database = async (service) => {
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
