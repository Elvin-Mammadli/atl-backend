const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   fullName: {
     type: String,
     required: true
   },
   username: {
     type: String,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   position: {
     type: Array,
     required: true
   }
});

const UserModel = mongoose.model('users', UserSchema, 'users');
module.exports = UserModel;