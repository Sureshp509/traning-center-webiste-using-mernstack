import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST /api/users
router.post('/', (req, res) => {
  const { name, email, mobile, course } = req.body;

  const newUser = new User({
    name,
    email,
    mobile,
    course,
  });

  newUser.save()
    .then(() => res.json({ message: 'User added successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

export default router;
