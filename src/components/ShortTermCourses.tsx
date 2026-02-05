import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const ShortCourses = [
    {
        title: "Diploma in Procurement & Management",
        description: "Master the art of storing, managing, and operating modern warehouses.",
        image: "/career_smart_warehouse.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Export-Import Management",
        description: "Build strong foundations in international trade, documentation, and compliance.",
        image: "/career_export_specialist.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Shipping Management",
        description: "Get practical knowledge of handling cargo, shipping lines, and port operations.",
        image: "/career_shipping_port.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Air Cargo Management",
        description: "Master the complexities of air freight, storage, and specialized cargo handling.",
        image: "/career_air_cargo.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Hazardous Substance Management",
        description: "Practical knowledge of handling DG (Dangerous Goods) and hazardous materials safely.",
        image: "/skill_hazardous_materials.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    }
];

export default function ShortTermCourses() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Short-Term Programs</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">Fast-track your expertise with our intensive 3-month specialization diplomas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {ShortCourses.map((course, i) => (
                        <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 shadow-lg border border-white uppercase">
                                    3 Months
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex flex-col gap-2 mb-8 pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <ClockIcon className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <AcademicCapIcon className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">{course.eligibility}</span>
                                    </div>
                                </div>

                                <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                                    Discover Program
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
