import mongoose from 'mongoose';
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userSignup = async (req, res) => {
    const { name, email, password } = req.body;

    // Check if any required field is missing
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
        // Check if user with the same email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

       
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with success message and user data
       

        return res.status(201).json({ message: "Account created successfully", user: savedUser});
    } catch (error) {
        console.error("Error in userSignup:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const userLogin=async(req,res)=>{
    const {email,password}=req.body

     // Check if any required field is missing
     if (!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ message: "Login successful", user ,token});
    }catch(error){
        console.error("Error in userLogin:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export const deleteUserAccount=async(req,res)=>{
    const id = req.params.id;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const deletedUser = await User.findByIdAndDelete(id);
       
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully", deletedUser });
    }catch(error){
        console.error("Error in deletedUserAccount:", error);
        return res.status(500).json({ message: "Server error" });
    }
}


export const getAllUsers= async(req,res)=>{ 
    try{
            const user = await User.find({})
            if(user){
                return res.status(200).json({  user });
            }else{
                return res.status(404).json({ message: "User not found" });
            }

    }catch(error){
        console.error("Error in getAllUsers:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export const changeUserPassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    if (!email || !oldPassword || !newPassword) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Incorrect old password" });
        } else {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const updatePassword = await User.findOneAndUpdate(
                { email }, 
                { password: hashedPassword }
            );
            if (updatePassword) {
                return res.status(200).json({ message: "Password changed successfully", user });
            }
        }
    } catch (error) {
        console.error("Error in changeUserPassword:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

