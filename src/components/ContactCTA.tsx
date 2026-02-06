import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactCTA() {
    return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-center">

                    {/* Left: Text & Contact Info */}
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest mb-4 uppercase">
                            Get Started
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight text-slate-900">
                            Ready to Launch Your <br />
                            <span className="text-blue-600">Logistics Career?</span>
                        </h2>
                        <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
                            Admissions are open for the upcoming batch. Fill out the form to download the brochure and book a free counseling session.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue shadow-sm">
                                    <PhoneIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                                    <p className="text-lg font-bold text-slate-900">+91 79944 46019</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue shadow-sm">
                                    <EnvelopeIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                                    <p className="text-lg font-bold text-slate-900">info@logisticsgurukul.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue shadow-sm">
                                    <MapPinIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Visit Us</p>
                                    <p className="text-lg font-bold text-slate-900">Profnet Plaza, Edappally, Kochi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Simple Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xl relative"
                        >
                            {/* Form Header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Free Counseling</h3>
                                <p className="text-slate-500 text-sm">We usually respond within 2 hours.</p>
                            </div>

                            <form className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interest</label>
                                    <div className="relative">
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none font-medium">
                                            <option>Diploma in Logistics</option>
                                            <option>Supply Chain Management</option>
                                            <option>Warehouse Operations</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ArrowRightIcon className="w-4 h-4 text-slate-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                    className="mt-4 bg-brand-blue text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-brand-blue/30 group active:scale-95"
                                >
                                    <span>Submit Request</span>
                                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-slate-400 text-xs mt-2">
                                    By submitting, you agree to our Terms & Privacy Policy.
                                </p>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
