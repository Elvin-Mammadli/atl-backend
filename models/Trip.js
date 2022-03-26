const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  date: {
    type: String,
  }
});

const TripModel = mongoose.model('trip', TripSchema, 'trip');
module.exports = TripModel;