import { Clock, Bell } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { noticesMongo } from "../data/notices";
import { getIconComponent } from "../../lib/iconMap";

const typeColors = {
    Academic: "bg-blue-100 text-blue-700 border-blue-200",
    Holiday: "bg-green-100 text-green-700 border-green-200",
    Announcement: "bg-purple-100 text-purple-700 border-purple-200",
};

// Generate structured data for SEO
const generateStructuredData = async () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Basati Notices & Announcements",
        description:
            "Stay updated with the latest BASATI notices including academic announcements, holidays, and important institute updates.",
        url: "https://basati.edu.bd/notices",
        inLanguage: "en",
        isPartOf: {
            "@type": "WebSite",
            name: "BASATI - Badiul Alam Science and Technology Institute",
            url: "https://basati.edu.bd",
        },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://basati.edu.bd",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Notices",
                    item: "https://basati.edu.bd/notices",
                },
            ],
        },
        mainEntity: {
            "@type": "CollectionPage",
            numberOfItems: await noticesMongo().length,
        },
    };
};

export const metadata = {
    title: "Basati Notices & Announcements | Latest Institute Updates",
    description:
        "Get the latest BASATI notices including academic announcements, exam schedules, holidays, and important institute updates. Stay informed about all BASATI notices and deadlines.",
    keywords: [
        "basati notices",
        "basati announcement",
        "basati academic notices",
        "basati institute updates",
        "basati exam schedule",
        "basati holiday schedule",
    ],
    openGraph: {
        title: "Basati Notices & Announcements | Latest Institute Updates",
        description:
            "Stay updated with the latest BASATI notices, academic announcements, holidays, and important institute updates.",
        url: "https://basati.edu.bd/notices",
        siteName: "BASATI - Badiul Alam Science and Technology Institute",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Basati Notices & Announcements | Latest Institute Updates",
        description:
            "Stay updated with the latest BASATI notices, academic announcements, and important updates.",
    },
    alternates: {
        canonical: "https://basati.edu.bd/notices",
    },
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Notice() {
    const structuredData = generateStructuredData();

    const noticesServer = await noticesMongo();
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <header className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Bell className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold dark:text-gray-100">
                            BASATI Notices & Announcements
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Access the latest <strong>BASATI notices</strong>{" "}
                        including academic announcements, exam schedules,
                        holidays, and important updates from Badiul Alam Science
                        and Technology Institute.
                    </p>
                </header>

                {/* Informational Section for SEO */}
                <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Welcome to the official <strong>BASATI notices</strong>{" "}
                        page, your central hub for all important announcements
                        from Badiul Alam Science and Technology Institute. Here
                        you'll find the latest <strong>BASATI notices</strong>
                        covering academic updates, exam schedules, holiday
                        information, departmental announcements, and
                        institutional news. Our <strong>
                            BASATI notices
                        </strong>{" "}
                        are regularly updated to keep students, faculty, and
                        staff informed about all critical information and
                        upcoming events at the institute.
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
                <section
                    aria-label="Latest BASATI Notices"
                    className="grid md:grid-cols-2 gap-6"
                >
                    {noticesServer.map((notice) => {
                        const Icon = getIconComponent(notice.icon);
                        const dateTime =
                            notice.date instanceof Date
                                ? notice.date.toLocaleDateString()
                                : notice.date;

                        // Derive Google Drive file id and filename from server data
                        const extractDriveIdFromUrl = (url) => {
                            try {
                                const u = new URL(url);
                                const idFromQuery = u.searchParams.get("id");
                                if (idFromQuery) return idFromQuery;
                                const match = url.match(/\/d\/([^/]+)/);
                                if (match) return match[1];
                            } catch (e) {
                                // fallback
                                const match = url && url.match(/[-\w]{25,}/);
                                return match ? match[0] : null;
                            }
                            return null;
                        };

                        const driveId = notice.driveLink
                            ? extractDriveIdFromUrl(notice.driveLink)
                            : null;

                        const filename =
                            `${notice.title}.pdf` ||
                            `notice-${notice._id || notice.id}.pdf`;
                        return (
                            <article
                                key={notice._id}
                                itemScope
                                itemType="https://schema.org/Announcement"
                            >
                                <div
                                    className={`dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow ${
                                        notice.urgent
                                            ? "border-l-4 border-l-red-500 dark:border-l-red-500"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {Icon ? (
                                                <Icon
                                                    className="w-6 h-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <span className="text-white text-2xl">
                                                    📌
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge
                                                    className={
                                                        typeColors[notice.type]
                                                    }
                                                    itemProp="category"
                                                >
                                                    {notice.type}
                                                </Badge>
                                                {notice.urgent && (
                                                    <Badge className="bg-red-100 text-red-700 border-red-200">
                                                        Urgent
                                                    </Badge>
                                                )}
                                            </div>
                                            <h2
                                                className="text-xl text-gray-900 dark:text-gray-100 mb-2"
                                                itemProp="headline"
                                            >
                                                {notice.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p
                                        className="text-gray-700 dark:text-gray-300 mb-4"
                                        itemProp="text"
                                    >
                                        {notice.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <Clock
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                            />
                                            <time
                                                dateTime={dateTime}
                                                itemProp="datePublished"
                                            >
                                                Posted on {dateTime}
                                            </time>
                                        </div>

                                        {driveId ? (
                                            <Button>
                                                <a
                                                    href={`/api/download?id=${encodeURIComponent(
                                                        driveId
                                                    )}&filename=${encodeURIComponent(
                                                        filename
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block"
                                                >
                                                    Download PDF
                                                </a>
                                            </Button>
                                        ) : null}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>

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
                            href="tel:+8801833878264"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            📞 +88018 3387 8264
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
