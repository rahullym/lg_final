import React from 'react';
import { motion } from 'framer-motion';

export default function AboutStory() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Architecture Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-1 bg-blue-600 rounded-full" />
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Narrative</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-heading leading-tight">
                            The Story Behind <br />
                            <span className="text-blue-600">Our Success</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p className="font-semibold text-slate-900 border-l-4 border-blue-600 pl-6 py-1">
                                Logistics Gurukul is where learning meets the real world of logistics. Founded and guided by industry professionals, we focus on preparing the next generation of leaders.
                            </p>
                            <p>
                                Every learner at Logistics Gurukul follows a clear career path from classroom learning to internships and on-the-job training, leading to assured placements with reputed logistics firms. Our curriculum is further strengthened by our collaboration with Alive Academy. They have been Successfully training students for more than a decade in various sectors and we are proud to have them as our official certification partner to provide industry-recognized credentials.
                            </p>
                            <p>
                                We believe logistics isn’t just a subject it’s the heartbeat of global trade. That’s why our programs are built around real operations, live projects, and simulation-based training.
                            </p>
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 font-medium text-slate-800 shadow-sm relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[4rem] -z-0 transition-all group-hover:scale-110" />
                                <p className="relative z-10 leading-relaxed italic">
                                    "More than just education, we offer transformation helping students grow into confident, job-ready professionals who can lead in the ever-evolving logistics industry."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
                            <img
                                src="/skill_logistics_lab.png"
                                alt="Practical Logistics Training"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-blue-600/5 rounded-3xl -z-0 rotate-3" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20" />

                        {/* Status Badge overlay */}
                        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-slate-100 hidden md:block group">
                            <p className="text-blue-600 font-bold text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">100%</p>
                            <p className="text-slate-900 font-bold text-sm mb-1 uppercase tracking-wider">Practical Focus</p>
                            <p className="text-slate-500 text-xs">Real-world logistics operations from day one.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
