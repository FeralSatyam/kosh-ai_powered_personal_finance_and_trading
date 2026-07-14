import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getDashboardData = async(req, res) => {
    try{
        
        const user_id = req.user._id;
        console.log("User Id: ", user_id);
        
        if(!user_id) return res.status(404).json({message: 'User not found'});
        
        const transaction = await Transaction.find({user_id}).sort({date: -1});
        
        const incomePipeline = {
            
            $match: {user_id, type: 'income'}
        }

        const incomeResult = await Transaction.aggregate([
            
            {$match: {user_id, type: 'income'}},
            {$group: {_id: null, total: {$sum: '$amount'}}}
        ]);

        const expenseResult = await Transaction.aggregate([
            {$match: {user_id, type: 'expense'}},
            {$group: {_id: null, total: {$sum: '$amount'}}}
        ]);
        console.log("Dashboard data collected")

        const income = incomeResult[0]?.total || 0;
        const expense = expenseResult[0]?.total || 0;
        const balance = income - expense;

        
        res.json({
            balance,
            income,
            expense,
            transaction
        });

    }
    catch (error){
        res.status(500).json({message: 'Error fetching dashboard data', error: error.message})
        console.log('Error fetching dashboard data', error);
        
    }
}