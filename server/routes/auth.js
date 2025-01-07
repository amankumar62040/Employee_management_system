import express from 'express';
import { login, verify } from '../controllers/authController.js'; // Ensure the path is correct
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router(); // Initialize the router instance

// Define the login route
router.post('/login', login); 
router.get('/verify', authMiddleware, verify); 

// Export the router for use in other parts of the application
export default router;
