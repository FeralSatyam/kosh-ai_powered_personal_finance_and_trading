import { configDotenv } from 'dotenv';
import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js';
import User from './src/models/User.js';
import { registerUser } from './src/controller/registerUser.js';
import { loginUser } from './src/controller/loginUser.js';
import { getDashboardData } from './src/controller/dashboardController.js'
import { authenticateToken } from './src/controller/authController.js'
import { getTransaction, createTransaction } from './src/controller/transactionController.js';
// import transactionRoutes from './src/routes/transactionRoutes.js'

const app = express()
const PORT = 5000;
configDotenv()
connectDB();
app.use(cors());
app.use(express.json());

// app.use('/api/transactions', transactionRoutes);

app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);
console.log("Get dashboard data route called")
app.get('/api/users/dashboard', authenticateToken, getDashboardData);
app.post('/api/users/transaction', authenticateToken, createTransaction);
app.get('/api/users/transaction', authenticateToken, getTransaction);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});