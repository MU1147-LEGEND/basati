import { Bell, Clock } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { notices } from "../data/notices";

const typeColors = {
    Academic: "bg-blue-100 text-blue-700 border-blue-200",
    Holiday: "bg-green-100 text-green-700 border-green-200",
    Announcement: "bg-purple-100 text-purple-700 border-purple-200",
};

export default function Notice() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Bell className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold dark:text-gray-100">
                            Notices & Announcements
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        Academic
                    </Badge>
                    <Badge
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        Holidays
                    </Badge>
                    <Badge
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
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
                                className={`p-6 dark:bg-gray-800 ${
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
                                                <Badge className="bg-red-100 text-red-700 border-red-200 ">
                                                    Urgent
                                                </Badge>
                                            )}
                                        </div>
                                        <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-2">
                                            {notice.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {notice.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    <span>Posted on {notice.date}</span>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Contact Info */}
                <div className="mt-12 bg-blue-50 border border-blue-200 dark:bg-gray-800 dark:border-gray-600 rounded-lg p-6 text-center">
                    <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-2">
                        Stay Connected
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        For more information about any notice, please contact
                        the administration office.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+8801234567890"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            📞 +880 1234 567890
                        </a>
                        <a
                            href="mailto:info@basati.edu.bd"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            ✉️ info@basati.edu.bd
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
