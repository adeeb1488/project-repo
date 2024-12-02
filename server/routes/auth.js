import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv'
dotenv.config();

const router = express.Router();

router.post('/register', async(req,res) =>{
    const {username, email, password, firstName, lastName} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message:'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({firstName, lastName, username, email, password:hashedPassword});

        await newUser.save();
        res.status(201).json({message:"User registered successfully!"});

    }
    catch(err){
        res.status(500).json({message:'Server error'});
    }
});

router.post('/login', async(req, res)=> {
    const{email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message:"User not found"});

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(401).json({message:"Invalid credentials"});

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.json({token});
    }
    catch(err)
    {
        res.status(500).json({message: 'Server error'});
    }
});

export default router;