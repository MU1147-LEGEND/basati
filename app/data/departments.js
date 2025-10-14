import { Building2, Monitor, Zap } from "lucide-react";

export const departments = [
    {
        id: 1,
        name: "Computer Science",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500",
        image: "https://theeventchronicle.com/wp-content/uploads/2021/04/program-bachelor-of-science-in-computer-science-1920x1080-1.jpg",
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
