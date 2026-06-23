import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const salt = 10
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
})

//Hashing user password

//Check if password is changed and if not hash the password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//Compare password with hashed password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.comparePassword(candidatePassword, this.password)
}


const User = mongoose.connect('User', userSchema)
export default User