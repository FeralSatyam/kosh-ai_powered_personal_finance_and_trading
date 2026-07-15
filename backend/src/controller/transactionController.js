import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
    try{
        const userId = req.user.id;
        console.log("User_id Transaction: ", userId);
        
        const { amount, description, category, date, notes, type } = req.body;
        console.log("TransactionController category", category);
        
        if(!userId) return res.status(404).json({message: 'User not found'});

        if(!amount || !type ){
            console.log("Amount, or type are required not received");
            res.status(400).json({message: "Amount, description, and type are required"});
        }

        const transaction = new Transaction({
            userId,
            amount,
            description,
            category: category || 'Data not recieved on category',
            date: date || new Date(),
            notes: notes || '',
            type
        });
        // console.log("Transaction category", transaction.category);
        
        await transaction.save();
        console.log("Transaction saved")
        res.status(200).json({message: 'Transaction saved'})
    }

    catch(e){
        console.error("Error saving transaciton", e);
    }
}

export const getTransaction = async(req, res) => {
    try{
        const userId = req.user._id;
        const transactions = await Transaction.find({userId}).sort({date: -1})
        // console.log("TransactionController ", transactions);
        res.json({transactions});
    }
    catch(e){
        console.error("Error finding transaction", e);
        
        res.status(500).json({message: 'Error finding transaction'})
    }
}