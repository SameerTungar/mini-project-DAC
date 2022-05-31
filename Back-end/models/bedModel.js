//https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bedSchema = new Schema({
   bedNo:Number,
   fName:String,
   mName:String,
   bMark:String,
   bDate:String,
   bTime:String,
   bGroup:String,
   age:Number,
   weight:Number
});

//connect schema with collection name
const bedModel = mongoose.model('Bed',bedSchema);

module.exports = bedModel;