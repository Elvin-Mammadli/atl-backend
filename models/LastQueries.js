const mongoose = require('mongoose');

const LastQueriesSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  }
});

const LastQueriesModel = mongoose.model('lastQueries', LastQueriesSchema, 'lastQueries');
module.exports = LastQueriesModel;