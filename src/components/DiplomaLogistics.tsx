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
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/career_shipping_port.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100">
                            Flagship Program
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading leading-tight tracking-tight">
                            Diploma in International <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Logistics & Freight Management
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                            Launch your global career with our comprehensive 1-year program. Designed for graduates and post-graduates seeking excellence in supply chain and logistics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full shadow-xl shadow-blue-500/20 hover:-translate-y-1 transition-transform flex items-center justify-center gap-2"
                            >
                                Apply Now <ArrowRightIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform border border-slate-100"
                            >
                                View Curriculum
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="py-20 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-10 blur-xl transform rotate-3"></div>
                            <img
                                src="/man-logistics.jpg"
                                alt="Student Learning"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            />
                            {/* Floating Qualification Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircleIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Eligibility</p>
                                        <p className="text-xs text-slate-500">Graduation / Post-Graduation</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 leading-snug">Open to candidates from any stream looking to switch to a high-growth career.</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose This Diploma?</h2>
                                <p className="text-slate-500 text-lg">
                                    Our program is meticulously crafted to bridge the gap between academic knowledge and industry requirements, ensuring you are job-ready from day one.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">{feature.name}</h3>
                                            <p className="text-slate-500 text-sm">Industry standard curriculum.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curriculum Grid */}
            <div id="curriculum" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Value-Added Curriculum</h2>
                        <p className="text-lg text-slate-500">
                            Beyond the core logistics modules, we equip you with essential skills that employers value most.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all mb-4">
                                    <module.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">{module.name}</h3>
                            </div>
                        ))}
                        {/* Last card as CTA to fill grid */}
                        <div className="p-6 rounded-2xl bg-brand-blue text-white flex flex-col justify-center items-center text-center">
                            <h3 className="font-bold text-xl mb-2">And much more...</h3>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                className="text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                            >
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="py-20 bg-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Shape Global Trade?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Join the next intake of future logistics leaders. Limited seats available for the upcoming batch.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Book Free Counselling
                        </button>
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                            <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            <span>Admissions Open</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
