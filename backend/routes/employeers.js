// src/routes/employeers.js
import express from 'express';
import Employeer from '../models/Employeer.js';

const router = express.Router();

// @route   POST api/employeers
// @desc    Add a new employeer
// @access  Public
router.post('/', async (req, res) => {
  const { company_name, hr_name, employeer_email, employeer_mobile, requirement, jd } = req.body;

  try {
    const newEmployeer = new Employeer({
      company_name,
      hr_name,
      employeer_email,
      employeer_mobile,
      requirement,
      jd,
    });

    const employeer = await newEmployeer.save();
    res.json(employeer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/employeers
// @desc    Get all employeers
// @access  Public
router.get('/', async (req, res) => {
  try {
    const employeers = await Employeer.find();
    res.json(employeers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
