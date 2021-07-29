const { MongoClient } = require("mongodb");

const database = async (param) => {
    const uri = process.env.DB_CONFIG;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
      await client.connect();
      console.log("'")

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
