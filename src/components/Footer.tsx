import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Logo & Brief */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="Logistics Gurukul" className="h-10 w-auto" />
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Empowering the next generation of logistics and supply chain professionals with industry-leading expertise.
                        </p>
                    </div>

                    {/* Courses */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">Our Courses</h3>
                        <ul className="space-y-3">
                            {[
                                'International Logistics & Freight Management',
                                'Supply Chain Management',
                                'Import Export Management',
                                'Warehouse Operations'
                            ].map((course) => (
                                <li key={course} className="text-slate-300 text-sm hover:text-white transition-colors cursor-pointer">
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-slate-300">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <p className="text-sm leading-relaxed">
                                    Profnet Plaza, Edappally, Kochi,<br />
                                    Kerala, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-sm">+91 7994446019</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-sm">info@logisticsgurukul.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Logistics Gurukul. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
