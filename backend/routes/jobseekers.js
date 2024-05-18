import express from 'express';
import multer from 'multer';
import Jobseeker from '../models/Jobseeker.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Create a new job seeker
router.post('/', upload.single('user_resume'), async (req, res) => {
  const { user_name, user_email, user_mobile, user_education, user_passout } = req.body;
  const user_resume = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const newJobseeker = new Jobseeker({
      user_name,
      user_email,
      user_mobile,
      user_education,
      user_passout,
      user_resume
    });

    await newJobseeker.save();
    res.status(201).json(newJobseeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all job seekers
router.get('/', async (req, res) => {
  try {
    const jobseekers = await Jobseeker.find();
    res.status(200).json(jobseekers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
