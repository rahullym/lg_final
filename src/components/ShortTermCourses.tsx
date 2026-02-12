import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const ShortCourses = [
    {
        title: "Diploma in Procurement and Inventory Management",
        description: "A short-term, skill-focused program designed to build strong fundamentals in procurement, purchasing, and inventory control. The course covers supplier selection, purchase documentation, stock planning, cost control, and warehousing basics. Students gain practical knowledge to reduce costs, avoid stock shortages, and support smooth business operations. Ideal for students and professionals seeking quick employability in supply chain functions.",
        image: "/career_smart_warehouse.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Export and Import Management",
        description: "A short-term course that introduces students to the basics of international trade. Learners will understand export–import procedures, trade documents, customs clearance, logistics, and payment methods. The program focuses on practical knowledge required to handle real export and import transactions. Ideal for students looking for quick skill development and job opportunities in global trade.",
        image: "/career_export_specialist.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Shipping Documentation",
        description: "A practical course focused on export–import and shipping documents. Learn to prepare commercial invoices, packing lists, bills of lading, and customs documents. Covers shipping procedures, Incoterms, and coordination with logistics partners. Ideal for students aiming for quick jobs in shipping and logistics offices.",
        image: "/career_shipping_port.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Air Cargo Management",
        description: "Learn the basics of air freight and airport cargo operations. Covers airway bills, cargo & customs basics. Focus on practical skills for air cargo handling and documentation. Ideal for students aiming for jobs in airports and air logistics.",
        image: "/career_air_cargo.png",
        duration: "3 Months",
        eligibility: "Bachelor Degree"
    },
    {
        title: "Diploma in Hazardous Goods Management",
        description: "Learn the safe handling and transport of hazardous materials. Covers hazard classification, labels, packing, and safety rules. Ideal for students aiming for safety-focused logistics careers.",
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
                        <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 shadow-lg border border-white uppercase">
                                    3 Months
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                                    {course.description}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
