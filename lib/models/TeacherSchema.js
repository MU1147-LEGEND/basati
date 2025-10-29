import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    subjects: { type: [String] },
    joining_date: { type: Date },
    experience: { type: String },
    position: { type: String },
    education: { type: String },
    specialization: { type: String },
    avatar: { type: String },
});

const Teacher =
    mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);

export default Teacher;
