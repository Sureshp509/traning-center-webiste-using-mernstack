// src/models/Admission.js
import mongoose from 'mongoose';

const AdmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

const Admission = mongoose.model('Admission', AdmissionSchema);

export default Admission;
