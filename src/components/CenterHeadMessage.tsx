import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen, Target, Briefcase, UserCheck, Lightbulb, Quote } from 'lucide-react';

export default function CenterHeadMessage() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. Header Section: Image & Bio */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    {/* Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[35%] flex-shrink-0 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-700 blur-sm" />
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/50">
                            <img
                                src="/1000268920-4.jpg"
                                alt="Vineetha Kandangot"
                                className="w-full aspect-[3/4] object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8 pb-10">
                                <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full" />
                                <h2 className="text-3xl font-bold text-white mb-1.5 font-heading">Vineetha Kandangot</h2>
                                <p className="text-blue-200 font-medium tracking-widest uppercase text-xs">Center Head – Logistics Gurukul</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio & Intro */}
                    <div className="w-full lg:w-[65%] pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                                <Target className="w-4 h-4" />
                                Academic Leader . Mentor . Visionary
                            </div>

                            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-heading leading-[1.1] tracking-tight">
                                Transform Potential into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Global Excellence.</span>
                            </h3>

                            <div className="prose prose-lg text-slate-600 leading-relaxed mb-10 max-w-none">
                                <p className="mb-6">
                                    "Education is not just about transferring knowledge; it's about igniting a passion for excellence."
                                </p>
                                <p className="text-base text-slate-500">
                                    Vineetha Kadangot is an accomplished academic leader with over a decade of experience in education, training, and curriculum development. As the Center Head of Logistics Gurukul, she blends academic depth with industry-aligned training to shape the next generation of logistics professionals.
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="mb-12 opacity-80">
                                <span className="font-handwriting text-3xl text-slate-400 font-bold italic">Vineetha K.</span>
                            </div>

                            {/* Quick Stats Grid - Enhanced */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { icon: <Briefcase className="w-5 h-5" />, label: "10+ Years", sub: "Experience" },
                                    { icon: <Award className="w-5 h-5" />, label: "Certified", sub: "TEFL Trainer" },
                                    { icon: <BookOpen className="w-5 h-5" />, label: "Cambridge", sub: "Approved TTT" },
                                    { icon: <Users className="w-5 h-5" />, label: "1000+", sub: "Students Mentored" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                                            {stat.icon}
                                        </div>
                                        <div className="font-bold text-slate-900 text-sm mb-1">{stat.label}</div>
                                        <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">{stat.sub}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Detailed Info Cards - Glassmorphism */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                    {/* Professional Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white/20 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full"
                    >
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                            <Briefcase className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4 font-heading">Professional Journey</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Vineetha has successfully led academic teams, designing innovative curricula for both students and corporate professionals. Her expertise spans:
                        </p>
                        <ul className="space-y-3">
                            {["Academic Head & Senior Trainer", "Curriculum Development", "Corporate Training Leader", "Faculty Mentorship"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium p-2 rounded-lg hover:bg-slate-50 transition-colors">
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
                        className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white/20 hover:shadow-xl hover:border-purple-200 transition-all duration-300 h-full"
                    >
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                            <GraduationCap className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4 font-heading">Core Expertise</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[
                                "Communicative English", "Train the Trainer", "Curriculum Design",
                                "Interview Skills", "Personality Dev", "Blended Learning"
                            ].map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-purple-100 rounded-bl-full -mr-6 -mt-6 group-hover:scale-150 transition-transform" />
                            <p className="text-xs text-purple-600 font-bold uppercase tracking-widest mb-1">Highlight Certification</p>
                            <p className="text-sm text-purple-900 font-bold flex gap-2 items-center relative z-10">
                                <UserCheck className="w-4 h-4 shrink-0" />
                                IELTS Masterclass TTT (Cambridge Approved)
                            </p>
                        </div>
                    </motion.div>

                    {/* Philosophy Feature Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-between h-full group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <div className="flex items-center gap-2 mb-4 text-blue-200">
                                <Quote className="w-4 h-4 rotate-180" />
                                <span className="text-xs font-bold uppercase tracking-widest">Leadership Philosophy</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-6 font-heading leading-tight">
                                "We don't just teach logistics; we build the confidence and character needed to lead it."
                            </h4>
                        </div>

                        <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                            <p className="text-blue-100 text-sm leading-relaxed font-medium">
                                Creating job-ready professionals equipped with the right skills, mindset, and confidence to succeed globally.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
