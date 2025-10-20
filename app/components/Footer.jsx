import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white">
                                    Polytechnic Institute
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Empowering students through quality technical
                            education and practical skills development since
                            2010.
                        </p>
                        <div className="flex gap-3">
                            <Link
                                target="_blank"
                                href="https://www.facebook.com/profile.php?id=100067697406685"
                                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Youtube className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#departments"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Departments
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faculty"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Faculty
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#admissions"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Admissions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#facilities"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Facilities
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h4 className="mb-4">Our Departments</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#departments"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Computer Science
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#departments"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Civil Technology
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#departments"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Electrical Technology
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400">
                                    123 Education Road
                                    <br />
                                    Dhaka 1200, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a
                                    href="tel:+8801234567890"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    +880 1234 567890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@polytechnic.edu"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    info@polytechnic.edu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 Polytechnic Institute. All rights reserved.
                        </p>
                        <div className="flex gap-6 items-center">
                            <span>
                                <ThemeToggle />
                            </span>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
