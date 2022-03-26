const mongoose = require('mongoose');

const VacationSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  date: {
    type: String,
  },
  substitute: {
    type: String,
  }
});

const VacationModel = mongoose.model('vacation', VacationSchema, 'vacation');
module.exports = VacationModel;