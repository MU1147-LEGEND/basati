import { Award, BookOpen, Users } from "lucide-react";
import { departments } from "../data/departments";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Departments() {
    return (
        <section
            id="departments"
            className="py-20 bg-gray-50 dark:bg-gray-900/75 dark:text-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-700">
                        Our Departments
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-extrabold dark:text-gray-100">
                        Excellence in Technical Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
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
                                className="overflow-hidden transition-all duration-300 group bg-white dark:hover:border-stone-500 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={dept.image}
                                        alt={dept.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-50`}
                                    ></div>
                                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <Icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className=" text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {dept.description}
                                    </p>

                                    {/* Courses */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-2">
                                            <BookOpen className="w-4 h-4" />
                                            <span>Key Courses:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {dept.courses.map((course, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="secondary"
                                                    className="text-xs dark:text-gray-300 dark:bg-gray-700/50"
                                                >
                                                    {course}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <Users className="w-4 h-4" />
                                            <span>
                                                {dept.students} Students
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
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
