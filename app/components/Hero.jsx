import { Button } from "./ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
    return (
        <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src="basati-gate.webp"
                    alt="Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-blue-800/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                    <GraduationCap className="w-5 h-5 text-yellow-400" />
                    <span className="text-white/90">Established 2010</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto">
                    Badiul Alam Science and Technology Institute
                </h1>

                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Empowering the next generation of engineers and
                    technologists through excellence in education, innovation,
                    and practical skills development.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 gap-2"
                    >
                        Explore Programs
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-black hover:text-white hover:bg-white/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-black dark:hover:bg-gray-300"
                    >
                        Contact Admissions
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-16 max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700">
                        <div className="text-4xl text-yellow-400 mb-2">3</div>
                        <div className="text-white/90 text-center">
                            Departments
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <div className="text-4xl text-yellow-400 mb-2">
                            150+
                        </div>
                        <div className="text-white/90">Active Students</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <div className="text-4xl text-yellow-400 mb-2">15+</div>
                        <div className="text-white/90">Years of Excellence</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
