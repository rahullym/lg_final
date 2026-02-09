import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import CounsellingWizard from './CounsellingWizard';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleOpenWizard = () => setIsWizardOpen(true);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('open-counselling-wizard', handleOpenWizard);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('open-counselling-wizard', handleOpenWizard);
        };
    }, []);

    return (
        <header className="fixed w-full top-0 start-0 z-50 font-sans">

            {/* Top Bar - Address & Social Links */}
            {/* Dark background for contrast */}
            <div className={`hidden lg:block bg-slate-900 text-white transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
                <div className="container mx-auto px-6 py-2">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-slate-300">
                            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span>+91 98765 43210</span>
                            </a>
                            <a href="mailto:info@logisticsgurukul.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">info@logisticsgurukul.com</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="hidden lg:inline">Kochi, Kerala</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-xs mr-2 hidden md:inline">Follow Us:</span>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar - White Background */}
            <div className={`transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center relative z-20">

                    {/* Logo Area */}
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Logistics Gurukul"
                            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
                        />
                    </a>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {['Home', 'About', 'Courses', 'Certification', 'Blogs'].map((link) => (
                            <a
                                key={link}
                                href={
                                    link === 'About' ? '/about' :
                                        link === 'Courses' ? '/courses' :
                                            link === 'Blogs' ? '/blog' :
                                                link === 'Certification' ? '/certification' :
                                                    link === 'Home' ? '/' : `/#${link.toLowerCase()}`
                                }
                                target="_self"
                                className="group relative px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-all duration-300"
                            >
                                {link}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setIsWizardOpen(true)}
                            className="px-7 py-3 bg-brand-blue hover:opacity-90 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            Book Free Counselling Session
                        </button>
                    </div>

                    {/* Mobile/Tablet Toggle */}
                    <button
                        className="lg:hidden text-slate-900 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 shadow-xl animate-fade-in-up">
                    <nav className="flex flex-col gap-4">
                        {['Home', 'About', 'Courses', 'Certification', 'Blogs'].map((link) => (
                            <a
                                key={link}
                                href={
                                    link === 'About' ? '/about' :
                                        link === 'Courses' ? '/courses' :
                                            link === 'Blogs' ? '/blog' :
                                                link === 'Certification' ? '/certification' :
                                                    link === 'Home' ? '/' : `/#${link.toLowerCase()}`
                                }
                                target="_self"
                                className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </a>
                        ))}

                        {/* Mobile Contact Info */}
                        <div className="flex flex-col gap-3 py-4 border-t border-gray-100">
                            <a href="tel:+917994446019" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">+91 79944 46019</span>
                            </a>
                            <a href="mailto:info@logisticsgurukul.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">info@logisticsgurukul.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-600">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">Profnet Plaza, Edappally, Kochi</span>
                            </div>
                        </div>

                        {/* Mobile Social Links */}
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>

                        <button
                            onClick={() => setIsWizardOpen(true)}
                            className="mt-4 w-full px-6 py-3 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                        >
                            Book Free Counselling Session
                        </button>
                    </nav>
                </div>
            )}
            <CounsellingWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </header>
    );
}
