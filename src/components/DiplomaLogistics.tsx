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
} from '@heroicons/react/24/outline'; // Importing outline icons for features
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Solid icon for checklist

const features = [
    { name: "Globally Recognized Certification (STED Council)", icon: GlobeAltIcon },
    { name: "100% Placement Assistance", icon: BriefcaseIcon },
    { name: "Comprehensive Career Support", icon: CheckBadgeIcon },
];

const modules = [
    { name: "Interview Skills Training & Mock Interview", icon: ClipboardDocumentCheckIcon },
    { name: "Language Training (Hindi & English)", icon: LanguageIcon }, // Should use LanguageIcon if available or similar
    { name: "Cargo Packaging", icon: CubeIcon },
    { name: "Artificial Intelligence in Logistics", icon: CpuChipIcon },
    { name: "IT Training (Basic Excel, Word)", icon: ComputerDesktopIcon },
    { name: "Warehousing Management", icon: BuildingOffice2Icon }, // Using BuildingOffice
    { name: "Dangerous Goods Cargo Handling", icon: CubeIcon }, // Reusing Cube or finding specific hazard icon
];

export default function DiplomaLogistics() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 z-0 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -ml-24 -mb-24 z-0" />


            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-200">
                            Flagship Program
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-heading leading-tight">
                            Diploma in International <br />
                            <span className="text-blue-600">Logistics & Freight Management</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                            A comprehensive 1-year program designed to launch your global career in supply chain and logistics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Highlights Column (Left) */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Key Highlights Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />

                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                        <CheckBadgeIcon className="w-6 h-6" />
                                    </div>
                                    Key Highlights
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                                <feature.icon className="w-5 h-5" />
                                            </div>
                                            <p className="text-slate-700 font-bold text-sm leading-snug pt-2">{feature.name}</p>
                                        </div>
                                    ))}
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                                            <AcademicCapIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-indigo-900 font-bold text-xs uppercase tracking-wider mb-1">Eligibility</p>
                                            <p className="text-slate-700 font-bold text-sm leading-snug">Graduation / Post-Graduation (Any Industry)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Curriculum / Add-ons Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Value-Added Curriculum</h3>
                                <p className="text-slate-500 mb-8 max-w-2xl">Delivering industry-aligned training course designed to strengthen capabilities and support organizational excellence.</p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {modules.map((module, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 group-hover/item:scale-110 transition-transform" />
                                            <span className="text-slate-700 font-medium">{module.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar / CTA Column (Right) */}
                        <div className="lg:col-span-1 space-y-6">

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -ml-32 -mb-32" />

                                <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Start?</h3>
                                <p className="text-slate-300 mb-8 relative z-10 font-medium">
                                    Admissions are open for the next intake. Secure your spot in the Global Logistics industry today.
                                </p>

                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                    className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-lg active:scale-95 group relative z-10"
                                >
                                    <span>Apply Now</span>
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Course Details</p>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Duration</span>
                                            <span className="font-bold">1 Year</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Mode</span>
                                            <span className="font-bold">Offline / Campus</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Certif.</span>
                                            <span className="font-bold text-blue-400">STED Council</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Helper */}
                            <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <BriefcaseIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-blue-900 font-bold text-sm">Need Help?</p>
                                    <p className="text-blue-700 text-xs">Contact our career counselors for course guidance.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
