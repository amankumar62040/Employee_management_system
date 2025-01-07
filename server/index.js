import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import departmentRouter from './routes/department.js';
import connectToDatabase from './db/db.js';

// Database connection
connectToDatabase();

// App Initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/departments', departmentRouter);

// Server Port
const PORT = process.env.PORT || 5000;

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
