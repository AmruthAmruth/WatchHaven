import Order from "../models/Order.js";
import User from "../models/User.js";

export const createOrder = async (req, res) => {
    const { userId, productId, address, phone } = req.body;
    if (!userId || !productId || !address || !phone) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }
    try {
       
        let newOrder = new Order({
            userId,
            productId,
            address,
            phone
        });

        newOrder = await newOrder.save();

        if (newOrder) {
            let user = await User.findById(userId);
            if (user) {
                user.orders.push({ product: productId, orderId: newOrder._id });
                user.cart = [];
                await user.save();

                return res.status(201).json({ message: "Order created successfully", order: newOrder });
            } else {
                console.error("User not found");
                return res.status(404).json({ message: "User not found" });
            }
        } else {
            console.log("Order creation failed");
            return res.status(400).json({ message: "Order creation failed" });
        }
    } catch (error) {
        console.error("Error in createOrder:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const getAllOrders = async (req, res) => {
    try {
       
        const orders = await Order.find();

        if (orders) {
            return res.status(200).json({ orders });
        } else {
            return res.status(500).json({ message: "Unexpected Error" });
        }
    } catch (error) {
        console.error("Error in getAllOrders:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const getOrderByuserId = async (req, res) => {
    const userId = req.params.id;
    try {
        
        const user = await User.findById(userId);
 
        if (!user || !user.orders || user.orders.length === 0) {
            return res.status(404).json({ message: "You have not ordered any products" });
        } else {
            
            const orderIds = user.orders.map(order => order.orderId);
            const orders = await Order.find({ _id: { $in: orderIds } });

            return res.status(200).json({ orders });
        }
    } catch (error) {
        console.error("Error in getOrderByuserId:", error);
        return res.status(500).json({ message: "Server error" });
    }
};