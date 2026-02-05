import React from 'react';
import { motion } from 'framer-motion';

export default function CenterHeadMessage() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48" />

                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">

                            {/* Portrait */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-2/5 flex-shrink-0"
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-white rounded-[2.5rem] -z-10 shadow-xl" />
                                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                        <img
                                            src="/1000268920-4.jpg"
                                            alt="Vineetha Kandangot"
                                            className="w-full h-full object-cover transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-transparent" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                                        <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1">Center Head</p>
                                        <p className="font-bold text-lg">Leading with Purpose</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Message content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-3/5"
                            >
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 font-heading">Center Head’s Message</h2>
                                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                                </div>

                                <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                                    <p className="text-2xl font-bold text-slate-900 font-heading leading-tight mb-8">
                                        "We believe every student has the potential to rise, lead, and make a mark in the logistics industry."
                                    </p>
                                    <p>
                                        Our mission is to transform that potential into power — through practical learning and real-world exposure. We prepare you not just for a job, but for a future of growth, confidence, and purpose.
                                    </p>
                                    <p className="font-medium">
                                        Together, let’s move forward — building careers that move the world.
                                    </p>
                                    <p className="text-slate-500 text-base">
                                        Every learner at Logistics Gurukul follows a clear career path — from classroom learning to internships and on-the-job training, leading to assured placements.
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-200">
                                    <p className="text-2xl font-bold text-slate-900 mb-1">Vineetha Kandangot</p>
                                    <p className="text-blue-600 font-bold tracking-widest text-sm uppercase">Center Head, Logistics Gurukul</p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
