import { Calendar, CheckCircle, FileText, Users } from "lucide-react";

export const admissionSteps = [
    {
        id: 1,
        title: "Application",
        description:
            "Fill out the online application form with required documents",
        icon: FileText,
    },
    {
        id: 2,
        title: "Entrance Exam",
        description: "Take the entrance examination for your chosen department",
        icon: CheckCircle,
    },
    {
        id: 3,
        title: "Interview",
        description: "Attend the interview session with department faculty",
        icon: Users,
    },
    {
        id: 4,
        title: "Enrollment",
        description: "Complete enrollment after receiving acceptance letter",
        icon: Calendar,
    },
];

export const requirements = [
    "Secondary School Certificate (SSC) or equivalent",
    "Minimum GPA of 2.00 in SSC",
    "Mathematics and English proficiency",
    "Passport-size photographs",
    "Birth certificate and national ID",
];
