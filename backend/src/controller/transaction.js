import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const transaction = async(req, res) => {
    try{
        const { income, expense, total_balance } = req.body;

        total_balance = total_balance + income
        total_balance = total_balance - expense

        return res.status(200).json({message: 'Transaction complete'})

    }
    catch (error){
        return res.status(400).json({message: 'Error on transaction'})
    }
}
