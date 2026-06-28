import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}

export const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        if (!email || !password){
            console.log("data not received");
            return res.status(400).json({message: 'All fields required!'})
        }

        const findUser = await User.findOne({email}).select('+password');
        if (findUser) {
            const correctPassword = await bcrypt.compare(password, findUser.password);
            
            if(correctPassword){
                const token = generateToken(findUser._id)
                res.json({message: 'Login Sucessfull',
                    token,
                    user: {
                        id: findUser._id,
                        username: findUser.username,
                        email: findUser.email
                    }
                })
            }
            else{
                return res.status(401).json({message: 'Incorrect password'})
            }
        }

        else{
            return res.status(401).json({message: 'User not found.'})
        }
    } catch (error){
        res.status(400).json({message: 'Error creating user', error: error.message})
    }
}