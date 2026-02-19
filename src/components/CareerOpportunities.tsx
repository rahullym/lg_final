import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, TrendingUp, Globe, Star, ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';

const careerLevels = [
    {
        id: "junior",
        label: "Junior Roles",
        sub: "Entry Level",
        color: "from-blue-500 to-cyan-400",
        image: "/career_bg_junior.png",
        roles: [
            {
                role: "Business Development Executive",
                image: "/career_business_meeting.png",
                description: "Drive growth through strategic client partnerships."
            },
            {
                role: "Operation Executive",
                image: "/career_logistics_ops.png",
                description: "Coordinate smooth daily logistics workflows."
            },
            {
                role: "Customer Service Executive",
                image: "/career_customer_service.png",
                description: "Resolve client queries with efficiency."
            }
        ]
    },
    {
        id: "mid",
        label: "Mid-Senior",
        sub: "Managerial",
        color: "from-emerald-500 to-teal-400",
        image: "/career_smart_warehouse.png",
        roles: [
            {
                role: "Warehouse Manager",
                image: "/career_smart_warehouse.png",
                description: "Optimize inventory and storage operations."
            },
            {
                role: "Business Development Manager",
                image: "/career_business_meeting.png",
                description: "Lead regional sales and market expansion."
            }
        ]
    },
    {
        id: "senior",
        label: "Senior Level",
        sub: "Strategic",
        color: "from-purple-500 to-pink-400",
        image: "/career_air_cargo.png",
        roles: [
            {
                role: "Commercial Head",
                image: "/career_shipping_port.png",
                description: "Drive revenue strategies and market share."
            },
            {
                role: "Regional Head (Operations)",
                image: "/career_air_cargo.png",
                description: "Oversee multi-site operational excellence."
            }
        ]
    },
    {
        id: "leadership",
        label: "Leadership",
        sub: "Executive",
        color: "from-amber-500 to-orange-400",
        image: "/career_shipping_port.png",
        roles: [
            {
                role: "Entrepreneur",
                image: "/career_logistics_ops.png",
                description: "Launch and scale your logistics venture."
            },
            {
                role: "CEO",
                image: "/career_business_meeting.png",
                description: "Visionary leadership for global impact."
            },
            {
                role: "COO",
                image: "/career_smart_warehouse.png",
                description: "Execute streamlined operational strategies."
            },
            {
                role: "Director",
                image: "/career_shipping_port.png",
                description: "Strategic governance and high-level decision making."
            }
        ]
    }
];

export default function CareerOpportunities() {
    const [activeId, setActiveId] = useState("junior");

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = careerLevels.findIndex(l => l.id === activeId);
            const nextIndex = (currentIndex + 1) % careerLevels.length;
            setActiveId(careerLevels[nextIndex].id);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeId]);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 shrink-0">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Success Roadmap
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white font-heading leading-tight mb-4"
                    >
                        Where our Courses <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Take You</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        From entry-level roles to executive leadership, explore your future in logistics.
                    </motion.p>
                </div>

                {/* Expandable Deck - The Focus */}
                <div className="flex flex-col lg:flex-row gap-4 h-[500px] w-full max-w-7xl mx-auto">
                    {careerLevels.map((level) => {
                        const isActive = activeId === level.id;

                        return (
                            <motion.div
                                key={level.id}
                                onClick={() => setActiveId(level.id)}
                                onHoverStart={() => setActiveId(level.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer border border-slate-800 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group ${isActive ? 'lg:flex-[3] flex-[3] shadow-2xl shadow-blue-900/20' : 'lg:flex-[1] flex-[1]'}`}
                            >
                                {/* Progress Loader */}
                                {isActive && (
                                    <motion.div
                                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 z-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, ease: "linear" }}
                                    />
                                )}

                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={level.image}
                                        alt={level.label}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
                                    />
                                    <div className={`absolute inset-0 bg-slate-950/80 transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-60'}`} />
                                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                                </div>

                                {/* Content Container */}
                                <div className={`relative z-10 w-full h-full p-6 lg:p-8 flex flex-col justify-end`}>

                                    {/* Level Title (Always Visible but styled diff) */}
                                    <div className={`flex items-center gap-4 mb-4 transition-all duration-300 ${isActive ? 'translate-y-0' : 'lg:translate-y-0 translate-y-0'}`}>

                                        <div className={`${!isActive && 'lg:opacity-0 lg:w-0 overflow-hidden'} transition-all duration-300`}>
                                            <h3 className="text-2xl font-bold text-white whitespace-nowrap">{level.label}</h3>
                                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{level.sub}</p>
                                        </div>
                                    </div>

                                    {/* Expanded Content (Only visible when active) */}
                                    <div className={`space-y-4 overflow-hidden transition-all duration-500 ${isActive ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
                                        <div className="h-px w-full bg-slate-700/50 mb-4" />

                                        <div className="grid gap-3">
                                            {level.roles.map((role, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 0.1 + (idx * 0.05) }}
                                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group/item"
                                                >
                                                    {/* Small Circle Image */}
                                                    <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden shrink-0 transition-colors">
                                                        <img
                                                            src={role.image}
                                                            alt={role.role}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    <div className="flex-grow min-w-0">
                                                        <h4 className="text-white font-bold text-sm truncate transition-colors">
                                                            {role.role}
                                                        </h4>
                                                        <p className="text-slate-400 text-xs">
                                                            {role.description}
                                                        </p>
                                                    </div>


                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Vertical Text for Inactive State (Desktop) */}
                                    {!isActive && (
                                        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
                                            <h3 className="text-2xl font-bold text-slate-500 -rotate-90 whitespace-nowrap tracking-widest uppercase">
                                                {level.label}
                                            </h3>
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
