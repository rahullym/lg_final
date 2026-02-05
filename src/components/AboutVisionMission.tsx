import React from 'react';
import { EyeIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function AboutVisionMission() {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">Our Core Identity</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">

                    {/* Vision */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <EyeIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            To be India’s most trusted and innovative logistics learning hub — shaping future-ready professionals who lead with knowledge and purpose.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <RocketLaunchIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Deliver globally relevant logistics education through practical learning and strong industry partnerships that ensure placement opportunities.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <SparklesIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Our Values</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Empowering students with innovation, professionalism, and lifelong excellence to succeed in the evolving logistics landscape.
                        </p>
                    </div>

                </div>

                <div className="mt-20 pt-12 border-t border-slate-50 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-slate-400 font-heading max-w-3xl mx-auto leading-tight">
                        "We move minds — <span className="text-blue-600">so they can move the world.</span>"
                    </p>
                </div>
            </div>
        </section>
    );
}
