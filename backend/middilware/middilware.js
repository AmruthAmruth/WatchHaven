import jwt from 'jsonwebtoken';

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
