var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    img: String,
  }, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);