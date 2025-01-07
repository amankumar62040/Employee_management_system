import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    dep_name: { type: String, required: true }, // Corrected to 'String'
    description: { type: String }, // Corrected to 'String'
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
