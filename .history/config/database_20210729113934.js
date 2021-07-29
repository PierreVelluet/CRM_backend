const { MongoClient } = require("mongodb");

const database = async (param) => {
    const uri = process.env.DB_CONFIG;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();
      console.log("db connected")

      await service();
    } catch(err) {
      console.log(err)
    }
      await client.close();
    }
    // {
    //   console.error(e);
    // } finally {
    //   await client.close();
    // }
};

module.exports = { database };
