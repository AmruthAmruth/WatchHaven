import Admin from "../models/Admin.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const adminSigup = async (req, res) => {
    const {name, email, password } = req.body;

    // Check if any required field is missing
    if (!name ||!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
        // Check if user with the same email already exists
        let existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Email already exists" });
        }

       
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        // Create a new user instance
        const newAdmin = new Admin({
            name,
            email,
            password:hashedPassword
        });

        // Save the user to the database
        const savedAdmin = await newAdmin.save();

        // Respond with success message and user data
       

        return res.status(201).json({ message: "Account created successfully", admin: savedAdmin});
    } catch (error) {
        console.error("Error in userSignup:", error);
        return res.status(500).json({ message: "Server error" });
    }
};



export const adminLogin=async(req,res)=>{
    const {email,password}=req.body

     // Check if any required field is missing
     if (!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try{
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ message: "Login successful", admin ,token});
    }catch(error){
        console.error("Error in userLogin:", error);
        return res.status(500).json({ message: "Server error" });
    }
} 