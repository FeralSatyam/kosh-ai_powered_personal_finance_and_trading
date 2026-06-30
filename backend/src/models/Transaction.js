import mongoose from "mongoose";
import User from "./User.js";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        index: true
    }
})

const Transaction = mongoose.model('transaction', transactionSchema)
export default Transaction