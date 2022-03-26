const mongoose = require('mongoose');

const UserRolesSchema = mongoose.Schema({
  isStatic: {
    type: String
  },
  name: {
    type: String,
  },
  power: {
    type: String,
  },
  authority: {
    type: Array,
    required: true
  },
  description: {
    type: String,
  },
});

const UserRolesModel = mongoose.model('userroles', UserRolesSchema, 'userroles');
module.exports = UserRolesModel;