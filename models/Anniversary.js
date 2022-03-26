const mongoose = require('mongoose');

const AnniversarySchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  year: {
    type: Number,
  },
  date: {
    type: String,
  },
});

const AnniversaryModel = mongoose.model('anniversary', AnniversarySchema, 'anniversary');
module.exports = AnniversaryModel;