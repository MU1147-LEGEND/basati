import { facilities } from "../data/facilities";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Facilities() {
    return (
        <section id="facilities" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-orange-100 text-orange-700">
                        Campus Facilities
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                        World-Class Infrastructure
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our campus is equipped with modern facilities and
                        state-of-the-art laboratories to provide hands-on
                        learning experience.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility) => {
                        const Icon = facility.icon;
                        return (
                            <Card
                                key={facility.id}
                                className="p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 mb-2">
                                            {facility.name}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {facility.description}
                                </p>

                                <ul className="space-y-2">
                                    {facility.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-gray-600"
                                        >
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
