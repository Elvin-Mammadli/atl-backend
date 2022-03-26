const mongoose = require('mongoose');

const VacationBalanceSchema = mongoose.Schema({
  date: {
    type: String,
  },
  basic: {
    type: String,
  },
  addition: {
    type: String,
  },
  used: {
    type: String,
  }
});

const VacationBalanceModel = mongoose.model('vacationBalance', VacationBalanceSchema, 'vacationbalance');
module.exports = VacationBalanceModel;