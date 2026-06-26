import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        console.log('Hello', username, email, password);
        
        if (!username || !email || !password){
            return res.status(400).json({message: 'All fields required!'})
        }
        
        const userExists = await User.findOne({email});
        if (userExists){
            return res.status(409).json({message: 'User already exists!'})
        }

        

        const newUser = new User({
            username,
            email,
            password,
        })
        await newUser.save()

        res.json({message: 'User created'})
    }
    catch(error){
        res.status(400).json({message: 'Error creating user', error: error.message})
    }
}
