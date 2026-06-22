// const express = require('express')
// const cors = require('cors')
import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import connectDB from './src/config/db.js';

const app = express()
const PORT = 5000;

configDotenv()

connectDB()
app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the Node.js backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});