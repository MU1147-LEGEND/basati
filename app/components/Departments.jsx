import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Monitor, Building2, Zap, Users, BookOpen, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const departments = [
    {
        id: 1,
        name: "Computer Science",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500",
        image: "https://images.unsplash.com/photo-1581094487815-d1df47182343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJ8ZW58MXx8fHwxNzYwMzUxMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description:
            "Master programming, networking, and modern software development with hands-on training in the latest technologies.",
        courses: ["Programming", "Networking", "Database", "Web Development"],
        students: 65,
    },
    {
        id: 2,
        name: "Civil Technology",
        icon: Building2,
        color: "from-orange-500 to-red-500",
        image: "https://images.unsplash.com/photo-1653201587864-c6280a0bb4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDI5MDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description:
            "Learn construction, structural design, and infrastructure development with practical field experience.",
        courses: ["Surveying", "Structural Design", "Construction", "CAD"],
        students: 45,
    },
    {
        id: 3,
        name: "Electrical Technology",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        image: "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBjaXJjdWl0fGVufDF8fHx8MTc2MDI2NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description:
            "Explore electrical systems, power generation, and electronics with industry-standard equipment and labs.",
        courses: [
            "Circuit Design",
            "Power Systems",
            "Electronics",
            "Automation",
        ],
        students: 40,
    },
];

export function Departments() {
    return (
        <section id="departments" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-700">
                        Our Departments
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                        Excellence in Technical Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from our three specialized departments, each
                        designed to provide comprehensive technical education
                        and practical skills.
                    </p>
                </div>

                {/* Department Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {departments.map((dept) => {
                        const Icon = dept.icon;
                        return (
                            <Card
                                key={dept.id}
                                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={dept.image}
                                        alt={dept.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-60`}
                                    ></div>
                                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3">
                                        <Icon className="w-6 h-6 text-gray-900" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-gray-900 mb-3">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {dept.description}
                                    </p>

                                    {/* Courses */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                                            <BookOpen className="w-4 h-4" />
                                            <span>Key Courses:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {dept.courses.map((course, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {course}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Users className="w-4 h-4" />
                                            <span>
                                                {dept.students} Students
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Award className="w-4 h-4" />
                                            <span>4 Years</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
