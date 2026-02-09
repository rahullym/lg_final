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

                                <div className="space-y-8 text-slate-700 leading-relaxed text-base">
                                    {/* Intro */}
                                    <p>
                                        Vineetha Kadangot is an accomplished academic leader, trainer, and mentor with over a decade of
                                        experience in education, training, and curriculum development. As the Center Head of Logistics
                                        Gurukul, she plays a pivotal role in driving academic excellence, student success, and institutional
                                        growth. Known for her passion for teaching and people development, Vineetha brings a unique blend of
                                        academic depth, industry-aligned training expertise, and strong leadership skills. Her exposure to
                                        diverse learning environments in India and abroad enables her to create inclusive, engaging, and
                                        outcome-driven learning experiences.
                                    </p>

                                    {/* Professional Journey */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Journey</h3>
                                        <p>
                                            Vineetha has served as Academic Head and Senior Communicative English Trainer at reputed
                                            institutions, where she was responsible for designing innovative curricula, managing academic teams,
                                            and delivering high-impact training programs for students and working professionals. She has
                                            successfully led and mentored teams of trainers, ensuring quality delivery and consistent learner
                                            outcomes. Her experience also extends to corporate training, faculty development programmes, content
                                            creation, and academic video presentations, making her a strong advocate of modern, blended
                                            learning methodologies.
                                        </p>
                                    </div>

                                    {/* Expertise */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Academic & Training Expertise</h3>
                                        <ul className="list-disc pl-5 space-y-1 marker:text-blue-600">
                                            <li>Over 10 years of experience in teaching and training non-native English speakers</li>
                                            <li>Certified TEFL Trainer</li>
                                            <li>IELTS Masterclass – Train the Trainer (TTT) certification approved by Cambridge University</li>
                                            <li>Extensive experience in curriculum design, interview readiness, personality development, and communication skills</li>
                                            <li>Trainer for leading educational publishers, contributing to educator upskilling initiatives</li>
                                        </ul>
                                    </div>

                                    {/* Leadership Philosophy */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Leadership Philosophy</h3>
                                        <p className="mb-2">As a Center Head, Vineetha believes that education must go beyond textbooks. She emphasizes:</p>
                                        <ul className="list-disc pl-5 space-y-1 marker:text-blue-600 mb-2">
                                            <li>Practical skill development</li>
                                            <li>Confidence building and employability</li>
                                            <li>Student-centric learning approaches</li>
                                            <li>Continuous academic improvement aligned with industry expectations</li>
                                        </ul>
                                        <p>
                                            Her leadership style is collaborative and empathetic, fostering a culture of accountability, respect, and
                                            continuous learning within the institution.
                                        </p>
                                    </div>

                                    {/* At Logistics Gurukul */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">At Logistics Gurukul</h3>
                                        <p className="mb-2">At Logistics Gurukul, Vineetha leads academic operations with a clear focus on:</p>
                                        <ul className="list-disc pl-5 space-y-1 marker:text-blue-600 mb-2">
                                            <li>Delivering industry-relevant training</li>
                                            <li>Ensuring quality teaching standards</li>
                                            <li>Mentoring students for career readiness</li>
                                            <li>Supporting faculty growth and institutional excellence</li>
                                        </ul>
                                        <p>
                                            Her vision aligns strongly with Logistics Gurukul’s mission of creating job-ready logistics
                                            professionals equipped with the right skills, mindset, and confidence to succeed in the global supply
                                            chain industry.
                                        </p>
                                    </div>
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
