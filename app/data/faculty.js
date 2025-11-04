import dbConnect from "../../lib/mongodb";
import Teacher from "../../lib/models/TeacherSchema";

// Static faculty teachers dummy data
export const faculty_teachers = [
    {
        _id: 1,
        name: "Md. Momen Khandakar",
        avatar: "https://basati.edu.bd/Application/dist/img/365904262.jpg",
        position: "Principal & Head of Computer Department",
        education: "PhD in Computer Science",
        specialization: "Artificial Intelligence & Machine Learning",
        email: "momen@basati.edu.bd",
        experience: "15+ years",
        subjects: ["Advanced Programming", "Database Systems"],
    },
    {
        _id: 2,
        name: "Md. Nadiruzzaman",
        avatar: "https://basati.edu.bd/Application/dist/img/1677753403.png",
        position: "Head of Civil Department",
        education: "M.Sc in Civil Engineering",
        specialization: "Structural Engineering & Design",
        email: "nadiruzzaman@basati.edu.bd",
        experience: "12+ years",
        subjects: ["Structural Analysis", "Construction Management"],
    },
    {
        _id: 3,
        name: "Md. Abul Kashem",
        position: "Head of Electrical Department",
        education: "M.Sc in Electrical Engineering",
        specialization: "Power Systems & Renewable Energy",
        email: "kashem@basati.edu.bd",
        experience: "14+ years",
        subjects: ["Power Electronics", "Control Systems"],
    },
    {
        _id: 4,
        name: "Maksudul Islam Tuhin",
        avatar: "https://basati.edu.bd/Application/dist/img/287978764.jpeg",
        position: "Senior Lecturer - Computer",
        education: "M.Sc in Software Engineering",
        specialization: "Web Development & Mobile Apps",
        email: "tuhin@basati.edu.bd",
        experience: "10+ years",
        subjects: ["Web Technologies", "Mobile Development"],
    },
    {
        _id: 5,
        name: "Rajib Ahmed",
        avatar: "https://basati.edu.bd/Application/dist/img/1208983468.jpg",
        position: "Senior Lecturer - Electrical",
        education: "B.Sc in Electrical Engineering",
        specialization: "Power Systems & Renewable Energy",
        email: "ahmed@basati.edu.bd",
        experience: "8+ years",
        subjects: ["Hardware Design", "Embedded Systems"],
    },
    {
        _id: 6,
        name: "Mohammad Hridoy",
        avatar: "https://basati.edu.bd/Application/dist/img/1010907644.com-webp-to-jpg-converter%20(1)",
        position: "Lecturer - Electrical",
        education: "M.Sc in Electronics",
        specialization: "Electronics & Automation",
        email: "n.sultana@basati.edu",
        experience: "9+ years",
        subjects: ["Digital Electronics", "Industrial Automation"],
    },
];

// Fetch faculty teachers from MongoDB
export const faculty_teachers_mongo = async () => {
    // Server-side: fetch teachers directly from MongoDB to avoid making HTTP
    // requests to the app's own API during prerender/build.
    await dbConnect();
    const teachers = await Teacher.find({}).lean();
    // Normalize _id to string for the client
    return teachers.map((t) => ({ ...t, _id: t._id.toString() }));
};
