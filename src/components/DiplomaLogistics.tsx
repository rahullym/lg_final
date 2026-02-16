import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckBadgeIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    GlobeAltIcon,
    ArrowRightIcon,
    ClipboardDocumentCheckIcon,
    LanguageIcon,
    CubeIcon,
    CpuChipIcon,
    ComputerDesktopIcon,
    BuildingOffice2Icon,
    IdentificationIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
    { name: "Globally Recognized Certification (STED Council) *", icon: GlobeAltIcon },
    { name: "100% Placement Assistance", icon: BriefcaseIcon },
    { name: "Comprehensive Career Support", icon: CheckBadgeIcon },
];

const modules = [
    { name: "Interview Skills Training & Mock Interview", icon: ClipboardDocumentCheckIcon },
    { name: "Language Training (Hindi & English)", icon: LanguageIcon },
    { name: "Cargo Packaging", icon: CubeIcon },
    { name: "Artificial Intelligence in Logistics", icon: CpuChipIcon },
    { name: "IT Training (Basic Excel, Word)", icon: ComputerDesktopIcon },
    { name: "Warehousing Management", icon: BuildingOffice2Icon },
    { name: "Dangerous Goods Cargo Handling", icon: CubeIcon },
];

const SkillCard = ({ module }: { module: any }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className="group rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-start gap-6 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <module.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {module.title}
                    </h3>
                </div>
                <div className="relative flex-grow">
                    <p className={`text-slate-600 leading-relaxed text-sm ${!isExpanded ? 'line-clamp-3' : ''}`}>
                        {module.desc}
                    </p>
                    <button
                        id={`skill-card-toggle-${module.title.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-blue-600 font-bold text-[10px] uppercase tracking-widest hover:text-blue-700 transition-colors flex items-center gap-1"
                    >
                        {isExpanded ? (
                            <>Show Less <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></>
                        ) : (
                            <>View More <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function DiplomaLogistics() {
    return (
        <>
            <section className="bg-white">
                {/* Hero Section */}
                {/* Hero Section */}
                <div className="relative pt-28 pb-12 lg:pt-40 lg:pb-24 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/diploma-hero-bg.png"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold tracking-widest uppercase mb-6">
                            Flagship Program
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
                            Diploma in International <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Logistics & Freight Management
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                            Launch your global career with Kerala’s only 1-Year Diploma featuring 6 Months of Paid On-Job Training. Designed for graduates and working professionals, this course bridges the gap between theory and the real world of International Logistics & Supply Chain Management.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <button
                                id="diploma-hero-cta-apply"
                                onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                                className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                            >
                                Apply Now <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/logistics_diploma_student.png"
                                    alt="Student Learning"
                                    className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                                />
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose This Diploma?</h2>
                                    <p className="text-slate-600 text-lg mb-4">
                                        Our program is meticulously crafted to bridge the gap between academic knowledge and industry requirements, ensuring you are job-ready from day one.
                                    </p>

                                </div>

                                <div className="space-y-4">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shrink-0 border border-slate-200">
                                                <feature.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 text-base">{feature.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shrink-0 border border-slate-200">
                                            <IdentificationIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 text-base">Eligibility: +2 (t&c apply)/ Graduation / Post-Graduation</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-20 bg-white">
                    <div className="container mx-auto px-6">
                        {/* Course Roadmap Journey - Connected Card Flow */}
                        <div className="bg-slate-900 rounded-3xl p-10 md:p-20 relative overflow-hidden">

                            <div className="relative z-10 text-center mb-16">
                                <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">The Journey</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">Course Timeline</h2>
                            </div>

                            <div className="relative z-10 max-w-7xl mx-auto">

                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-[50%] left-4 right-4 h-0.5 bg-slate-800 -translate-y-[50%] z-0">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 opacity-30"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                                    {[
                                        { step: "01", period: "Months 1-4", title: "Classroom", sub: "Theory & Basics" },
                                        { step: "02", period: "Month 5", title: "Internship", sub: "Live Projects" },
                                        { step: "03", period: "Month 6", title: "Product Training", sub: "Specialization" },
                                        { step: "04", period: "Month 7-12", title: "Job Training", sub: "Paid Role" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="group relative bg-slate-900 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-blue-900/20 hover:-translate-y-2">

                                            {/* Period Badge - Floating Top */}
                                            <div className="mb-6 -mt-10 bg-slate-800 border border-slate-600 text-blue-400 text-xs font-bold px-4 py-2 rounded-full shadow-lg group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                {item.period}
                                            </div>

                                            {/* Icon/Circle */}


                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                                            <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{item.sub}</p>

                                            {/* Mobile Connector */}
                                            {idx !== 3 && (
                                                <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-700">
                                                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curriculum Grid */}
                <div id="curriculum" className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-4 uppercase">
                                Value Added Curriculum
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                                Skills That Make You <span className="text-blue-600">Job-Ready</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We go beyond textbooks. Our curriculum integrates essential practical skills that employers value most, ensuring you stand out in the competitive logistics industry.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-24">
                            {[
                                {
                                    title: "Interview Skills & Mock Interview Training",
                                    desc: "Gain the confidence to face real interviews with expert-guided interview skills training and mock sessions. Improve communication, body language, and responses to stand out and get job-ready faster. Our program includes professional interview training and mock interviews to prepare students for real hiring situations. Build confidence, sharpen communication skills, and step into interviews with a winning edge.",
                                    icon: ClipboardDocumentCheckIcon,
                                    image: "/interview-skills.png"
                                },
                                {
                                    title: "Language Training (English & Hindi)",
                                    desc: "As a value addition, our diploma program includes Language Training in English and Hindi to strengthen students’ professional communication skills. The training focuses on workplace vocabulary, customer interaction, documentation-related communication, and confidence building, enabling students to communicate clearly with clients, colleagues, and industry partners. This support enhances employability and workplace effectiveness in the logistics and supply chain sector.",
                                    icon: LanguageIcon,
                                    image: "/language-training.png"
                                },
                                {
                                    title: "IT Training (Basic Excel & Word)",
                                    desc: "Our Logistics diploma program includes IT training in Basic Excel and MS Word to equip students with essential digital skills required in logistics and supply chain operations. The training focuses on data entry, basic formulas, report preparation, documentation, and record management, enabling students to work efficiently in offices, warehouses, and logistics firms. This skill enhancement significantly improves accuracy, productivity, and job readiness.",
                                    icon: ComputerDesktopIcon,
                                    image: "/it-training.png"
                                },
                                {
                                    title: "Cargo Packaging",
                                    desc: "As a value addition, our logistics diploma program includes Cargo Packaging training to help students understand the importance of safe, secure, and compliant packaging in transportation and storage. The training covers types of packaging materials, packing methods for different cargo, labelling, palletization, and damage prevention, ensuring goods reach their destination safely. This practical knowledge plays a key role in reducing losses, improving efficiency, and meeting logistics standards.",
                                    icon: CubeIcon,
                                    image: "/cargo-packaging.png"
                                },
                                {
                                    title: "Artificial Intelligence (AI)",
                                    desc: "AI training introduces students to smart logistics tools and data-driven decision-making. Step into the future of logistics with Artificial Intelligence basics. It prepares learners for technology-enabled supply chain environments. Learn how smart technology is transforming supply chains and gain a competitive edge in modern logistics careers.",
                                    icon: CpuChipIcon,
                                    image: "/ai-logistics.png"
                                },
                                {
                                    title: "Warehousing",
                                    desc: "Warehousing training helps students understand storage, stock handling, and inventory flow. It prepares learners for practical roles in warehouses and distribution centres. Power the backbone of logistics with hands-on warehousing skills. Learn how smart storage and inventory management drive faster and efficient supply chains.",
                                    icon: BuildingOffice2Icon,
                                    image: "/warehousing.png"
                                },
                                {
                                    title: "Dangerous Goods Cargo Handling",
                                    desc: "As a value addition, our diploma program includes Dangerous Goods Cargo Handling training to familiarize students with the safe handling, storage, labelling, and movement of hazardous materials. This training builds strong awareness of risk management, safety responsibility, and operational discipline in logistics operations. Gain practical exposure to dangerous goods cargo handling and stand out in safety-critical logistics careers.",
                                    icon: CubeIcon,
                                    image: "/dangerous-goods.png"
                                }
                            ].map((module, i) => (
                                <SkillCard key={i} module={module} />
                            ))}
                        </div>


                    </div>
                </div>

            </section>

            {/* Bottom CTA */}
            <div className="pt-16 pb-8 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Career?</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                        Admissions are open. Secure your spot in the Global Logistics industry today.
                    </p>
                    <div className="flex justify-center">
                        <button
                            id="diploma-footer-cta-book-counselling"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-counselling-wizard'))}
                            className="px-10 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
                        >
                            Book Free Counselling
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
