import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
    Laptop,
    Wrench,
    Zap,
    Library,
    Microscope,
    FlaskConical,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const facilities = [
    {
        id: 1,
        name: "Computer Labs",
        icon: Laptop,
        description:
            "State-of-the-art computer labs with latest hardware and software for programming and networking practice.",
        features: [
            "50+ Modern Computers",
            "High-Speed Internet",
            "Latest Software",
            "24/7 Access",
        ],
    },
    {
        id: 2,
        name: "Civil Workshop",
        icon: Wrench,
        description:
            "Fully equipped workshop for surveying, construction materials testing, and structural design practice.",
        features: [
            "Testing Equipment",
            "CAD Workstations",
            "Field Instruments",
            "Project Space",
        ],
    },
    {
        id: 3,
        name: "Electrical Labs",
        icon: Zap,
        description:
            "Advanced electrical and electronics labs with modern equipment for circuit design and power systems.",
        features: [
            "Circuit Trainers",
            "Power Systems Lab",
            "PLC Equipment",
            "Safety Features",
        ],
    },
    {
        id: 4,
        name: "Library",
        icon: Library,
        description:
            "Comprehensive library with extensive collection of technical books, journals, and digital resources.",
        features: [
            "5000+ Books",
            "Digital Library",
            "Study Areas",
            "Research Support",
        ],
    },
    {
        id: 5,
        name: "Science Labs",
        icon: Microscope,
        description:
            "Well-equipped physics and chemistry labs for fundamental science experiments and research.",
        features: [
            "Modern Equipment",
            "Safety Standards",
            "Experiment Kits",
            "Lab Assistants",
        ],
    },
    {
        id: 6,
        name: "Project Lab",
        icon: FlaskConical,
        description:
            "Dedicated space for final year projects and innovative student research initiatives.",
        features: [
            "Work Stations",
            "Tools & Equipment",
            "Mentor Support",
            "Prototype Materials",
        ],
    },
];

export function Facilities() {
    return (
        <section id="facilities" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-orange-100 text-orange-700">
                        Campus Facilities
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                        World-Class Infrastructure
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our campus is equipped with modern facilities and
                        state-of-the-art laboratories to provide hands-on
                        learning experience.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility) => {
                        const Icon = facility.icon;
                        return (
                            <Card
                                key={facility.id}
                                className="p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 mb-2">
                                            {facility.name}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {facility.description}
                                </p>

                                <ul className="space-y-2">
                                    {facility.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-gray-600"
                                        >
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
