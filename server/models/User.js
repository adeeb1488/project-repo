import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, sparse: true },
    FirstName: {type: String, required: false, unique: false},
    LastName: {type: String, required: false, unique: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique:false}
});

const userDetails = new mongoose.model("User", userSchema);
export default userDetails;