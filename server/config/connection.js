const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mixmuse-db");

module.exports = mongoose.connection;
