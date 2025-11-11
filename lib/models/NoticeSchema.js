import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    type: {
        type: String,
        enum: ["Academic", "Holiday", "Announcement"],
        required: true,
    },
    urgent: { type: Boolean, default: false },
    // Optional file fields for downloadable notices (Google Drive link / filename)
    pdfLink: { type: String },
});

export default mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);
