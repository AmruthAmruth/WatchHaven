import Order from "../models/Order.js";
import User from "../models/User.js";

export const createOrder = async (req, res) => {
    const { userId, productId, address, phone } = req.body;
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

