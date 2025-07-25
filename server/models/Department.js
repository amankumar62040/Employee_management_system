import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    dep_name: { type: String, required: true },
    description: { type: String }
}, {
    timestamps: true
});

const Department = mongoose.models.Department || mongoose.model("Department", departmentSchema);

export default Department;
