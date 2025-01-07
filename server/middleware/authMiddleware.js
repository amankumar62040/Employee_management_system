import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyUser = async (req, res, next) => {
  try {
    // Check if the Authorization header exists
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, error: "Token not provided" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Find the user based on the decoded _id
    const user = await User.findById(decoded._id).select('-password');
    
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Attach the user to the request object
    req.user = user;

    // Move to the next middleware or route handler
    next();

  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default verifyUser;
