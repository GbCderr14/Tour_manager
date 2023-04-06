const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
