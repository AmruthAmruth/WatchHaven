import Product from "../models/Product.js";
import User from "../models/User.js";


export const addProduct = async (req, res) => {
    const { title, offer, price, description } = req.body;

    if (!title || !offer || !price || !description) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Ensure offer and price are numbers
    const offerNumber = parseFloat(offer);
    const priceNumber = parseFloat(price);

    if (isNaN(offerNumber) || isNaN(priceNumber)) {
        return res.status(400).json({ message: "Offer and price must be numbers" });
    }

    try {
        const offprice = priceNumber - ((priceNumber * offerNumber) / 100);

        let newProduct = new Product({
            title,
            offer: offerNumber,
            offprice,
            price: priceNumber,
            description
        });

        if (req.file) {
            newProduct.image = req.file.path;
        }

        newProduct = await newProduct.save();
        if (!newProduct) {
            return res.status(500).json({ message: "Unexpected error" });
        } else {
            return res.status(201).json({ message: "Product added successfully", newProduct });
        }
    } catch (error) {
        console.error("Error in addProduct:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const editProduct = async (req, res) => {
    const { id } = req.params;
    const { title, offer, price, description } = req.body;

    if (!title || !offer || !price || !description) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Ensure offer and price are numbers
    const offerNumber = parseFloat(offer);
    const priceNumber = parseFloat(price);

    if (isNaN(offerNumber) || isNaN(priceNumber)) {
        return res.status(400).json({ message: "Offer and price must be numbers" });
    }

    try {
        const offprice = priceNumber - ((priceNumber * offerNumber) / 100);
        let updatedProduct = {
            title,
            offer: offerNumber,
            offprice,
            price: priceNumber,
            description
        };

        if (req.file) {
            updatedProduct.image = req.file.path;
        }

        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("Error in editProduct:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        return res.status(200).json(products);
    } catch (error) {
        console.error("Error in getAllProducts:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error("Error in getProductById:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        console.error("Error in deleteProductById:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const addToCart = async (req, res) => {
    const { userId, productId, quantity = 1 } = req.body; // Default quantity to 1 if not provided

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Please Login Your Account." });
        } 

        const existingProduct = user.cart.find(item => item.product === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity; 
            return res.json({message:"Product Quantity Updated"})
        } else {
            user.cart.push({ product: productId, quantity: quantity });
        }

        await user.save();
        return res.json({ message: "Product added to cart successfully." });
    } catch (error) {
        console.error("Error in addToCart:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Please Login Your Account." });
        }

        // Log the current cart to check its structure
        console.log("User cart before:", user.cart);

        // Find the index of the product in the cart
        const productIndex = user.cart.findIndex(item => item.product && item.product.toString() === productId);

        if (productIndex > -1) {
            // Remove the product from the cart
            user.cart.splice(productIndex, 1);
            await user.save();
            return res.json({ message: "Product removed from cart successfully." });
        } else {
            return res.status(404).json({ message: "Product not found in cart." });
        }
    } catch (error) {
        console.error("Error in removeFromCart:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const increaseQuantity = async (req, res) => {
    const { userId, productId, incrementBy = 1 } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Please Login Your Account." });
        }

        // Log the current cart to check its structure
        console.log("User cart before:", user.cart);

        // Find the product in the cart
        const existingProduct = user.cart.find(item => item.product && item.product.toString() === productId);

        if (existingProduct) {
            // Increase the quantity
            existingProduct.quantity += incrementBy;

            await user.save();
            return res.json({ message: "Product quantity increased successfully." });
        } else {
            return res.status(404).json({ message: "Product not found in cart." });
        }
    } catch (error) {
        console.error("Error in increaseQuantity:", error);
        return res.status(500).json({ message: "Server error" });
    }
};



export const decreaseQuantity = async (req, res) => {
    const { userId, productId, decrementBy = 1 } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Please Login Your Account." });
        }

        // Log the current cart to check its structure
        console.log("User cart before:", user.cart);

        // Find the product in the cart
        const existingProduct = user.cart.find(item => item.product && item.product.toString() === productId);

        if (existingProduct) {
            // Decrease the quantity
            existingProduct.quantity -= decrementBy;

            // If quantity is 0 or less, remove the product from the cart
            if (existingProduct.quantity <= 0) {
                user.cart = user.cart.filter(item => item.product.toString() !== productId);
            }

            await user.save();
            return res.json({ message: "Product quantity decreased successfully." });
        } else {
            return res.status(404).json({ message: "Product not found in cart." });
        }
    } catch (error) {
        console.error("Error in decreaseQuantity:", error);
        return res.status(500).json({ message: "Server error" });
    }
};
