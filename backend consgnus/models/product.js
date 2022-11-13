const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  enail: String,
});

module.exports = mongoose.model("userconsegnus", UserSchema);
