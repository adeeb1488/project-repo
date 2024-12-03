import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Database Connection Successful..."))
.catch(err=> console.log("Database Connection Failed...", err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));
