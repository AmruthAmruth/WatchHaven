import Review from "../models/Review.js";
import User from "../models/User.js";


export const addReview=async(req,res)=>{
        const {userId,productId,star,title,comments}=req.body
        
    if (!title || !star || !comments || !userId || !productId) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }
        try{
            const user =await User.findById(userId)
            const exists = user.order.some(item => item.product.equals(productId));
            let buyer=false
           if(exists){
            buyer=true
           }else{
            buyer=false
           }

           let newReview = new Review({
               buyer,
               star,
               title,
               comments
           })

           newReview = await newReview.save()
           if (!newReview) {
            return res.status(500).json({ message: "Unexpected error" });
        } else {
            return res.status(201).json({ message: "Review added successfully", newReview });
        }
        }catch(error){
            console.error("Error in addReview:", error);
        return res.status(500).json({ message: "Server error" });
        }
}

export const getAllReview=async(req,res)=>{
    try{
        const reviews = await Review.find({})
        if(reviews){
            return res.status(201).json({ reviews });
        }else{
            return res.status(500).json({message:"Unexpected Error"})
        }

    }catch(error){
        console.error("Error in getAllReview:", error);
        return res.status(500).json({ message: "Server error" });
    }
}