import { BookOpen, Hash, Mail } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card, CardTitle } from "../components/ui/card";
import { students } from "../data/students";

export default function StudentsPage() {
    return (
        <section id="students" className="py-20 bg-white dark:bg-gray-900/75">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-yellow-100 text-yellow-700">
                        Our Students
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-extrabold dark:text-white">
                        Meet Our Brightest Minds
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                        Our dedicated students are at the heart of our
                        institute, driving innovation and academic excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <Card key={student.id} className="overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">
                                            {student.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="text-gray-900 mb-1 truncate">
                                            {student.name}
                                        </CardTitle>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {student.department}
                                        </p>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {student.semester} Semester
                                        </Badge>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <Hash className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm text-gray-600">
                                            Roll: {student.roll}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm text-gray-600">
                                            Department: {student.department}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <a
                                        href={`mailto:${student.email}`}
                                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate">
                                            {student.email}
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
