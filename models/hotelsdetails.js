const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
