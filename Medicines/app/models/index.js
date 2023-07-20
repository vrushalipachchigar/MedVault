const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.url;

db.medicines = require("./medicine.model.js")(mongoose);
db.categories = require("./category.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);

module.exports = db;
