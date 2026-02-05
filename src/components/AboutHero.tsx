import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 bg-slate-950 overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/port-img-scaled.jpg"
                    alt="Dark Logistics Background"
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -mr-48" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -ml-36" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl">
                            <BoltIcon className="w-3.5 h-3.5" />
                            Our Journey
                        </span>

                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 font-heading leading-none tracking-tight">
                            About <span className="text-blue-500">Us</span>
                        </h1>

                        <div className="relative py-4 border-y border-blue-600/30 mb-10 max-w-2xl mx-auto text-center">
                            <p className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight">
                                We provide <span className="text-blue-400">Best Education</span> for logistics.
                            </p>
                        </div>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 mx-auto text-center">
                            Logistics Gurukul is where learning meets the real world of logistics. Founded and guided by industry professionals, we focus on preparing the next generation of leaders through practical, experience-driven education.
                        </p>

                        <div className="flex flex-wrap gap-8 items-center justify-center text-slate-300">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500">
                                    <AcademicCapIcon className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-sm">Industry Experts</span>
                            </div>
                            <div className="w-px h-8 bg-slate-800 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500">
                                    <BoltIcon className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-sm">Real-World Exposure</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-blue-600 to-transparent opacity-50" />
        </section>
    );
}
