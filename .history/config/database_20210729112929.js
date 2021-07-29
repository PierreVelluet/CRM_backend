const { MongoClient } = require("mongodb");

const database = async (param) => {
    const uri = process.env.DB_CONFIG;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    if (param === "connect") {
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            console.log("connected to db");
            // Make the appropriate DB calls
            // const data = await service(...rest);

            // return data;
        } catch (e) {
            console.error(e);
        }
    } else if (param === "close")
    // {
    //   console.error(e);
    // } finally {
    //   await client.close();
    // }
};

module.exports = { database };
