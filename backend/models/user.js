const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Declares a new model Schema and its properties

const User = mongoose.model("User", userSchema);
// Access to monggose variables to connect the Schema and our CRUD routes
// ie: Note.find()

module.exports = User;
