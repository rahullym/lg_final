import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
        title: "Product Training",
        desc: "Master specific cargo types and handling procedures through specialized on-the-job training modules.",
        icon: <BriefcaseIcon className="w-6 h-6" />
    },
    {
        id: "04",
        title: "Global Certification",
        desc: "Earn credentials recognized in 150+ countries, validating your expertise.",
        icon: <TrophyIcon className="w-6 h-6" />
    },
    {
        id: "05",
        title: "Get Hired",
        desc: "Secure high-paying roles with top MNCs and logistics giants worldwide.",
        icon: <RocketLaunchIcon className="w-6 h-6" />
    }
];

const RoadmapStep = ({ step, index }: { step: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform opacity and scale based on scroll position to create a focus effect
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, -20]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, x }}
            className="group flex flex-col md:flex-row gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        >
            {/* Step Number Node */}
            <div className="shrink-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                </div>
                {/* Connector Line (visual only, not functional for layout) */}
                {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-50 -z-10 mt-2 hidden md:block opacity-50" />
                )}
            </div>

            {/* Content */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-slate-50 text-slate-500 group-hover:text-blue-600 transition-colors">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-lg">
                    {step.desc}
                </p>
            </div>

            {/* Hover Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Active Indication Border */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]) }}
                className="absolute inset-0 border-2 border-blue-500/50 rounded-3xl pointer-events-none"
            />
        </motion.div>
    );
};

export default function CareerRoadmap() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                    {/* Left Sticky Header */}
                    <div className="lg:w-1/3 mb-12 lg:mb-0">
                        <div className="lg:sticky lg:top-32">
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

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                className="hidden lg:inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Start Application
                            </button>
                        </div>
                    </div>

                    {/* Right Scrolling Steps */}
                    <div className="lg:w-2/3 flex flex-col gap-24 py-12">
                        {steps.map((step, idx) => (
                            <RoadmapStep key={idx} step={step} index={idx} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
