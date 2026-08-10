import React from 'react';
import { motion } from 'framer-motion';
import AdvisoryBoard from './AdvisoryBoard';
import FacultyTeam from './FacultyTeam';

export default function TutorsPage() {
    return (
        <section className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <div className="pt-32 pb-20 lg:pt-56 lg:pb-40 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase">
                            Logistics Gurukul
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-heading">
                            Our <span className="text-blue-500">Team</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            The leadership and faculty behind Logistics Gurukul — industry veterans who have shaped logistics operations globally, and the trainers who bring that experience into the classroom.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Section 1 — Advisory Board Members */}
            <AdvisoryBoard />

            {/* Section 2 — Faculty Team */}
            <FacultyTeam />
        </section>
    );
}
