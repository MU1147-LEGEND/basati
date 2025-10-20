import { Building2, Monitor, Zap } from "lucide-react";

export const departments = [
    {
        id: 1,
        name: "Computer Science",
        icon: Monitor,
        color: "from-blue-500 via-purple-400 to-cyan-500",
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
        color: "from-orange-500 via-yellow-500 to-red-500",
        image: "https://nileuniversity.edu.ng/wp-content/uploads/civil-eng-dept.jpg",
        description:
            "Learn construction, structural design, and infrastructure development with practical field experience.",
        courses: ["Surveying", "Structural Design", "Construction", "CAD"],
        students: 45,
    },
    {
        id: 3,
        name: "Electrical Technology",
        icon: Zap,
        color: "from-yellow-500 via-orange-500 to-red-500",
        image: "https://engineering-jobs.theiet.org/getasset/85bead92-2e44-4692-b579-3ddf03a9a84b/",
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
