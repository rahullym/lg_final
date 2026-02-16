import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, AcademicCapIcon, BriefcaseIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function FeaturedCourse() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="relative group">
                        {/* Background glow effects */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                        <div className="relative bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                            {/* Left Content Column */}
                            <div className="flex-1 p-8 md:p-16 relative">
                                <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
                                    <StarIcon className="w-3.5 h-3.5" />
                                    Flagship Course
                                </div>

                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-heading leading-tight">
                                    Diploma in International <br />
                                    <span className="text-blue-600">Logistics & Freight Management</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                <CheckBadgeIcon className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">Duration: 1 Year</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500">
                                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                                <AcademicCapIcon className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm font-medium">Eligibility: +2 (t&c apply)</span>
                                        </div>
                                    </div>


                                </div>

                                <div className="space-y-4 mb-12">
                                    {[
                                        "Globally Recognized Certification",
                                        "Comprehensive Career Support",
                                        "Industry-Expert Led Training"
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            <p className="text-slate-600 font-medium leading-tight">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                        className="px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-brand-blue/30 group active:scale-95"
                                    >
                                        <span>Book Your Session</span>
                                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <a
                                        href="/diploma-international-logistics"
                                        className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 border border-slate-200 transition-all shadow-sm active:scale-95 group"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-blue-600" />
                                    </a>
                                </div>
                            </div>

                            {/* Right Image/Design Column */}
                            <div className="w-full lg:w-2/5 min-h-[400px] relative bg-slate-50 border-l border-slate-100 p-8 lg:p-0">
                                <img
                                    src="/career_shipping_port.png"
                                    alt="International Logistics"
                                    className="w-full h-full object-cover lg:absolute inset-0 transition-all duration-1000 opacity-90 hover:opacity-100"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-10 left-10 right-10 z-10">
                                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                        <p className="text-white font-bold text-sm mb-1 uppercase tracking-widest opacity-80">Global Standard</p>
                                        <p className="text-white text-xl font-bold font-heading">The most sought-after diploma in Kerala's logistics industry.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
