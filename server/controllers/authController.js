import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ success: false, error: "Password incorrect" });
    }

    // Generate JWT
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY, // Ensure this is set in your .env file
      { expiresIn: "10d" }
    );

    // Send success response
    res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};


const verify =(req, res) => {
  return res.status(200).json({success: true , user : req.user});


}


export { login , verify};
