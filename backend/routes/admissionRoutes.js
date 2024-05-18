// src/routes/admissions.js
import express from 'express';
import Admission from '../models/admissionModel.js';

const router = express.Router();

// @route   POST api/admissions
// @desc    Add a new admission
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, mobile, course } = req.body;

  try {
    const newAdmission = new Admission({
      name,
      email,
      mobile,
      course,
    });

    const admission = await newAdmission.save();
    res.json(admission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/admissions
// @desc    Get all admissions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
