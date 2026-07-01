import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getDashboardData = async(req, res) => {

    try{
        const user_id = req.user._id;

        if(!user_id) return res.status(404).json({message: 'User not found'});

        const transaction = await Transaction.findById(user_id).sort({date: -1});

    }
    catch (error){
        console.log('Error fetching dashboard data', error);
        
    }
}