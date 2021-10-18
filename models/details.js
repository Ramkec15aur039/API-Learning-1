const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
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

module.exports = mongoose.model('employeeDetails', detailsSchema)   