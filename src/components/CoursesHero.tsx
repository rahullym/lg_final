import React from 'react';
import { motion } from 'framer-motion';

export default function CoursesHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden text-center">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg-premium.png"
                    alt="Education Background"
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl">
                        Industry-Lead Programs
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-8 font-heading leading-tight tracking-tight">
                        Power Your <span className="text-blue-500">Logistics Career</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Master the complexities of global trade with our specialized diploma programs designed by industry experts.
                    </p>
                </motion.div>
            </div>

            {/* Soft divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </section>
    );
}
