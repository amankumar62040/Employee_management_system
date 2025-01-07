import express from 'express';
import { addDepartment, getDepartments,editDepartment, updateDepartment ,deleteDepartment} from '../controllers/departmentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/', authMiddleware, getDepartments);
router.post('/add', authMiddleware, addDepartment);
router.get('/:id', authMiddleware, editDepartment);
router.put('/:id', authMiddleware,  updateDepartment);
router.delete('/:id', authMiddleware,  deleteDepartment);

export default router;
