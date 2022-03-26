const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  fullName: {
    type: String,
  },
  position: {
    type: String,
  },
  status: {
    type: String,
  }
});

const EmployeesModel = mongoose.model('employees', EmployeesSchema, 'employees');
module.exports = EmployeesModel;