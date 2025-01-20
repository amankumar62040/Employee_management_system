import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js';
import connectToDatabase from './db/db.js';
import path from 'path';
import fs from 'fs';

// Ensure the uploads directory exists
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Database connection
connectToDatabase();

// App Initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/departments', departmentRouter);
app.use('/api/employee', employeeRouter);

// Server Port
const PORT = process.env.PORT || 5000;

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
