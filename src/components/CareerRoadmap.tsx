import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const steps = [
    {
        id: "01",
        title: "Enroll & Train",
        desc: "Begin your journey with simulation-based logistics modules in our high-tech labs.",
        icon: <AcademicCapIcon className="w-6 h-6" />
    },
    {
        id: "02",
        title: "Industry Intern",
        desc: "Gain hands-on experience working live at airports, seaports, and cargo hubs.",
        icon: <BriefcaseIcon className="w-6 h-6" />
    },
    {
        id: "03",
        title: "Global Certification",
        desc: "Earn credentials recognized in 150+ countries, validating your expertise.",
        icon: <TrophyIcon className="w-6 h-6" />
    },
    {
        id: "04",
        title: "Get Hired",
        desc: "Secure high-paying roles with top MNCs and logistics giants worldwide.",
        icon: <RocketLaunchIcon className="w-6 h-6" />
    }
];

export default function CareerRoadmap() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                    {/* Left Sticky Header */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest mb-4 uppercase">
                            Career Roadmap
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6 leading-tight">
                            Your Path to <br />
                            <span className="text-blue-600">Success</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            We don't just teach modules; we architect careers. Follow our proven 4-step framework to go from novice to pro.
                        </p>

                        <button className="hidden lg:inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Start Application
                        </button>
                    </div>

                    {/* Right Scrolling Steps */}
                    <div className="lg:w-2/3 flex overflow-x-auto snap-x snap-mandatory lg:block gap-4 lg:gap-8 pb-8 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="min-w-[85vw] md:min-w-[320px] lg:min-w-0 snap-center lg:mb-8 group grid grid-cols-[auto_1fr] gap-6 md:gap-8 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Step Number Node */}
                                <div className="shrink-0 relative">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg md:text-2xl font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {step.id}
                                    </div>
                                    {/* Connector Line (except last) - Hidden on mobile */}
                                    {idx < steps.length - 1 && (
                                        <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100 -mb-6 md:-mb-8 hidden lg:block" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-1.5 rounded-lg bg-slate-50 text-slate-500 group-hover:text-blue-600 transition-colors">
                                            {React.cloneElement(step.icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6" })}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
