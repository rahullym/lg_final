import React from 'react';
import { motion } from 'framer-motion';

export default function CertificationHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden text-center">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg-premium.png"
                    alt="Certification Background"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-3 py-2 px-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 shadow-2xl backdrop-blur-md">
                        Gold Standard
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-heading leading-[1.1] tracking-tight">
                        Global <span className="text-yellow-500">Certification</span>
                    </h1>

                    <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]" />

                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                        Your passport to a global career. Earn credentials recognized by the Government of India and accredited in 150+ countries.
                    </p>


                </motion.div>
            </div>

            {/* Soft bottom edge transition not needed as next section is light */}
        </section>
    );
}
