const mongoose = require('mongoose');

const MyQueriesSchema = mongoose.Schema({
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

const MyQueriesModel = mongoose.model('myQueries', MyQueriesSchema, 'myquerries');
module.exports = MyQueriesModel;