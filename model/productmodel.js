const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  id: Number,
  price: Number,
  category: String,
  subCategory:String,
  rating: String,
  image: String,
  brand: String,
  para: String,
});
const productColletion = mongoose.model("productColletion_All", productSchema);

module.exports = productColletion;
