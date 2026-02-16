import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Quote, Briefcase, GraduationCap, Target } from 'lucide-react';

const tutors = [
    {
        name: "Sreeji Pillai",
        role: "Lead Mentor & Industry Specialist",
        subRole: "Former CEO of Aiyer Logistics Pvt LTD",
        image: "/faculty-images/sreeji.png", // Updated image
        bio: [
            "Sreeji Pillai is a seasoned logistics industry leader and mentor with over a decade of extensive experience across freight forwarding, shipping, and end-to-end supply chain operations. As the Industry Specialist and Lead Mentor, he brings invaluable real-world expertise and strategic insight to logistics education.",
            "He is widely recognized for his leadership capabilities and deep understanding of logistics business operations, having held senior management and executive roles across reputed logistics organizations in India."
        ],
        journey: (
            <>
                <p className="mb-4">
                    Mr. Pillai is a seasoned logistics professional with over a decade of progressive leadership roles across prominent logistics organizations. He most recently served as Chief Executive Officer at Aiyer Logistics Pvt Ltd — where he oversaw strategic operations, business development, and integrated logistics service delivery.
                </p>
                <p className="mb-2 font-medium">Before taking on the CEO position, he held senior leadership roles including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Vice President – Navio Shipping</li>
                    <li>Vice President – Shiftco Shipping & Logistics India Pvt Ltd</li>
                    <li>General Manager – Global Logistics Solutions</li>
                    <li>Deputy General Manager – Global Logistics Solutions</li>
                    <li>Assistant General Manager at LavinStar Logistics Pvt Ltd</li>
                </ul>
            </>
        ),
        expertise: [
            "Executive leadership in logistics",
            "Strategic planning & business development",
            "End-to-end supply chain management",
            "Freight forwarding & customs coordination",
            "Mentoring teams for performance excellence"
        ],
        philosophy: "Logistics education must be grounded in real industry practice. I focus on bridging the gap between classroom learning and industry expectations by developing a leadership mindset and professional ethics.",
        instituteRole: [
            "Lead Industry Mentor for students & faculty",
            "Guiding curriculum alignment with trends",
            "Sharing executive-level insights",
            "Preparing students for long-term career growth"
        ]
    },
    {
        name: "Isabella Davis",
        role: "Logistics Faculty & Trainer",
        subRole: "Operations and Supply Chain Management",
        image: "/faculty-images/isabella-maam.png", // Updated image
        bio: [
            "Isabella Davis is a committed logistics professional and faculty member with strong expertise in logistics operations, coordination, and administrative support functions. As a logistics trainer, she brings practical clarity and structured learning approaches to students preparing to enter the supply chain industry.",
            "Her focus is on delivering concept-driven, industry-relevant knowledge that equips learners with the confidence and competence required in modern logistics environments."
        ],
        expertise: [
            "Academic Training & Structured Learning Delivery",
            "Logistics Operations & Coordination",
            "Operational accuracy & process efficiency",
            "Guiding students for entry-level roles"
        ],
        philosophy: "Strong fundamentals are the backbone of a successful logistics career. My teaching emphasizes concept clarity, real-world applicability, and building professional discipline for long-term skill retention.",
        instituteRole: [
            "Delivering core logistics modules",
            "Assisting learners with industry practices",
            "Preparing students for operational roles",
            "Building confidence & competence"
        ]
    }
];

export default function FacultyTeam() {
    return (
        <section id="faculty" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
            <div className="container mx-auto px-6">

                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-4 uppercase">
                        Our Expert Mentors
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">
                        Meet the <span className="text-blue-600">Faculty Team</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-32">
                    {tutors.map((tutor, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>

                            {/* Image Column */}
                            <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-40">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative"
                                >
                                    <div className="aspect-square md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 max-h-[350px] md:max-h-none mx-auto">
                                        {/* Placeholder for images if file not found, creating a fallback visual */}
                                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <img
                                                src={tutor.image}
                                                alt={tutor.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    if (e.currentTarget.parentElement) {
                                                        e.currentTarget.parentElement.innerHTML = `<span class="text-6xl font-black opacity-20">${tutor.name.charAt(0)}</span>`;
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-blue-100 rounded-full -z-10`} />
                                    <div className={`absolute -top-6 ${idx % 2 === 0 ? '-left-6' : '-right-6'} w-32 h-32 bg-slate-200 rounded-full -z-10`} />
                                </motion.div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-2/3">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h4 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">{tutor.role}</h4>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 font-heading leading-tight">{tutor.name}</h2>
                                    <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">{tutor.subRole}</p>

                                    <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                                        {tutor.bio.map((paragraph, pIdx) => (
                                            <p key={pIdx} className="mb-4">{paragraph}</p>
                                        ))}
                                        {tutor.journey && (
                                            <div className="mt-6 p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                                                <h5 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                                                    <Briefcase className="w-5 h-5 text-blue-500" /> Professional Journey
                                                </h5>
                                                <div className="text-sm md:text-base text-slate-600 space-y-2">{tutor.journey}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Expertise & Academy Role Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                                <Target className="w-5 h-5 text-indigo-500" /> Expertise
                                            </h3>
                                            <ul className="space-y-3">
                                                {tutor.expertise.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 mt-2 bg-indigo-500 rounded-full flex-shrink-0" />
                                                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {tutor.instituteRole && (
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                                    <GraduationCap className="w-5 h-5 text-blue-600" /> At Logistics Gurukul
                                                </h3>
                                                <ul className="space-y-3">
                                                    {tutor.instituteRole.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full flex-shrink-0" />
                                                            <span className="text-slate-700 text-sm font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Philosophy Quote */}
                                    <div className="relative pl-8 border-l-4 border-blue-600 bg-blue-50/50 p-6 rounded-r-xl">
                                        <Quote className="absolute top-6 left-8 -translate-x-full -ml-4 w-8 h-8 text-blue-200 -z-10" />
                                        <p className="text-lg font-medium text-slate-800 italic mb-2">
                                            "{tutor.philosophy}"
                                        </p>
                                    </div>

                                </motion.div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
