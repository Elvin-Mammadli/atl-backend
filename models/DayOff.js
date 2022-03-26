const mongoose = require('mongoose');

const DayOffSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  type: {
    type: String,
  }
});

const DayOffModel = mongoose.model('dayOff', DayOffSchema, 'dayOff');
module.exports = DayOffModel;