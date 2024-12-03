import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv'
dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    console.log('Incoming request body:', req.body);

    try {
        const existingUser = await User.findOne({ email });
        console.log('Existing user check result:', existingUser);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Password hashed successfully');

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log('New user saved:', newUser);

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Error in registration:', err);
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        res.status(500).json({ message: 'Server error' });
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