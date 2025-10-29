import {
    FlaskConical,
    Laptop,
    Library,
    Microscope,
    Wrench,
    Zap,
} from "lucide-react";

export const facilities = [
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
