import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Corrected to String
    email: { type: String, required: true }, // Corrected to String
    password: { type: String, required: true }, // Corrected to String
    role: { type: String, enum: ["admin", "employee"], required: true }, // Corrected to String
    profileImage: { type: String }, // Corrected to String
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
