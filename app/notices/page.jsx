import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Bell, Calendar, AlertCircle, Megaphone, Clock } from "lucide-react";

const notices = [
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

const typeColors = {
    Academic: "bg-blue-100 text-blue-700 border-blue-200",
    Holiday: "bg-green-100 text-green-700 border-green-200",
    Announcement: "bg-purple-100 text-purple-700 border-purple-200",
};

export default function Notice() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Bell className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">
                            Notices & Announcements
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest academic notices, holidays,
                        and important announcements from the institute.
                    </p>
                </div>

                {/* Filter Badges */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    <Badge className="bg-blue-600 text-white px-4 py-2 cursor-pointer hover:bg-blue-700">
                        All Notices
                    </Badge>
                    <Badge
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                        Academic
                    </Badge>
                    <Badge
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                        Holidays
                    </Badge>
                    <Badge
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                        Announcements
                    </Badge>
                </div>

                {/* Notices Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {notices.map((notice) => {
                        const Icon = notice.icon;
                        return (
                            <Card
                                key={notice.id}
                                className={`p-6 hover:shadow-lg transition-shadow duration-300 ${
                                    notice.urgent
                                        ? "border-l-4 border-l-red-500"
                                        : ""
                                }`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge
                                                className={
                                                    typeColors[notice.type]
                                                }
                                            >
                                                {notice.type}
                                            </Badge>
                                            {notice.urgent && (
                                                <Badge className="bg-red-100 text-red-700 border-red-200">
                                                    Urgent
                                                </Badge>
                                            )}
                                        </div>
                                        <h3 className="text-xl text-gray-900 mb-2">
                                            {notice.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    {notice.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    <span>Posted on {notice.date}</span>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Contact Info */}
                <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl text-gray-900 mb-2">
                        Stay Connected
                    </h3>
                    <p className="text-gray-700 mb-4">
                        For more information about any notice, please contact
                        the administration office.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+8801234567890"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            📞 +880 1234 567890
                        </a>
                        <a
                            href="mailto:info@polytechnic.edu"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            ✉️ info@polytechnic.edu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
