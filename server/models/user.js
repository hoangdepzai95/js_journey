// get instance of mongoose and mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up mongoose model and pass it using module.exports

module.exports = mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean,
}));
