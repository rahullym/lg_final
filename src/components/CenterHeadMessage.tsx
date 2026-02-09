import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen, Target, Briefcase, UserCheck, Lightbulb } from 'lucide-react';

export default function CenterHeadMessage() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. Header Section: Image & Bio */}
                <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
                    {/* Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 flex-shrink-0"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                            <div className="relative bg-white p-2 rounded-[2rem] shadow-xl overflow-hidden">
                                <img
                                    src="/1000268920-4.jpg"
                                    alt="Vineetha Kandangot"
                                    className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-20">
                                    <h2 className="text-2xl font-bold text-white mb-1">Vineetha Kandangot</h2>
                                    <p className="text-blue-300 font-medium tracking-wide uppercase text-xs">Center Head – Logistics Gurukul</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio & Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Target className="w-4 h-4" />
                            Academic Leader & Mentor
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
                            Driving Excellence in <br />
                            <span className="text-blue-600">Logistics Education</span>
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Vineetha Kadangot is an accomplished academic leader with over a decade of experience in education, training, and curriculum development. As the Center Head of Logistics Gurukul, she plays a pivotal role in shaping student success and institutional growth.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Known for her passion for people development, she blends academic depth with industry-aligned training. Her exposure to diverse learning environments enables her to create inclusive, outcome-driven learning experiences.
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: <Briefcase className="w-5 h-5" />, label: "10+ Years", sub: "Experience" },
                                { icon: <Award className="w-5 h-5" />, label: "Certified", sub: "TEFL Trainer" },
                                { icon: <BookOpen className="w-5 h-5" />, label: "IELTS", sub: "Masterclass" },
                                { icon: <Users className="w-5 h-5" />, label: "Mentor", sub: "For 1000+" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition-colors">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                                        {stat.icon}
                                    </div>
                                    <div className="font-bold text-slate-900 text-sm">{stat.label}</div>
                                    <div className="text-slate-500 text-xs">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 2. Detailed Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Professional Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">Professional Journey</h4>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Vineetha has served as Academic Head and Senior Communicative English Trainer at reputed institutions. She has successfully led teams, designed innovative curricula, and delivered high-impact training for both students and corporate professionals.
                        </p>
                        <ul className="space-y-3">
                            {["Acadmic Head & Senior Trainer roles", "Curriculum Development Expert", "Corporate Training Leader", "Faculty Development Mentor"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Expertise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">Core Expertise</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Communicative English", "Non-native Speaker Training", "Curriculum Design",
                                "Interview Readiness", "Personality Development", "Blended Learning",
                                "Faculty Upskilling"
                            ].map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                            <p className="text-sm text-purple-800 font-medium flex gap-2">
                                <UserCheck className="w-5 h-5 shrink-0" />
                                Certified IELTS Masterclass TTT (Cambridge University Approved)
                            </p>
                        </div>
                    </motion.div>

                    {/* Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6 text-blue-200">
                                    <Lightbulb className="w-6 h-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Leadership Philosophy</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                                    "Education must go beyond textbooks. We build confidence, character, and careers."
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full" /> Practical Skill Development
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full" /> Employability Focus
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full" /> Student-Centric Approach
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full" /> Industry Alignment
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-px md:h-32 bg-white/20" />

                            <div className="md:w-1/3">
                                <h5 className="font-bold text-lg mb-2">Vision at Logistics Gurukul</h5>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    Creating job-ready professionals equipped with the right skills, mindset, and confidence to succeed in the global supply chain industry.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
