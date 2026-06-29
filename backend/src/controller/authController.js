import User from "../../models/User.js";
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

const verifyAsync = promisify(jwt.verify)
export const authenticateToken = async(req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token= authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({message: 'No Token found'});

  const payload = await verifyAsync(token, process.env.JWT_SECRET)
    if(!payload) return res.status(403).json({message: 'Invalid Token'});
    const userExist = await User.findById(payload.userId).select('-password')
    if(userExist){
      req.user= {id: userExist._id}
      return next()
    }
    else{
      return res.status(404).json({message: 'User does not exist.'})
    }
  }