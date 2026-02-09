import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    // Timeout reference to prevent flickering
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setAboutDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setAboutDropdownOpen(false);
        }, 200); // Small delay to allow moving mouse to dropdown
        setTimeoutId(id);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
            >
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo Section */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                            <span className="text-white font-bold text-xl">L</span>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">Logistics<span className="text-blue-600">Gurukul</span></span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Excellence in Motion</span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {['Home'].map((link) => (
                            <a
                                key={link}
                                href={'/'}
                                target="_self"
                                className="group relative px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-all duration-300"
                            >
                                {link}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}

                        {/* About with Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className="flex items-center gap-1 px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 focus:outline-none"
                                onClick={() => window.location.href = '/about'}
                            >
                                About
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {aboutDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2 mt-2"
                                    >
                                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

                                        <a href="/about" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                <Briefcase className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="block text-sm font-bold text-slate-900">About Us</span>
                                                <span className="block text-xs text-slate-500">Our Story & Mission</span>
                                            </div>
                                        </a>

                                        <a href="/tutors" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item">
                                            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                                                <GraduationCap className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="block text-sm font-bold text-slate-900">Faculty Team</span>
                                                <span className="block text-xs text-slate-500">Meet our Expert Mentors</span>
                                            </div>
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {['Courses', 'Certification', 'Blogs'].map((link) => (
                            <a
                                key={link}
                                href={
                                    link === 'Courses' ? '/courses' :
                                        link === 'Blogs' ? '/blog' :
                                            link === 'Certification' ? '/certification' :
                                                `/#${link.toLowerCase()}`
                                }
                                target="_self"
                                className="group relative px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-all duration-300"
                            >
                                {link}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : (
                            <div className="space-y-1.5">
                                <span className="block w-8 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current ml-auto"></span>
                                <span className="block w-8 h-0.5 bg-current"></span>
                            </div>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white border-t border-gray-100 p-6 shadow-xl animate-fade-in-up overflow-y-auto">
                        <nav className="flex flex-col gap-6 pb-32">
                            <a href="/" className="text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>

                            {/* Mobile About Dropdown */}
                            <div className="space-y-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">About</span>
                                <a href="/about" className="flex items-center justify-between text-lg font-medium text-slate-600 pl-4 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                    About Us <ChevronRight className="w-4 h-4 text-slate-300" />
                                </a>
                                <a href="/tutors" className="flex items-center justify-between text-lg font-medium text-slate-600 pl-4 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                    Faculty Team <ChevronRight className="w-4 h-4 text-slate-300" />
                                </a>
                            </div>

                            <div className="border-t border-slate-100 pt-4 space-y-4">
                                <a href="/courses" className="block text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</a>
                                <a href="/certification" className="block text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Certification</a>
                                <a href="/blog" className="block text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Blogs</a>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg mt-4 shadow-lg shadow-blue-200">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </motion.header>
            {/* Spacer to prevent content overlap */}
            <div className="h-20" />
        </>
    );
};

export default Navbar;
