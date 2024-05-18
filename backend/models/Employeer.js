// src/models/Employeer.js
import mongoose from 'mongoose';

const EmployeerSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  hr_name: {
    type: String,
    required: true,
  },
  employeer_email: {
    type: String,
    required: true,
  },
  employeer_mobile: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
  },
  jd: {
    type: String,
  },
});

const Employeer = mongoose.model('Employeer', EmployeerSchema);

export default Employeer;
