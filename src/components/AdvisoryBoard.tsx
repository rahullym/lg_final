import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

type BoardMember = {
    name: string;
    designation: string;
    highlight: string;
    image: string;
    expertise: string[];
    description: string;
};

const board: BoardMember[] = [
    {
        name: "Hari Nair",
        designation: "Director – Berrio Logistics Pvt. Ltd. & Dehasu Logistics India Pvt. Ltd",
        highlight: "Marketing & Overseas Business Development Expert",
        image: "/faculty-images/hari-nair.jpg",
        expertise: ["Business Development", "B2B Corporate Sales", "Maritime Trade Strategy", "Market Expansion"],
        description:
            "Bringing a powerhouse of commercial acumen to the institute, Mr. Hari Nair serves as a Director at Berrio Logistics Pvt. Ltd. and Dehasu Logistics India Pvt. Ltd. Over a distinguished career spanning more than twenty years, he has mastered the art of high-growth business development, B2B corporate sales, and large-scale maritime trade strategies. At Logistics Gurukul, Hari bridges the gap between classroom concepts and boardroom realities, mentoring students on how to scale logistics brands, penetrate new markets, and win major enterprise accounts.",
    },
    {
        name: "Aji Chacko",
        designation: "Managing Director – Linear Global Ltd.",
        highlight: "Air Cargo Expert",
        image: "/faculty-images/aji-chacko.jpg",
        expertise: ["International Air Freight", "Airline Agency Management", "Multi-Modal Supply Chains", "Transit Compliance"],
        description:
            "Mr. Aji Chacko is a visionary corporate leader who pilots Linear Global Logistics Pvt. Ltd. as its Managing Director. His extensive footprint in the industry covers international air freight ecosystems, airline agency management, and advanced multi-modal supply chains. Mr. Aji infuses the Logistics Gurukul curriculum with elite, top-tier corporate perspective, actively equipping students with the complex skills needed to handle global airport hub routing, premium air cargo operations, and international transit compliance.",
    },
    {
        name: "Deljo C Poulose",
        designation: "Ex-General Manager – Alligator Shipping CO LLC",
        highlight: "Business Development Expert (GCC)",
        image: "/faculty-images/deljo-poulose.jpg",
        expertise: ["GCC Markets", "Cross-Border Trade", "Enterprise Business Development", "Freight Corridors"],
        description:
            "Mr. Deljo C Poulose is a prominent cross-border trade architect with 20 years of corporate experience managing multi-million-dollar freight corridors, highlighted by leadership roles as General Manager at Alligator Shipping CO LLC and Liner Head at Inchcape Shipping in Dubai. Specializing in high-stakes international commerce, his expertise centers squarely on advanced business development strategies and the booming GCC markets. At Logistics Gurukul, Deljo leverages his powerful Middle Eastern network to train students in enterprise business development, delivering the critical commercial intelligence needed to secure lucrative careers across global logistics networks.",
    },
    {
        name: "Ashok P Das",
        designation: "MSME Mentor & Chairman – Nextstep Career Academy for Research and Excellence",
        highlight: "Advisor & Consultant",
        image: "/faculty-images/ashok-das.jpg",
        expertise: ["Leadership Transformation", "Corporate Training", "Skill Mapping", "Career Placement Strategy"],
        description:
            "Mr. Ashok Das is a highly regarded corporate trainer and human capital consultant who specializes in leadership transformation, growth strategies, and professional skill mapping. With a rich history of advising institutions and corporate bodies on high-performance training models, he excels in mentoring individuals to meet modern corporate expectations. On the Logistics Gurukul Advisory Board, Ashok acts as the core architect for our students' corporate readiness — personally driving modules on executive communication, leadership ethics, and career placement strategies to ensure graduates enter the logistics workforce as polished, high-performing corporate professionals.",
    },
    {
        name: "Sreeji Pillai",
        designation: "CEO & Director – Berrio Lines Pvt. Ltd.",
        highlight: "Academic Consultant & Chief Mentor",
        image: "/faculty-images/sreeji-pillai.jpg",
        expertise: ["End-to-End Supply Chain", "Commercial Shipping Routes", "Global Freight Forwarding", "Executive Leadership"],
        description:
            "Piloting the academic vision as our Chief Mentor and Executive Advisory Board Member, Mr. Sreeji Pillai brings unparalleled executive authority from his current role as the CEO & Director at Berrio Lines Pvt. Ltd. His formidable background features top-tier management milestones, including serving as CEO of Aiyer Logistics and Vice President at Navio Shipping. He commands a masterly grip on end-to-end supply chain infrastructure, commercial shipping routes, and global freight forwarding. At Logistics Gurukul, Sreeji directly shapes the core curriculum with real-world industry trends, training the next generation of logistics professionals to think like global business leaders.",
    },
    {
        name: "Jiss Mathew",
        designation: "Director – Global Logistics Solutions India Pvt. Ltd.",
        highlight: "International Trade & EXIM Policy Expert",
        image: "/faculty-images/jiss-mathew.jpg",
        expertise: ["EXIM Policy", "International Trade Compliance", "Customs Procedures", "Global Supply Chain"],
        description:
            "With over 27 years of leadership in international logistics and trade, Mr. Jiss Mathew serves as the Director of Global Logistics Solutions India Pvt. Ltd. His expertise spans EXIM policy, international trade compliance, customs procedures, and global supply chain management. At Logistics Gurukul, he empowers students with practical knowledge of export-import operations, international trade regulations, and industry best practices, enabling them to build successful careers in the global logistics sector.",
    },
    {
        name: "Suresh Menon",
        designation: "Executive Director – East West Freight Carriers Ltd.",
        highlight: "International Trade & Logistics Management",
        image: "/faculty-images/suresh-menon.jpg",
        expertise: ["International Freight Forwarding", "EXIM & Customs", "Multimodal Transportation", "Logistics Strategy"],
        description:
            "Mr. Suresh Menon is the Executive Director of East West Freight Carriers Ltd. and a seasoned logistics leader specializing in international freight forwarding, supply chain management, and global trade operations. With extensive expertise in EXIM, customs regulations, multimodal transportation, and logistics strategy, he equips Logistics Gurukul students with practical industry knowledge and real-world insights, preparing them for successful careers in international logistics and supply chain management.",
    },
];

function BoardCard({ member, index }: { member: BoardMember; index: number }) {
    // Desktop reveals the overlay on hover; touch devices toggle it by tap.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500"
        >
            <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg leading-snug font-heading">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mt-1 leading-snug">{member.highlight}</p>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{member.designation}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                    {member.expertise.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="inline-block px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tap target for touch devices — hidden from pointer devices that support hover */}
            <button
                type="button"
                aria-expanded={isOpen}
                aria-label={`View full profile of ${member.name}`}
                onClick={() => setIsOpen((v) => !v)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 flex items-center justify-center shadow-md transition-transform duration-200 [@media(hover:hover)]:hidden"
            >
                <Plus className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
            </button>

            {/* Detail overlay — absolutely positioned so revealing it never shifts the grid */}
            <div
                className={`absolute inset-0 z-10 bg-slate-900/97 backdrop-blur-sm p-6 flex flex-col justify-center transition-all duration-300 ease-out
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
                    [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:pointer-events-auto`}
            >
                <div className="overflow-y-auto">
                    <h3 className="text-white font-bold text-lg font-heading leading-snug">{member.name}</h3>
                    <p className="text-blue-400 text-xs font-semibold mt-1">{member.highlight}</p>

                    <p className="text-slate-300 text-[13px] leading-relaxed mt-3">{member.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function AdvisoryBoard() {
    return (
        <section id="advisory-board" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-4 uppercase">
                        Leadership & Industry Experts
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-4">
                        Advisory <span className="text-blue-600">Board Members</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Directors, industry specialists, and advisors who shape our curriculum with decades of real-world logistics leadership.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {board.map((member, idx) => (
                        <BoardCard key={member.name} member={member} index={idx} />
                    ))}
                </div>

                <p className="text-center text-slate-400 text-xs mt-8 [@media(hover:hover)]:block hidden">
                    Hover over a profile to read the full professional background.
                </p>
            </div>
        </section>
    );
}
