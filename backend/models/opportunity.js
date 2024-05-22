const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
  name: String,
  address: String,
  status: String,
  tag: String,
  price: Number,
  closingDate: String,
  expiringDate: String,
});
// Declares client model Schema and its properties

const Opportunity = mongoose.model("Opportunity", opportunitySchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Opportunity;
