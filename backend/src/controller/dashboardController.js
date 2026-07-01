import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getDashboardData = async(req, res) => {

    try{
        const user_id = req.user._id;

        if(!user_id) return res.status(404).json({message: 'User not found'});

        const transaction = await Transaction.findById(user_id).sort({date: -1});
        
        const incomePipeline = {
            $match: {userId, type: 'income'}
        }

        const incomeResult = await Transaction.aggregate({
            $match: {userId, type: 'income'},
            $group: {_id: null, total: {$sum: '$amount'}}
        });

        const expenseResult = await Transaction.aggregate({
            $match: {userId, type: 'expense'},
            $group: {_id: null, total: {$sum: '$amount'}}
        })


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
        console.log('Error fetching dashboard data', error);
        
    }
}