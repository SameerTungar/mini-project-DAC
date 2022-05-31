const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  uname:String,
  password:String
});

//connect schema with collection name
const loginModel = mongoose.model('Login',loginSchema);

module.exports = loginModel;