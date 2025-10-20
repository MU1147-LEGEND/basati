"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            variant="ghost"
            size="icon"
            // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            // className="w-9 h-9 rounded-lg"
            aria-label="Toggle theme"
        >
            <div className="flex items-center justify-around rounded-lg transition-all duration-300 bg-gray-300 dark:bg-gray-800 text-gray-200">
                <span
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center gap-2 p-2 group rounded-lg transition-all duration-300 ${
                        theme === "light" ? "bg-blue-600/85" : ""
                    }`}
                >
                    <Sun
                        className={`h-5 w-5 transition-all duration-300 group-hover:rotate-180`}
                    />
                    <span className="">Light</span>
                </span>

                <span
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center gap-2 p-2 group rounded-lg transition-all duration-300 ${
                        theme === "dark" ? "bg-blue-600/85" : ""
                    }`}
                >
                    <Moon
                        className={`h-5 w-5 transition-all duration-300 group-hover:rotate-360 ${
                            theme === "dark" ? "text-gray-200" : "text-gray-800"
                        } `}
                    />
                    <span
                        className={`${
                            theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                        Dark
                    </span>
                </span>
            </div>
        </button>
    );
}
