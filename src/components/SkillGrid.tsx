import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckBadgeIcon, GlobeAltIcon, CubeIcon, CpuChipIcon, ComputerDesktopIcon, BuildingStorefrontIcon, FireIcon } from '@heroicons/react/24/outline';

const skills = [
    {
        image: "/skill_career_architecture.png",
        title: "Interview Skills & Placement",
        desc: "Resume building, mock interviews, and confidence coaching.",
        category: "Placement",
        icon: <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
    },
    {
        image: "/skill_business_english.png",
        title: "Language Training",
        desc: "Business English & Hindi fluency for operations.",
        category: "Communication",
        icon: <GlobeAltIcon className="w-5 h-5 text-indigo-600" />
    },
    {
        image: "/skill_logistics_lab.png",
        title: "Cargo Packaging",
        desc: "Packaging techniques, palletization & load securing.",
        category: "Practical",
        icon: <CubeIcon className="w-5 h-5 text-violet-600" />
    },
    {
        image: "/skill_ai_automation.png",
        title: "Artificial Intelligence",
        desc: "AI for route optimization & demand forecasting.",
        category: "Innovation",
        icon: <CpuChipIcon className="w-5 h-5 text-purple-600" />
    },
    {
        image: "/skill_digital_ops.png",
        title: "IT Operations",
        desc: "Advanced Excel, Word, and digital documentation.",
        category: "Digital",
        icon: <ComputerDesktopIcon className="w-5 h-5 text-emerald-600" />
    },
    {
        image: "/career_smart_warehouse.png",
        title: "Advanced Warehousing",
        desc: "Inventory control, storage layout & WMS software.",
        category: "Operations",
        icon: <BuildingStorefrontIcon className="w-5 h-5 text-orange-600" />
    },
    {
        image: "/skill_hazardous_materials.png",
        title: "Dangerous Goods",
        desc: "Certified handling of hazardous materials (DGR).",
        category: "Safety",
        icon: <FireIcon className="w-5 h-5 text-red-600" />
    }
];

export default function SkillGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest mb-4">
                        CURRICULUM HIGHLIGHTS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">
                        Skills You Will <span className="text-blue-600">Master</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
                        A comprehensive toolkit of technical expertise and soft skills designed to make you a global logistics leader.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-0">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="h-32 md:h-48 overflow-hidden relative">
                                <img
                                    src={skill.image}
                                    alt={skill.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                                    <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/90 backdrop-blur rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6 flex flex-col flex-1">
                                <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {skill.title}
                                </h3>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-0 md:mb-4 flex-1 line-clamp-3 md:line-clamp-none">
                                    {skill.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* 8th 'Join Us' Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                        className="bg-slate-900 rounded-2xl p-4 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
                            <p className="text-slate-400 text-sm mb-6">Talk to an expert now.</p>
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50">
                                <ArrowRightIcon className="w-6 h-6" />
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
