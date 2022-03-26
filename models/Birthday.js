const mongoose = require('mongoose');

const BirthdaySchema = mongoose.Schema({
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

const BirthdayModel = mongoose.model('birthday', BirthdaySchema, 'birthday');
module.exports = BirthdayModel;