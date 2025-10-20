import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from "lucide-react";

export function About() {
    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-gray-900 dark:text-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-green-100 text-green-700 ">
                        About Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 mb-4">
                        Leading Technical Education Since 2010
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Our polytechnic institute is committed to providing
                        quality technical education that prepares students for
                        successful careers in engineering and technology fields.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 dark:from-blue-900/50 dark:to-cyan-900/50 dark:border-gray-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl text-gray-900 dark:text-gray-100">
                                Our Vision
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            To be a leading polytechnic institute recognized for
                            excellence in technical education, innovation, and
                            developing skilled professionals who contribute to
                            national development and global technological
                            advancement.
                        </p>
                    </Card>

                    <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 dark:from-purple-900/50 dark:to-pink-900/50 dark:border-gray-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl text-gray-900 dark:text-gray-100">
                                Our Mission
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            To provide comprehensive technical education
                            combining theoretical knowledge with practical
                            skills, foster innovation and creativity, and
                            prepare students to meet the challenges of the
                            modern technological world.
                        </p>
                    </Card>
                </div>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="text-gray-900 dark:text-gray-100 mb-2">
                            Accredited Programs
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            All programs nationally recognized and
                            industry-aligned
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="text-gray-900 dark:text-gray-100 mb-2">
                            Expert Faculty
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Experienced educators with industry backgrounds
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-orange-600" />
                        </div>
                        <h4 className="text-gray-900 dark:text-gray-100 mb-2">
                            Modern Curriculum
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Updated courses matching current industry needs
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-8 h-8 text-purple-600" />
                        </div>
                        <h4 className="text-gray-900 dark:text-gray-100 mb-2">
                            Career Success
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            High placement rate in top companies and industries
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
