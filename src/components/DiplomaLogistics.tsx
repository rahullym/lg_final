import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckBadgeIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    GlobeAltIcon,
    ArrowRightIcon,
    ClipboardDocumentCheckIcon,
    LanguageIcon,
    CubeIcon,
    CpuChipIcon,
    ComputerDesktopIcon,
    BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
    { name: "Globally Recognized Certification (STED Council)", icon: GlobeAltIcon },
    { name: "100% Placement Assistance", icon: BriefcaseIcon },
    { name: "Comprehensive Career Support", icon: CheckBadgeIcon },
];

const modules = [
    { name: "Interview Skills Training & Mock Interview", icon: ClipboardDocumentCheckIcon },
    { name: "Language Training (Hindi & English)", icon: LanguageIcon },
    { name: "Cargo Packaging", icon: CubeIcon },
    { name: "Artificial Intelligence in Logistics", icon: CpuChipIcon },
    { name: "IT Training (Basic Excel, Word)", icon: ComputerDesktopIcon },
    { name: "Warehousing Management", icon: BuildingOffice2Icon },
    { name: "Dangerous Goods Cargo Handling", icon: CubeIcon },
];

export default function DiplomaLogistics() {
    return (
        <section className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/diploma-hero-bg.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold tracking-widest uppercase mb-6">
                        Flagship Program
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
                        Diploma in International <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            Logistics & Freight Management
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                        Launch your global career with our comprehensive 1-year program. Designed for graduates and post-graduates seeking excellence in supply chain and logistics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                            className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                        >
                            Apply Now <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/logistics_diploma_student.png"
                                alt="Student Learning"
                                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                            />
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose This Diploma?</h2>
                                <p className="text-slate-600 text-lg">
                                    Our program is meticulously crafted to bridge the gap between academic knowledge and industry requirements, ensuring you are job-ready from day one.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shrink-0 border border-slate-200">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 text-base">{feature.name}</h3>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 shrink-0 border border-slate-200">
                                        <CheckCircleIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-base">Eligibility: Graduation / Post-Graduation</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curriculum Grid */}
            <div id="curriculum" className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Value-Added Curriculum</h2>
                        <p className="text-lg text-slate-600">
                            Essential skills that employers value most, integrated into your learning.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((module, i) => (
                            <div key={i} className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <module.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-medium text-slate-900">{module.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Career?</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                        Admissions are open. Secure your spot in the Global Logistics industry today.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                            className="px-10 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
                        >
                            Book Free Counselling
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
