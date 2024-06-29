import Product from "../models/Product.js";


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


