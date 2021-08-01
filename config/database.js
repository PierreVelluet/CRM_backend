const uri = process.env.DB_CONFIG;
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

function listen(app) {
    app.listen(port);
    console.log("FunHistory's backend started on port " + port);
}

function connect(app) {
    mongoose.connection
        .on("error", console.log)
        .on("disconnected", connect)
        .once("open", () => listen(app));
    return mongoose.connect(uri, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
}

module.exports = {
    connect,
    listen
};
