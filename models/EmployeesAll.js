const mongoose = require('mongoose');

const EmployeesAllSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
   fullName: {
     type: String,
   },
   position: {
     type: String,
   },
   department: {
     type: String,
   },
   email: {
     type: String,
   },
   phone: {
    type: String,
  },
});

const EmployeesAllModel = mongoose.model('employeesAll', EmployeesAllSchema, 'employeesAll');
module.exports = EmployeesAllModel;