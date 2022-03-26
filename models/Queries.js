const mongoose = require('mongoose');

const QueriesSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  }
});

const QueriesModel = mongoose.model('queries', QueriesSchema, 'queries');
module.exports = QueriesModel;