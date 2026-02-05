import React from 'react';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon, BookOpenIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
    {
        title: "Learning Through Simulations",
        desc: "Gain practical skills through real-world case studies and interactive logistics simulations.",
        icon: <ComputerDesktopIcon className="w-8 h-8" />
    },
    {
        title: "Industry-Driven Curriculum",
        desc: "Learn with a curriculum designed in collaboration with logistics and shipping industry experts.",
        icon: <BookOpenIcon className="w-8 h-8" />
    },
    {
        title: "Onsite Internships",
        desc: "Experience real workplace exposure through internships with leading logistics and shipping companies.",
        icon: <BuildingOffice2Icon className="w-8 h-8" />
    },
    {
        title: "On-The-Job Training",
        desc: "Develop professional competence by working directly on live logistics and supply chain projects.",
        icon: <WrenchScrewdriverIcon className="w-8 h-8" />
    },
    {
        title: "Job Ready in 6 Months",
        desc: "Become fully job-ready in six months with intensive practical and industry-based learning.",
        icon: <ClockIcon className="w-8 h-8" />
    },
    {
        title: "Expert Mentors",
        desc: "Get guided by seasoned professionals with decades of real-world logistics experience.",
        icon: <UserGroupIcon className="w-8 h-8" />
    }
];

export default function SpecialitySection() {
    return (
        <section className="py-24 bg-slate-950 text-white relative">

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold tracking-widest mb-4">
                        WHAT WE PROVIDE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Speciality</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Bridging the gap between theory and practice with immersive, industry-focused training.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            className="bg-transparent border-t border-slate-800 p-6 hover:bg-slate-900/50 transition-colors duration-300"
                        >
                            <div className="mb-4 text-blue-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
