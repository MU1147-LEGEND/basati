import dbConnect from "../../../lib/mongodb";
import Teacher from "../../../lib/models/TeacherSchema";
import AddTeacherForm from "./AddTeacherForm";
import { revalidatePath } from "next/cache";

// Server Action to handle form submission
async function addTeacher(formData) {
    "use server";

    console.log("Server action 'addTeacher' invoked!");

    const name = formData.get("name");
    const position = formData.get("position");
    const email = formData.get("email");
    const department_id = formData.get("department");
    const education = formData.get("education");
    const specialization = formData.get("specialization");
    const experience = formData.get("experience");
    const joining_date = formData.get("joiningDate");
    const subjects = formData.get("subjects");
    const imageUrl = formData.get("imageUrl"); // Get the uploaded image URL from hidden input

    const newTeacher = {
        name,
        email,
        department_id,
        subjects: subjects ? subjects.split(",").map((c) => c.trim()) : [],
        joining_date,
        position,
        education,
        specialization,
        experience,
        avatar: imageUrl,
    };

    // Insert directly into MongoDB from the server action to avoid making an
    // HTTP request to our own API during server-side execution.
    await dbConnect();
    const created = await Teacher.create(newTeacher);
    revalidatePath("/");
    console.log("New Teacher created:", created);
}

export default function AddTeacherPage() {
    return <AddTeacherForm addTeacherAction={addTeacher} />;
}
