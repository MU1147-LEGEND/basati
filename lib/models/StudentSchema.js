import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: String, required: true, unique: true },
    department_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    current_semester: { type: Number, required: true },
});

const Student =
    mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default Student;
