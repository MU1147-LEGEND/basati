"use client";
import { Button } from "./ui/button";
import { GraduationCap, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="hidden md:block">
                            <div className="text-foreground font-semibold">BASTI</div>
                            <div className="text-xs text-muted-foreground">
                                Science & Technology
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-foreground/70 hover:text-blue-600 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/notices"
                            className="transition-colors text-foreground/70 hover:text-blue-600"
                        >
                            Notice
                        </Link>
                        <a
                            href="#departments"
                            className="text-foreground/70 hover:text-blue-600 transition-colors"
                        >
                            Departments
                        </a>
                        <a
                            href="#faculty"
                            className="text-foreground/70 hover:text-blue-600 transition-colors"
                        >
                            Faculty
                        </a>
                        <a
                            href="#students"
                            className="text-foreground/70 hover:text-blue-600 transition-colors"
                        >
                            Students
                        </a>
                        <a
                            href="#community"
                            className="text-foreground/70 hover:text-blue-600 transition-colors"
                        >
                            Community
                        </a>
                    </div>

                    {/* CTA Button & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle />
                        <Button className="bg-blue-600 dark:text-white hover:bg-blue-700">
                            Apply Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-accent"
                        >
                            <Menu className="w-6 h-6 text-foreground" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#home"
                                className="text-foreground/70 hover:text-blue-600 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#departments"
                                className="text-foreground/70 hover:text-blue-600 transition-colors"
                            >
                                Departments
                            </a>
                            <a
                                href="#faculty"
                                className="text-foreground/70 hover:text-blue-600 transition-colors"
                            >
                                Faculty
                            </a>
                            <a
                                href="#students"
                                className="text-foreground/70 hover:text-blue-600 transition-colors"
                            >
                                Students
                            </a>
                            <a
                                href="#community"
                                className="text-foreground/70 hover:text-blue-600 transition-colors"
                            >
                                Community
                            </a>
                            <Button className="bg-blue-600 dark:text-white hover:bg-blue-700 w-full">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
