import api from "../../api/api";
import AddTeacherForm from "./AddTeacherForm";

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

    const response = await api.post("/teachers", newTeacher);
    console.log("New Teacher Data:", response.data);
}

export default function AddTeacherPage() {
    return <AddTeacherForm addTeacherAction={addTeacher} />;
}
