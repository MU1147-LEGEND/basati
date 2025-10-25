"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <style jsx>{`
                .robot {
                    animation: float 3s ease-in-out infinite;
                }
                .shadow {
                    animation: shrink 3s ease-in-out infinite;
                    transform-origin: center center;
                }
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                @keyframes shrink {
                    0%,
                    100% {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(0.85);
                        opacity: 0.4;
                    }
                }
            `}</style>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
                <div className="mb-8">
                    <div className="robot">
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Robot Body */}
                            <rect
                                x="60"
                                y="80"
                                width="80"
                                height="70"
                                rx="15"
                                fill="#A5B4FC"
                            />
                            {/* Robot Head */}
                            <rect
                                x="50"
                                y="40"
                                width="100"
                                height="50"
                                rx="25"
                                fill="#C7D2FE"
                            />
                            {/* Eyes */}
                            <circle cx="80" cy="65" r="8" fill="#4338CA" />
                            <circle cx="120" cy="65" r="8" fill="#4338CA" />
                            {/* Antenna */}
                            <line
                                x1="100"
                                y1="40"
                                x2="100"
                                y2="20"
                                stroke="#6366F1"
                                strokeWidth="4"
                            />
                            <circle
                                cx="100"
                                cy="15"
                                r="7"
                                fill="#F87171"
                                stroke="#DC2626"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <div
                        className="shadow"
                        style={{
                            width: "120px",
                            height: "12px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            margin: "0 auto",
                            marginTop: "20px",
                        }}
                    ></div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    404
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                    Oops! The page you are looking for seems to have floated
                    away.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </>
    );
}
