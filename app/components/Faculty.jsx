import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Award, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const faculty = [
    {
        id: 1,
        name: "Dr. Mohammad Rahman",
        position: "Principal & Head of Computer Department",
        education: "PhD in Computer Science",
        specialization: "Artificial Intelligence & Machine Learning",
        email: "m.rahman@basti.edu",
        experience: "15+ years",
        courses: ["Advanced Programming", "Database Systems"],
    },
    {
        id: 2,
        name: "Engr. Fatima Begum",
        position: "Head of Civil Department",
        education: "M.Sc in Civil Engineering",
        specialization: "Structural Engineering & Design",
        email: "f.begum@basti.edu",
        experience: "12+ years",
        courses: ["Structural Analysis", "Construction Management"],
    },
    {
        id: 3,
        name: "Engr. Kamal Hassan",
        position: "Head of Electrical Department",
        education: "M.Sc in Electrical Engineering",
        specialization: "Power Systems & Renewable Energy",
        email: "k.hassan@basti.edu",
        experience: "14+ years",
        courses: ["Power Electronics", "Control Systems"],
    },
    {
        id: 4,
        name: "Prof. Ayesha Khan",
        position: "Senior Lecturer - Computer",
        education: "M.Sc in Software Engineering",
        specialization: "Web Development & Mobile Apps",
        email: "a.khan@basti.edu",
        experience: "10+ years",
        courses: ["Web Technologies", "Mobile Development"],
    },
    {
        id: 5,
        name: "Engr. Sabbir Ahmed",
        position: "Lecturer - Civil",
        education: "B.Sc in Civil Engineering",
        specialization: "Surveying & Geotechnical",
        email: "s.ahmed@basti.edu",
        experience: "8+ years",
        courses: ["Surveying", "Soil Mechanics"],
    },
    {
        id: 6,
        name: "Engr. Nazia Sultana",
        position: "Lecturer - Electrical",
        education: "M.Sc in Electronics",
        specialization: "Electronics & Automation",
        email: "n.sultana@basti.edu",
        experience: "9+ years",
        courses: ["Digital Electronics", "Industrial Automation"],
    },
];

export function Faculty() {
    return (
        <section id="faculty" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-purple-100 text-purple-700">
                        Our Faculty
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                        Meet Our Expert Educators
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Learn from experienced professionals dedicated to
                        nurturing the next generation of engineers and
                        technologists.
                    </p>
                </div>

                {/* Faculty Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member) => (
                        <Card
                            key={member.id}
                            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                {/* Avatar */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">
                                            {member.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-gray-900 mb-1 truncate">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {member.position}
                                        </p>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {member.experience}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm">
                                            <div className="text-gray-900">
                                                {member.education}
                                            </div>
                                            <div className="text-gray-600">
                                                {member.specialization}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm text-gray-600">
                                            {member.courses.join(", ")}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="pt-4 border-t border-gray-200">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate">
                                            {member.email}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
