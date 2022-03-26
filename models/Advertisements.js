const mongoose = require('mongoose');

const AdvertisementSchema = mongoose.Schema({
   name: {
     type: String,
   },
   describe: {
     type: String,
   },
   creater: {
     type: String,
   },
   date: {
     type: String,
   },
   notification: {
     type: String
   }
});

const AdvertisementModel = mongoose.model('advertisements', AdvertisementSchema);
module.exports = AdvertisementModel;