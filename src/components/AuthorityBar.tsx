import React from 'react';
import { BadgeCheck, Users, Trophy, Briefcase } from 'lucide-react';

export default function AuthorityBar() {
    return (
        <section className="bg-navy-900 border-b border-white/5 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4">

                    <div className="flex items-center gap-4 text-white/90 group hover:text-blue-400 transition-colors cursor-default">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <BadgeCheck className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">ISO 9001:2015</h3>
                            <p className="text-sm text-slate-400 group-hover:text-blue-200/80">Certified Institute</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-white/10"></div>

                    <div className="flex items-center gap-4 text-white/90 group hover:text-blue-400 transition-colors cursor-default">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <Users className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">20,000+</h3>
                            <p className="text-sm text-slate-400 group-hover:text-blue-200/80">Students Trained</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-white/10"></div>

                    <div className="flex items-center gap-4 text-white/90 group hover:text-blue-400 transition-colors cursor-default">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <Trophy className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">#1 Logistics</h3>
                            <p className="text-sm text-slate-400 group-hover:text-blue-200/80">Institute in Kochi</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-white/10"></div>

                    <div className="flex items-center gap-4 text-white/90 group hover:text-blue-400 transition-colors cursor-default">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <Briefcase className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">100% Record</h3>
                            <p className="text-sm text-slate-400 group-hover:text-blue-200/80">Internship Placement</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
