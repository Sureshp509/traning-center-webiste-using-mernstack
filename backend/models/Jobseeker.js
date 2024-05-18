// models/Jobseeker.js
import mongoose from 'mongoose';

const JobseekerSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_mobile: { type: String, required: true },
  user_education: { type: String, required: true },
  user_passout: { type: Number, required: true },
  user_resume: { type: String, required: true },
});

const Jobseeker = mongoose.model('Jobseeker', JobseekerSchema);

export default Jobseeker;
