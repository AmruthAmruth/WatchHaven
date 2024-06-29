import jwt from 'jsonwebtoken';
import multer from 'multer'
import path from 'path'

export const verifyToken = (req, res, next) => {
    // Get token from headers
    let token = req.headers.authorization;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Extract token from header format (Bearer token)
        const accessToken = token.split(' ')[1];

        // Verify token
        jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error("Error verifying token:", err);
                return res.status(403).json({ message: "Forbidden: Invalid token" });
            } else {
                // Token is valid, attach decoded payload to request object
                req.user = decoded;
                next(); // Proceed to next middleware or route handler
            }
        });
    } catch (error) {
        console.error("Error in verifyToken middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

 export const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg' 
        ) {
            callback(null, true);
        } else {
            console.log("Only jpg and png Files Are Supported");
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 // 2 MB
    } 
});

