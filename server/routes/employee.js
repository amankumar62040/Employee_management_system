// routes/employee.js

import express from 'express';
import { addEmployee, upload, getEmployee } from '../controllers/employeeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Add Employee route
router.post('/add', upload.single('profileImage'), addEmployee);
router.get('/', authMiddleware, getEmployee)

export default router;
