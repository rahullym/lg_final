import React from 'react';
import { Gamepad2, PlayCircle } from 'lucide-react';

export default function SimulationLab() {
    return (
        <section className="py-20 bg-navy-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Simulation Lab Interface"
                                className="w-full object-cover transform group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-all">
                                    <PlayCircle className="w-10 h-10 fill-current" />
                                </button>
                            </div>
                        </div>

                        {/* Float Element */}
                        <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <div className="p-2 bg-orange-500 rounded-lg">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-sm">
                                <p className="text-slate-400">Status</p>
                                <p className="font-bold text-white">Simulation Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold tracking-wider uppercase">
                            Exclusive Technology
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                            Stop Studying. <br />
                            <span className="text-orange-500">Start Doing.</span>
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            Traditional courses teach theory. We put you in the driver's seat. Our exclusive <strong className="text-white">Logistics Simulation Lab</strong> lets you manage virtual supply chains and solve real-world crises before you ever step into an office.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Real-time Port Management Scenarios",
                                "Warehouse Inventory Crises Response",
                                "International Freight Costing Simulations"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="mt-4 px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
                            Book a Demo Session
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
