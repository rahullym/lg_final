import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const originalCareers = [
    {
        role: "Supply Chain Manager",
        desc: "Oversee global trade and logistics strategy.",
        image: "/career_supply_chain.png",
        salary: "High Growth"
    },
    {
        role: "Air Cargo Operations",
        desc: "Coordinate urgent shipments at major airports.",
        image: "/career_air_cargo.png",
        salary: "Global Travel"
    },
    {
        role: "Port Logistics Lead",
        desc: "Manage massive sea freight operations.",
        image: "/career_shipping_port.png",
        salary: "Stable Career"
    },
    {
        role: "Smart Warehousing",
        desc: "Lead automated storage and distribution hubs.",
        image: "/career_smart_warehouse.png",
        salary: "Tech Driven"
    },
    {
        role: "Export Specialist",
        desc: "Navigate international trade laws and deals.",
        image: "/career_export_specialist.png",
        salary: "Corporate"
    }
];

// Tripled array for infinite loop illusion
const careers = [...originalCareers, ...originalCareers, ...originalCareers];

export default function CareerOpportunities() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(originalCareers.length); // Start at middle set logic
    const [isPaused, setIsPaused] = useState(false);
    const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

    // Initial Scroll to Center Set with Retry
    useEffect(() => {
        const jumpToMiddle = () => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                if (container.children.length > 0) {
                    const firstCard = container.children[0] as HTMLElement;
                    const cardWidth = firstCard.clientWidth + 24;
                    // Jump to start of middle set
                    container.scrollLeft = cardWidth * originalCareers.length;
                    setActiveIndex(originalCareers.length);
                }
            }
        };

        // Try immediately, then after a short delay to ensure layout is ready
        jumpToMiddle();
        const timer = setTimeout(jumpToMiddle, 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-Scroll Logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                if (container.children.length === 0) return;

                const firstCard = container.children[0] as HTMLElement;
                const cardWidth = firstCard.clientWidth + 24;

                // Smooth scroll to next
                container.scrollTo({
                    left: container.scrollLeft + cardWidth,
                    behavior: 'smooth'
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    // Handle Scroll for Infinite Loop Reset
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        if (container.children.length === 0) return;

        const firstCard = container.children[0] as HTMLElement;
        const cardWidth = firstCard.clientWidth + 24;

        // Correct Logic: Due to padding centering, scrollLeft directly maps to index
        // scrollLeft = 0 means Index 0 is centered.
        const rawIndex = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(rawIndex);

        // Infinite Loop Reset Logic
        if (!isProgrammaticScroll) {
            const singleSetWidth = originalCareers.length * cardWidth;

            // If we've scrolled past the second set into the third set...
            if (container.scrollLeft >= singleSetWidth * 2) {
                setIsProgrammaticScroll(true);
                container.scrollLeft = container.scrollLeft - singleSetWidth;
                setTimeout(() => setIsProgrammaticScroll(false), 50);
            }
            // If we've scrolled back into the first set...
            else if (container.scrollLeft < singleSetWidth - 50) {
                setIsProgrammaticScroll(true);
                container.scrollLeft = container.scrollLeft + singleSetWidth;
                setTimeout(() => setIsProgrammaticScroll(false), 50);
            }
        }
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold tracking-widest mb-4">
                            CAREER PATHWAYS
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                            Where This Diploma <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Takes You</span>
                        </h2>
                    </div>

                    <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed mb-2 text-left">
                        Unlock high-paying roles in the world's most dynamic industries. Drag to explore your potential future.
                    </p>
                </div>

                {/* Carousel Wrapper with Navigation */}
                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                const container = scrollRef.current;
                                if (container.children.length > 0) {
                                    const cardWidth = (container.children[0] as HTMLElement).clientWidth + 24;
                                    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                                }
                            }
                        }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/40 border border-slate-700/50 text-white backdrop-blur-md hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg opacity-0 group-hover/carousel:opacity-100 md:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                const container = scrollRef.current;
                                if (container.children.length > 0) {
                                    const cardWidth = (container.children[0] as HTMLElement).clientWidth + 24;
                                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                                }
                            }
                        }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/40 border border-slate-700/50 text-white backdrop-blur-md hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg opacity-0 group-hover/carousel:opacity-100 md:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        className="flex overflow-x-auto gap-6 pb-12 scrollbar-hide px-[10vw] md:px-[calc(50%-175px)] [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {careers.map((career, idx) => {
                            const isCardActive = idx === activeIndex;
                            return (
                                <motion.div
                                    key={idx}
                                    animate={{
                                        scale: isCardActive ? 1 : 0.9,
                                        opacity: isCardActive ? 1 : 0.4,
                                        borderColor: isCardActive ? 'rgba(59, 130, 246, 0.5)' : 'rgba(30, 41, 59, 1)'
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className={`flex-none w-[80vw] md:w-[350px] h-[500px] relative rounded-3xl overflow-hidden group border border-slate-800 transition-all duration-500 cursor-pointer ${isCardActive ? 'shadow-2xl shadow-blue-900/20 z-10' : 'z-0 grayscale-[50%]'}`}
                                    onClick={() => {
                                        if (scrollRef.current) {
                                            const container = scrollRef.current;
                                            const firstCard = container.children[0] as HTMLElement;
                                            const cardWidth = firstCard.clientWidth + 24;
                                            // Scroll so this item is 0-aligned (which is visually centered)
                                            container.scrollTo({
                                                left: idx * cardWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                >
                                    {/* Image Background */}
                                    <img
                                        src={career.image}
                                        alt={career.role}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-300 ${isCardActive ? 'opacity-90' : 'opacity-80'}`} />

                                    {/* Content */}
                                    <div className={`absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 ${isCardActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                        <span className={`inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4 transition-all ${isCardActive ? 'bg-blue-600/20 border-blue-500/30 text-blue-200' : ''}`}>
                                            {career.salary}
                                        </span>
                                        <h3 className={`text-2xl font-bold text-white mb-2 leading-tight transition-colors ${isCardActive ? 'text-white' : 'text-slate-400'}`}>
                                            {career.role}
                                        </h3>
                                        <p className={`text-slate-300 text-sm leading-relaxed max-w-[90%] transition-opacity duration-300 ${isCardActive ? 'opacity-100' : 'opacity-0'}`}>
                                            {career.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Placement Partners Marquee */}
                <div className="mt-16 pt-8 border-t border-slate-800">
                    <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
                        Our Alumni Work At Top Global Brands
                    </p>

                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <motion.div
                            className="flex gap-16 w-max items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30
                            }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-2xl font-bold text-slate-500">FedEx</span>
                                    <span className="text-2xl font-bold text-slate-500">MAERSK</span>
                                    <span className="text-2xl font-bold text-slate-500 italic">DHL</span>
                                    <span className="text-2xl font-bold text-slate-500">BlueDart</span>
                                    <span className="text-2xl font-bold text-slate-500">Kuehne+Nagel</span>
                                    <span className="text-2xl font-bold text-slate-500">DP WORLD</span>
                                    <span className="text-2xl font-bold text-slate-500">amazon</span>
                                    <span className="text-2xl font-bold text-slate-500">Flipkart</span>
                                    <span className="text-2xl font-bold text-slate-500">GATI</span>
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
