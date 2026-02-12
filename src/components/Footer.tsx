import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16 border-t border-white/5 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

                    {/* Logo & Brief */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="Logistics Gurukul" className="h-10 w-auto object-contain" />
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
                                    <a href="/courses">{course}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logistics Gurukul Address */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">Logistics Gurukul</h3>
                        <div className="space-y-4 text-slate-300 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <p className="leading-relaxed">
                                    1st Floor, Profnet Plaza,<br />
                                    Edappally, Mamangalam,<br />
                                    Ernakulam, Kerala, 682025, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="tel:+917994446019" className="hover:text-white transition-colors">+91 79944 46019</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="mailto:info@logisticsgurukul.com" className="hover:text-white transition-colors">info@logisticsgurukul.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Alive Academy Address */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">Alive Academy</h3>
                        <div className="space-y-4 text-slate-300 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <p className="leading-relaxed">
                                    1st Floor, EVU Complex,<br />
                                    Near Govt. Hospital, Peechi Road (Jn),<br />
                                    Pattikkad (P.O), Thrissur, 680652
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="tel:+919400828186" className="hover:text-white transition-colors">+91 94008 28186</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="mailto:info@aliveacademy.co.in" className="hover:text-white transition-colors">info@aliveacademy.co.in</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} EDIFY LOGIWISE SOLUTIONS PVT LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
