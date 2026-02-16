import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16 border-t border-white/5 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

                    {/* Logo & Brief */}
                    <div className="space-y-6">
                        <img src="/lgfooter.png" alt="Logistics Gurukul" className="h-10 w-auto object-contain" />
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Empowering the next generation of logistics and supply chain professionals with industry-leading expertise.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/logisticsgurukulkochi/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.497 4.376-4.497 1.245 0 2.315.093 2.627.135v3.046l-1.803.001c-1.411 0-1.685.67-1.685 1.654v2.172h3.372l-.438 3.403h-2.934v8.74h6.195c.731 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/logisticsgurukul" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@LogisticsGurukul2025" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                                <span className="sr-only">YouTube</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            <a href="https://wa.me/917994446019" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all">
                                <span className="sr-only">WhatsApp</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
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
                                    <a href="#">{course}</a>
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

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                    <p className="text-slate-500 text-[10px] font-bold tracking-widest">* in association with Alive Academy (official certificate partner)</p>
                    <p className="text-slate-500 text-[10px] font-bold tracking-widest"># t&c apply</p>
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} EDIFY LOGIWISE SOLUTIONS PVT LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
