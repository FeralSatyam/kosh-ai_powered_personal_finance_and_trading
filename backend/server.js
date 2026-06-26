// const express = require('express')
// const cors = require('cors')
import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import connectDB from './src/config/db.js';
import User from './src/models/User.js';
import { registerUser } from './src/controller/registerUser.js';
const app = express()
const PORT = 5000;

configDotenv()

connectDB()
app.use(cors());
app.use(express.json());

app.post('/api/users/register', registerUser);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});