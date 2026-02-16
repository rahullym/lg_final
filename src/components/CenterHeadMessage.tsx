import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Quote } from 'lucide-react';

export default function CenterHeadMessage() {
    return (
        <section id="center-head" className="py-16 md:py-24 bg-white scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Image & Personal Touch */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
                                <img
                                    src="/faculty-images/vineetha-maam.png"
                                    alt="Vineetha Kandangot"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-full -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-50 rounded-full -z-10" />
                        </motion.div>
                    </div>

                    {/* Right Column: Narrative Content */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Center Head</h4>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading leading-tight">Vineetha Kandangot</h2>
                            <p className="text-lg md:text-xl text-slate-500 mb-8 font-medium leading-relaxed">Leading Academic Excellence & Institutional Growth</p>

                            <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                                <p className="mb-6">
                                    Vineetha Kadangot is an accomplished academic leader, trainer, and mentor with over a decade of experience in education, training, and curriculum development. As the Center Head of Logistics Gurukul, she plays a pivotal role in driving academic excellence and student success.
                                </p>
                                <p>
                                    Beginning her journey as a Communicative English Trainer, Vineetha has evolved into a strategic leader who designs innovative curricula and manages high-impact training programs. Her unique blend of academic depth and industry-aligned expertise ensures that every student receives an inclusive and outcome-driven learning experience.
                                </p>
                            </div>

                            {/* Expertise List - Clean & Simple */}
                            <div className="bg-slate-50/50 rounded-3xl p-6 md:p-10 mb-10 border border-slate-100">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6">Core Expertise & Credentials</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "10+ Years in Education & Training",
                                        "Certified TEFL Trainer",
                                        "Cambridge Accredited IELTS Trainer",
                                        "Curriculum Development Expert",
                                        "Faculty Development Mentor",
                                        "Corporate Communication Training Specialist"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                            <span className="text-slate-700 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Philosophy Quote */}
                            <div className="relative pl-8 border-l-4 border-blue-600">
                                <Quote className="absolute top-0 left-8 -translate-x-full -ml-4 w-8 h-8 text-blue-100 -z-10" />
                                <p className="text-lg md:text-xl font-medium text-slate-800 italic mb-2">
                                    "We believe every student has the potential to rise. Our mission is to transform that potential into power through practical learning, preparing you for a future of growth, confidence, and purpose."
                                </p>

                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
