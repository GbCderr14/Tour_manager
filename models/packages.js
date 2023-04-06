const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  noOfPeople:{
    type: Number,
    required: true,
    min: 1,
    max: 10
    },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: 'Place'
  },
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hotel'
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant'
  }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
