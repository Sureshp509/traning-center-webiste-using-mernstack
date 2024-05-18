// backend/server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import admissionsRoutes from './routes/admissionRoutes.js';
import employeersRoutes from './routes/employeers.js';
import jobseekerRoutes from './routes/jobseekers.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Static files route for uploads
app.use('/uploads', express.static(uploadsDir));
// Routes
app.use('/api/admissions', admissionsRoutes);
app.use('/api/employeers', employeersRoutes);
app.use('/api/jobseekers', jobseekerRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});