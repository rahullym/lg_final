import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden text-center">
            {/* Cinematic Background with strong overlay for readability */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg-premium.png"
                    alt="Blog Background"
                    className="w-full h-full object-cover opacity-20 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
            </div>

            {/* Glowing Focal Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-3 py-2 px-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 shadow-2xl">
                        Logistics Intelligence
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 font-heading leading-[1.1] tracking-tight">
                        Our <span className="text-blue-500">Blogs</span>
                    </h1>

                    <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />

                    <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Expert takes on the trends, technology, and operations shaping the future of global commerce.
                    </p>
                </motion.div>
            </div>

            {/* Soft bottom edge transition */}

        </section>
    );
}
