import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import CounsellingWizard from './CounsellingWizard';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleOpenWizard = () => setIsWizardOpen(true);
        window.addEventListener('open-counselling-wizard', handleOpenWizard);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('open-counselling-wizard', handleOpenWizard);
        };
    }, []);

    const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { label: 'Home', href: '/' },
        {
            label: 'About',
            href: '/about',
            children: [
                { label: 'Our Story', href: '/about' },
                { label: 'Faculty Team', href: '/tutors' },
                { label: 'Certification', href: '/certification' }
            ]
        },
        {
            label: 'Courses',
            href: '#',
            children: [
                { label: 'Diploma', href: '/diploma-international-logistics' },
                { label: 'Short Term Courses', href: '/short-term-courses' },
                { label: 'Internship', href: '/internship' }
            ]
        },
        {
            label: 'Life @ Gurukul',
            href: '#',
            children: [
                { label: 'Infrastructure', href: '/infrastructure' },
                { label: 'Celebration', href: '/celebrations' },
                { label: 'Seminars & Events', href: '/seminars' }
            ]
        },
        {
            label: 'Journal',
            href: '#',
            children: [
                { label: 'Blogs', href: '/blog' },
                { label: 'Newsletter', href: '#' }
            ]
        }
    ];

    return (
        <header className="fixed w-full top-0 start-0 z-50 font-sans">
            {/* Top Bar - Address & Social Links */}
            <div className={`hidden lg:block bg-slate-900 text-white transition-all duration-300 h-auto opacity-100`}>
                <div className="container mx-auto px-6 py-2">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-slate-300">
                            <a id="nav-contact-phone" href="tel:+917994446019" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span>+91 79944 46019</span>
                            </a>
                            <a id="nav-contact-email" href="mailto:enquiry@logisticsgurukul.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">enquiry@logisticsgurukul.com</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="hidden lg:inline">Kochi, Kerala</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-xs mr-2 hidden md:inline">Follow Us:</span>
                            <a id="nav-social-facebook" href="https://www.facebook.com/logisticsgurukulkochi/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-slate-400 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a id="nav-social-instagram" href="https://www.instagram.com/logisticsgurukul" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-slate-400 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a id="nav-social-linkedin" href="https://www.linkedin.com/company/logisticsgurukul/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-slate-400 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a id="nav-social-youtube" href="https://www.youtube.com/@LogisticsGurukul2025" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-slate-400 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a id="nav-social-whatsapp" href="https://wa.me/917994446019" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-slate-400 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar - White Background */}
            <div className={`transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center relative z-20">

                    {/* Logo Area + Accreditation Logos */}
                    <div className="flex items-center gap-3 xl:gap-5">
                        <a id="nav-logo" href="/" className="flex items-center gap-2 group">
                            <img
                                src="/logo.png"
                                alt="Logistics Gurukul"
                                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-12' : 'h-16'}`}
                            />
                        </a>
                        <div className="hidden md:flex items-center gap-2 xl:gap-3 pl-3 xl:pl-5 border-l border-slate-200">
                            <a
                                id="nav-logo-sted"
                                href="/certification#sted"
                                aria-label="View STED Council accreditation"
                                className="group relative inline-flex items-center justify-center rounded-lg p-1 transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <img
                                    src="/images/sted-logo.png"
                                    alt="STED Council — Approved Center"
                                    title="STED Council — Approved Center"
                                    className={`w-auto object-contain transition-all duration-300 group-hover:scale-110 ${scrolled ? 'h-9' : 'h-11'}`}
                                />
                            </a>
                            <a
                                id="nav-logo-fics"
                                href="/certification#fics"
                                aria-label="View FICS UK accreditation"
                                className="group relative inline-flex items-center justify-center rounded-lg p-1 transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <img
                                    src="/images/fics-logo.png"
                                    alt="FICS UK — Universal Accomplishment"
                                    title="FICS UK"
                                    className={`w-auto object-contain transition-all duration-300 group-hover:scale-110 ${scrolled ? 'h-9' : 'h-11'}`}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navItems.map((item) => {
                            if (item.children) {
                                return (
                                    <div
                                        key={item.label}
                                        className="relative group h-full flex items-center"
                                        onMouseEnter={() => setActiveDropdown(item.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button
                                            id={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="flex items-center gap-1 px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 focus:outline-none whitespace-nowrap"
                                            onClick={() => {
                                                if (item.href !== '#') window.location.href = item.href;
                                            }}
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-blue-600' : ''}`} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden transform transition-all duration-200 origin-top-left ${activeDropdown === item.label ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
                                        >
                                            <div className="py-1">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        id={`nav-link-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                                                        href={child.href}
                                                        className="block px-4 py-2.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors whitespace-nowrap"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <a
                                    key={item.label}
                                    id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                    href={item.href}
                                    className="group relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 whitespace-nowrap"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button
                            id="nav-cta-contact"
                            onClick={() => setIsWizardOpen(true)}
                            className="group relative overflow-hidden px-6 xl:px-8 py-3 xl:py-3.5 bg-brand-blue hover:opacity-90 text-white text-sm xl:text-base font-bold rounded-full transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap block"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out" aria-hidden="true"></span>
                        </button>
                    </div>

                    {/* Mobile/Tablet Toggle */}
                    <button
                        id="nav-mobile-toggle"
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
                        {navItems.map((item) => {
                            if (item.children) {
                                return (
                                    <div key={item.label} className="flex flex-col gap-2">
                                        <span className="text-lg font-medium text-slate-700 border-b border-gray-100 pb-1">{item.label}</span>
                                        {item.children.map(child => (
                                            <a
                                                key={child.label}
                                                id={`mobile-nav-link-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                                                href={child.href}
                                                className="pl-4 text-base font-medium text-slate-600 hover:text-blue-600"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                );
                            }

                            return (
                                <a
                                    key={item.label}
                                    id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                                    href={item.href}
                                    className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            );
                        })}

                        <button
                            id="mobile-nav-cta-contact"
                            onClick={() => {
                                setIsOpen(false);
                                setIsWizardOpen(true);
                            }}
                            className="mt-4 w-full px-6 py-3 bg-brand-blue text-center text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                        >
                            Contact Us
                        </button>

                        {/* Mobile Accreditation Logos */}
                        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
                            <a
                                id="mobile-nav-logo-sted"
                                href="/certification#sted"
                                onClick={() => setIsOpen(false)}
                                aria-label="View STED Council accreditation"
                                className="transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src="/images/sted-logo.png"
                                    alt="STED Council — Approved Center"
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                            <a
                                id="mobile-nav-logo-fics"
                                href="/certification#fics"
                                onClick={() => setIsOpen(false)}
                                aria-label="View FICS UK accreditation"
                                className="transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src="/images/fics-logo.png"
                                    alt="FICS UK — Universal Accomplishment"
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Contact Info */}
                    <div className="flex flex-col gap-3 py-4 border-t border-gray-100 mt-4">
                        <a id="mobile-nav-contact-phone" href="tel:+917994446019" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-sm">+91 79944 46019</span>
                        </a>
                        <a id="mobile-nav-contact-email" href="mailto:enquiry@logisticsgurukul.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-sm">enquiry@logisticsgurukul.com</span>
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
                        <a id="mobile-nav-social-facebook" href="https://www.facebook.com/logisticsgurukulkochi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a id="mobile-nav-social-instagram" href="https://www.instagram.com/logisticsgurukul" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a id="mobile-nav-social-linkedin" href="https://www.linkedin.com/company/logisticsgurukul/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a id="mobile-nav-social-youtube" href="https://www.youtube.com/@LogisticsGurukul2025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a id="mobile-nav-social-whatsapp" href="https://wa.me/917994446019" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </a>
                    </div>
                </div>
            )}

            <CounsellingWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </header>
    );
}
