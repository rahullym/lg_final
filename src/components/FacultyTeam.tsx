import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Faculty = {
    name: string;
    role: string;
    specialization: string;
    image: string;
    description: string;
};

const faculty: Faculty[] = [
    {
        name: "Vineetha Kadangot",
        role: "Center Head",
        specialization: "Leading Academic Excellence & Institutional Growth",
        image: "/faculty-images/vineetha-maam.png",
        description:
            "Steering academic strategy as our Center Head, Vineetha Kadangot brings over a decade of expertise in education, training, and curriculum design. A Certified TEFL Trainer and Cambridge Accredited IELTS Trainer, she has evolved from a Communicative English Trainer into a strategic academic leader shaping high-impact, outcome-driven programs. At Logistics Gurukul, she personally leads Language Training and Grooming, equipping students with the communication skills and professional polish demanded by global careers, while ensuring the broader curriculum stays industry-aligned and internationally relevant.",
    },
    {
        name: "Isabella Davis",
        role: "Logistics Faculty & Trainer",
        specialization: "Operations and Supply Chain Management",
        image: "/faculty-images/isabella-maam.png",
        description:
            "Bringing structured clarity to the classroom, Isabella Davis is a dedicated Logistics Faculty member specializing in logistics operations, coordination, and administrative support functions. She delivers concept-driven, industry-relevant training that builds operational accuracy and process efficiency in her students. At Logistics Gurukul, Isabella guides learners through core logistics modules and real-world industry practices, preparing them with the confidence and competence needed for entry-level roles in the supply chain sector.",
    },
    {
        name: "Karthik Nair",
        role: "AI & Software Trainer",
        specialization: "AI Applications for Logistics & Supply Chain",
        image: "/faculty-images/karthik-nair.jpg",
        description:
            "Bridging the gap between technology and trade, Karthik Nair holds a Master's in Computer Science with specialization in Deep Learning and Artificial Intelligence, along with strong hands-on experience in software development. He brings this technical depth into the logistics classroom, showing students how AI tools, automation, and data-driven systems are transforming shipment tracking, supply chain visibility, and freight documentation. At Logistics Gurukul, Karthik trains students to apply AI and software skills to real-world logistics operations, preparing them for a shipping industry that increasingly runs on smart, tech-enabled systems.",
    },
];

function initials(name: string) {
    return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

function FacultyCard({ member, index }: { member: Faculty; index: number }) {
    // Falls back to an initials avatar until the photograph is supplied.
    const [hasImage, setHasImage] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
        >
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 flex items-center justify-center">
                {hasImage ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        onError={() => setHasImage(false)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-blue-50">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-black font-heading">
                            {initials(member.name)}
                        </div>
                        <span className="text-slate-400 text-xs font-medium">Photograph coming soon</span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="font-bold text-slate-900 text-xl font-heading">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-slate-500 text-xs mt-1.5 italic">{member.specialization}</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">{member.description}</p>
            </div>
        </motion.div>
    );
}

export default function FacultyTeam() {
    return (
        <section id="faculty" className="py-16 md:py-24 bg-white border-t border-slate-200 scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-4 uppercase">
                        Our Expert Mentors
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-4">
                        Faculty <span className="text-blue-600">Team</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        The trainers who guide our students through every module, from core logistics to AI-enabled operations.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {faculty.map((member, idx) => (
                        <FacultyCard key={member.name} member={member} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
