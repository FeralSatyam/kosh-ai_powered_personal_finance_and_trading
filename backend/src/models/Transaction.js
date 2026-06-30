import mongoose from "mongoose";
import User from "./User.js";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    total_balance: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    total_income: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    total_expense: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
    }
})

const Transaction = mongoose.model('transaction', transactionSchema)
export default Transaction