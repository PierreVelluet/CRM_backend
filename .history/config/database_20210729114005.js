const { MongoClient } = require("mongodb");

const database = async (param) => {
    const uri = process.env.DB_CONFIG;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("connect");

        await service();
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
        console.log("connect");
    }
};

module.exports = { database };
