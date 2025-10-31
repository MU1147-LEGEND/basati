import { Award, BookOpen, Mail } from "lucide-react";
import { faculty_teachers } from "../data/faculty";
import { faculty_teachers_mongo } from "../data/faculty";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export async function Faculty() {
    const facultyMembers = await faculty_teachers_mongo();
    return (
        <section id="faculty" className="py-20 bg-white dark:bg-gray-900/75">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-purple-100 text-purple-700">
                        Our Faculty
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-extrabold dark:text-white">
                        Meet Our Expert Educators
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                        Learn from experienced professionals dedicated to
                        nurturing the next generation of engineers and
                        technologists.
                    </p>
                </div>

                {/* Faculty Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facultyMembers.map((member) => (
                        <Card
                            key={member._id}
                            className="overflow-hidden transition-all dark:border-gray-700 dark:bg-gray-800 dark:hover:border-stone-500 duration-300"
                        >
                            <div className="p-6">
                                {/* Avatar */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        {member?.avatar ? (
                                            <ImageWithFallback
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-white text-xl">
                                                {member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-gray-900 dark:text-white mb-1 truncate">
                                            {member?.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                            {member?.position}
                                        </p>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs dark:bg-gray-700"
                                        >
                                            {member?.experience}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm">
                                            <div className="text-gray-900 dark:text-white">
                                                {member?.education}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-300">
                                                {member?.specialization}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm text-gray-600 dark:text-gray-300">
                                            {member?.subjects?.join(", ")}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="pt-4 border-t border-gray-200 z-50">
                                    <a
                                        href={`mailto:${member?.email}`}
                                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate z-[999] ">
                                            {member?.email}
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
