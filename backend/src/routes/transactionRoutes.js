import express, { Router } from 'express'
import { createTransaction, getTransaction } from '../controller/transactionController';
import { authenticateToken } from '../controller/authController';

const router = express.Router();

Router.post('/', authenticateToken, createTransaction);
Router.get('/', authenticateToken, getTransaction);

export default router;

