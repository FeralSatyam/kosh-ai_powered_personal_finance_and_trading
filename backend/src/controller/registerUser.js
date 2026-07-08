import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        
        if (!username || !email || !password){
            console.log("data not received");
            return res.status(400).json({message: 'All fields required!'})
        }
        
        const userExists = await User.findOne({email});
        if (userExists){
            console.log("User already exists");
            return res.status(409).json({message: 'User already exists!'})
        }
        
        const newUser = new User({
            username,
            email,
            password,
        })
        await newUser.save()
        console.log("User created");
        res.json({message: 'User created'})
        
        
    }
    catch(error){
        res.status(400).json({message: 'Error creating user', error: error.message})
    }
}
