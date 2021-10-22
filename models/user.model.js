const mongoose = require('mongoose');

const user = new mongoose.Schema({
  id: {
    type: String,
  },
  
  name: {
    type: String,
    required: false,
  },
  
  professionalTitle: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', user)   