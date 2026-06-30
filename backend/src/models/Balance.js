import mongoose from "mongoose";
import User from "./User.js";

const balanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    ,balance: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    saving: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    }
})

const Balance = mongoose.model('Balance', balanceSchema);
export default Balance;