import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js';
import User from './src/models/User.js';
import { registerUser } from './src/controller/registerUser.js';
import { loginUser } from './src/controller/loginUser.js';
import { dashboardContoller } from './src/controller/dashboardController.js'

const app = express()
const PORT = 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);
app.get('/api/users/dashboard', dashboardContoller);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});