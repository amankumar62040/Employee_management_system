import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {
  addEmployee,
  upload,
  getEmployees,
  getEmployee,
  updateEmployee,
  // deleteEmployee // Uncomment if you implement it
} from '../controllers/employeeController.js';

const router = express.Router();

// ✅ GET all employees
router.get('/', authMiddleware, getEmployees);

// ✅ POST: Add a new employee with image upload
router.post('/add', authMiddleware, upload.single('profileImage'), addEmployee);

// ✅ GET single employee by ID
router.get('/:id', authMiddleware, getEmployee);

// ✅ PUT: Update employee details (name, designation, etc.)
router.put('/:id', authMiddleware, updateEmployee);

// ❌ DELETE: Optional - implement if needed
// router.delete('/:id', authMiddleware, deleteEmployee);

export default router;
