import { ArrowRight, CheckCircle } from "lucide-react";
import { admissionSteps, requirements } from "../data/admission";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Admissions() {
    return (
        <section id="admissions" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-red-100 text-red-700">
                        Admissions
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Join Our Institute
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                        Start your journey towards a successful technical
                        career. Applications are now open for the upcoming
                        academic session.
                    </p>
                </div>

                {/* Admission Process */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-8">
                        Admission Process
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {admissionSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className="relative">
                                    <Card className="p-6 text-center h-full dark:bg-gray-800 dark:border-gray-700 hover:dark:border-stone-500 transition-all duration-300">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="absolute -top-0 -left-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-lg flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <h4 className="text-gray-900 dark:text-white mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {step.description}
                                        </p>
                                    </Card>
                                    {index < admissionSteps.length - 1 && (
                                        <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 w-6 h-6 text-gray-400 transform -translate-y-1/2" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Requirements and Dates */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Admission Requirements */}
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                        <h3 className="text-gray-900 dark:text-white mb-6">
                            Admission Requirements
                        </h3>
                        <ul className="space-y-3">
                            {requirements.map((req, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {req}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Important Dates */}
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                        <h3 className="text-gray-900 dark:text-white mb-6">
                            Important Dates
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                                <span className="text-gray-700 dark:text-gray-300">
                                    Application Opens
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    January 1, 2025
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                                <span className="text-gray-700 dark:text-gray-300">
                                    Application Deadline
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    March 31, 2025
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                                <span className="text-gray-700 dark:text-gray-300">
                                    Entrance Exam
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    April 15, 2025
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                                <span className="text-gray-700 dark:text-gray-300">
                                    Results Announced
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    May 1, 2025
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 dark:text-gray-300">
                                    Session Starts
                                </span>
                                <span className="text-blue-600 dark:text-blue-400">
                                    July 1, 2025
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 hover:translate-x-2 dark:text-white transition-all duration-300 gap-2"
                    >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        For more information, contact our admissions office at{" "}
                        <a
                            href="mailto:admissions@basati.edu.bd"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-all duration-300"
                        >
                            admissions@basati.edu.bd
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
