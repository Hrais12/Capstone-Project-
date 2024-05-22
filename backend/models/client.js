const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  tag: String,
});
// Declares client model Schema and its properties

const Client = mongoose.model("Client", clientSchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Client;
