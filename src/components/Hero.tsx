import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon, CheckCircleIcon, BookOpenIcon, BuildingOfficeIcon, CubeIcon, BriefcaseIcon, ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#050505] flex items-start overflow-hidden font-sans selection:bg-blue-500/30 pt-32 md:pt-40 lg:pt-44">

            {/* 1. Dynamic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/port-img-scaled.jpg"
                    alt="Container Port Background"
                    className="w-full h-full object-cover opacity-70 select-none"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: Value Proposition */}
                <div className="max-w-2xl relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                        </span>
                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">1-Year Program • 6-Month Paid Training</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-[42px] md:text-[54px] lg:text-[68px] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
                    >
                        Kerala’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white whitespace-nowrap">First-of-Its-Kind</span> <br />
                        Immersive Logistics Training Program
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        className="mb-10 pl-6 border-l-2 border-blue-500"
                    >
                        <p className="text-gray-300 text-lg">
                            Less Theory. More Practice. Paid On-the-Job Training.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col lg:flex-row flex-wrap gap-4 w-full lg:w-auto"
                    >
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                            className="h-14 w-full lg:w-auto px-8 rounded-full bg-brand-blue text-white font-bold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,74,173,0.3)] flex items-center justify-center gap-2"
                        >
                            Talk to an expert <ArrowRightIcon className="w-5 h-5" />
                        </button>
                        <a href="/diploma-international-logistics" className="h-14 w-full lg:w-auto px-8 rounded-full border border-slate-700 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
                            Learn More
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT: Generated HERO IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[550px] w-full hidden lg:flex items-center justify-center"
                >
                    {/* The Generated Visual */}
                    <div className="relative w-full h-[550px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-[150px] rounded-full mix-blend-screen" />
                        <img
                            src="/hero-logistics.png"
                            alt="Future of Logistics"
                            className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)] hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Decorative Elements */}
                    {/* Floating Info Cards around the globe */}

                    {/* Floating Info Cards around the globe */}

                    {/* Top Left - Classroom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="absolute top-16 left-4 group"
                    >
                        <div className="px-4 py-3 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-400 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1">
                                <BookOpenIcon className="w-4 h-4 text-blue-400" />
                                <div className="text-white font-bold text-sm">4 Months</div>
                            </div>
                            <div className="text-blue-100/90 text-xs font-medium">Classroom Training</div>
                        </div>
                    </motion.div>

                    {/* Top Right - Internship */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        className="absolute top-28 -right-4 group"
                    >
                        <div className="px-4 py-3 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:border-cyan-400 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1">
                                <BuildingOfficeIcon className="w-4 h-4 text-cyan-400" />
                                <div className="text-white font-bold text-sm">1 Month</div>
                            </div>
                            <div className="text-cyan-100/90 text-xs font-medium">Internship</div>
                        </div>
                    </motion.div>

                    {/* Bottom Left - Product Training */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                        className="absolute bottom-24 left-4 group"
                    >
                        <div className="px-4 py-3 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:border-purple-400 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1">
                                <CubeIcon className="w-4 h-4 text-purple-400" />
                                <div className="text-white font-bold text-sm">1 Month</div>
                            </div>
                            <div className="text-purple-100/90 text-xs font-medium">Product Training</div>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Paid Job */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                        className="absolute bottom-12 -right-4 group"
                    >
                        <div className="px-4 py-3 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:border-green-400 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1">
                                <BriefcaseIcon className="w-4 h-4 text-green-400" />
                                <div className="text-white font-bold text-sm">6 Months</div>
                            </div>
                            <div className="text-green-100/90 text-xs font-medium">Paid On-Job Training</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Redesigned Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="relative flex flex-col items-center">
                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-4 group-hover:text-white/70 transition-colors">
                        Explore
                    </span>
                    <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                        <motion.div
                            animate={{
                                y: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
