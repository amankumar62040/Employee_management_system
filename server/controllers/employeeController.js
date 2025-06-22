import multer from 'multer';
import Employee from '../models/Employee.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import Path from 'path';
// import Department from '../models/Department.js';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + Path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Add Employee Controller
const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      salary,
      password,
      role,
    } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'User already registered' });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : '',
    });
    const savedUser = await newUser.save();

    // Create employee record
    const newEmployee = new Employee({
      userId: savedUser._id,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      salary,
    });
    await newEmployee.save();

    return res.status(200).json({ success: true, message: 'Employee created' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate('userId', { password: 0 })
      .populate('department'); // <- Ensure department is populated

    return res.status(200).json({ success: true, employees });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error: Unable to fetch employees' });
  }
};

const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id)
      .populate('userId', { password: 0 })
      .populate('department');
    return res.status(200).json({ success: true, employee });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error: Unable to fetch employee' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, maritalStatus, designation, department, salary } = req.body;

    const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ success: false, error: 'Employee not found' });

    const user = await User.findById(employee.userId);
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    const updatedUser = await User.findByIdAndUpdate(employee.userId, { name }, { new: true });
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { maritalStatus, designation, department, salary },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      updatedUser,
      updatedEmployee,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Server error while updating employee' });
  }
};

export { addEmployee, upload, getEmployees, getEmployee, updateEmployee };
