const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.comments = require("./comments.js")(mongoose);
db.users = require("./users.js")(mongoose);

module.exports = db;
