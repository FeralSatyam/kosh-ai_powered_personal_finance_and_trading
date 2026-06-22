// const mongoose = require('mongoose')
import mongoose from 'mongoose'

// require('dotenv').config()
import { configDotenv } from 'dotenv';
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected");
    }
    catch (error){
        console.error("Connection failed", error)
    }
}

export default connectDB;