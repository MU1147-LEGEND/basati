import { AlertCircle, Bell, Calendar, Megaphone } from "lucide-react";

export const notices = [
    {
        id: 1,
        type: "Academic",
        title: "Mid-Term Examination Schedule Released",
        date: "October 12, 2025",
        description:
            "The mid-term examination schedule for all departments has been published. Students are advised to check their respective department notice boards for detailed timetables.",
        urgent: true,
        icon: Bell,
    },
    {
        id: 2,
        type: "Holiday",
        title: "Victory Day Holiday",
        date: "December 16, 2025",
        description:
            "The institute will remain closed on December 16, 2025, in observance of Victory Day. Regular classes will resume on December 17, 2025.",
        urgent: false,
        icon: Calendar,
    },
    {
        id: 3,
        type: "Announcement",
        title: "Workshop on Artificial Intelligence",
        date: "October 20, 2025",
        description:
            "Computer Science Department is organizing a 3-day workshop on Artificial Intelligence and Machine Learning. Interested students can register at the department office by October 15, 2025.",
        urgent: false,
        icon: Megaphone,
    },
    {
        id: 4,
        type: "Academic",
        title: "Assignment Submission Deadline Extended",
        date: "October 10, 2025",
        description:
            "Due to technical difficulties, the assignment submission deadline for all departments has been extended to October 25, 2025. Submit your assignments to respective faculty members.",
        urgent: true,
        icon: AlertCircle,
    },
    {
        id: 5,
        type: "Holiday",
        title: "Eid-ul-Fitr Holidays",
        date: "April 10-15, 2025",
        description:
            "The institute will observe Eid-ul-Fitr holidays from April 10-15, 2025. Classes will resume on April 16, 2025. Wishing everyone Eid Mubarak!",
        urgent: false,
        icon: Calendar,
    },
    {
        id: 6,
        type: "Announcement",
        title: "Annual Sports Day 2025",
        date: "November 5, 2025",
        description:
            "Annual Sports Day will be held on November 5, 2025. All students are encouraged to participate. Registration forms are available at the student affairs office.",
        urgent: false,
        icon: Megaphone,
    },
    {
        id: 7,
        type: "Academic",
        title: "Final Year Project Presentation Dates",
        date: "October 8, 2025",
        description:
            "Final year students must submit their project reports by November 15, 2025. Presentations will be held from November 20-25, 2025. Contact your project supervisors for more details.",
        urgent: true,
        icon: Bell,
    },
    {
        id: 8,
        type: "Holiday",
        title: "Independence Day Celebration",
        date: "March 26, 2025",
        description:
            "Institute will remain closed on March 26, 2025, to celebrate Independence Day. Flag hoisting ceremony will be held at 9:00 AM.",
        urgent: false,
        icon: Calendar,
    },
    {
        id: 9,
        type: "Announcement",
        title: "Industrial Visit - Civil Department",
        date: "October 5, 2025",
        description:
            "Civil Technology Department is organizing an industrial visit to a construction site on October 30, 2025. Students interested must register by October 18, 2025.",
        urgent: false,
        icon: Megaphone,
    },
    {
        id: 10,
        type: "Academic",
        title: "Semester Fee Payment Notice",
        date: "October 1, 2025",
        description:
            "Students are reminded to pay their semester fees by October 31, 2025, to avoid late payment penalties. Payment can be made at the accounts office during office hours.",
        urgent: true,
        icon: AlertCircle,
    },
];
