import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import connectDB from './src/config/db.js';
import User from './src/models/User.js';
import { registerUser } from './src/controller/registerUser.js';
import { loginUser } from './src/controller/loginUser.js';
import { transaction } from './src/controller/transaction.js';

const app = express()
const PORT = 5000;

configDotenv()

connectDB()
app.use(cors());
app.use(express.json());

app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});