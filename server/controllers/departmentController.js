import Department from '../models/department.js';

export const getDepartments = async (req , res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    return  res.status(500).json({ success: false, error: "Server error: Unable to fetch departments" });
  }
};

export const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;
    const newDep = new Department({ dep_name, description });
    await newDep.save();
    return res.status(200).json({ success: true, department: newDep });
  } catch (error) {
   return   res.status(500).json({ success: false, error: "Server error: Unable to add department" });
  }
};

export const editDepartment = async (req, res) => {
  
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    return res.status(200).json({ success: true, department });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error: Unable to get departments" });
  }
}


export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name, description } = req.body;

    const updatedDepartment = await Department.findByIdAndUpdate(
      id, 
      { dep_name, description },
      { new: true } // This option returns the updated document
    );

    if (!updatedDepartment) {
      return res.status(404).json({ success: false, error: "Department not found" });
    }

    return res.status(200).json({ success: true, department: updatedDepartment });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error: Unable to update department" });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the department by ID
    const deletedDepartment = await Department.findByIdAndDelete(id);

    // Check if the department exists
    if (!deletedDepartment) {
      return res.status(404).json({ success: false, error: "Department not found" });
    }

    return res.status(200).json({ success: true, department: deletedDepartment });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error: Unable to delete department" });
  }
};

