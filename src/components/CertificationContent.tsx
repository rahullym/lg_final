import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Star,
  Award,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Quote,
} from "lucide-react";

export default function CertificationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Govt. of India Recognized",
      desc: "Fully registered under the Ministry of MSME, Ministry of Labour & Employment, and Planning Commission.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Validity",
      desc: "Internationally accredited by IAF, EIAC, & UAF. Your credentials act as a global passport for careers abroad.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Industry Gold Standard",
      desc: "ISO 9001:2015 certified. A trusted merit-based credential validating high-value competency to top employers.",
    },
  ];

  const faqs = [
    {
      question:
        "How do international accreditations benefit students working abroad?",
      answer:
        "International accreditations provide a globally recognized framework, making qualifications portable. Benefits include global standardization through ISO 9001:2015 and IAF membership, ease of verification via dynamic QR codes, and regional credibility with bodies like EIAC (Gulf) and UAF (US). This ensures your skills are trusted across borders.",
    },
    {
      question:
        "How does the IAF affiliation assist with global job placements?",
      answer:
        "The IAF (International Accreditation Forum) affiliation ensures mutual recognition across member countries, reducing the need for redundant local certifications. It acts as a 'global passport,' validating that your training meets rigorous international quality standards trusted by global employers.",
    },
    {
      question:
        "Can certificates be verified digitally by international employers?",
      answer:
        "Yes. Every certificate features a Unique Identification Number and a Dynamic QR-Code for instant digital authentication. This high-security design, along with holographic features, ensures your credentials are tamper-proof and easily verifiable by international recruiters.",
    },
    {
      question: "What role does the Emirates Accreditation Centre (EIAC) play?",
      answer:
        "The EIAC provides specific regional credibility for the Gulf region. Its logo on STED certificates signals adherence to quality standards recognized in the UAE, facilitating smoother employment processes for students seeking careers in the Middle East.",
    },
    {
      question: "Does STED provide government-backed certificates?",
      answer:
        "Yes. The STED Council is a National Autonomous Body and Resource NGO to the Govt. of India. Its certificates are recognized by the Ministry of MSME and Ministry of Labour & Employment, making them valid for employment exchanges and professional use both in India and internationally.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      {/* Key Benefits Grid */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Info Section */}
      <div id="sted" className="bg-white py-24 border-y border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 mb-6 p-3 pr-5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <img
                  src="/images/sted-logo.png"
                  alt="STED Council — Approved Center"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Accredited By</div>
                  <div className="text-sm font-bold text-slate-900">STED Council</div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">
                Why choose a{" "}
                <span className="text-blue-600">STED Certification?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Designed to bypass traditional academic rigidities, our
                industry-aligned curriculum bridges the skill gap for immediate
                hiring in specialized fields like Logistics and Freight
                Management.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Recognized by Ministry of MSME & Labour.",
                  "Accredited by IAF, IAS, & USAS (USA).",
                  "Tamper-proof with Dynamic QR Code Security.",
                  "Accepted in 150+ countries via MLA arrangement.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-sm font-bold text-slate-500 uppercase mb-2">
                  Verification Links
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    id="cert-sted-home-link"
                    href="https://www.stedcouncil.com/STED/home.php#hm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Official STED Council Home
                  </a>
                  <a
                    id="cert-view-accreditations-link"
                    href="https://www.stedcouncil.com/STED/accredition.php#acradtn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    View Accreditations
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3 scale-95" />
              <div className="relative bg-slate-900 text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  A Global Passport for Your Career
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  "Thanks to the IAF Multilateral Recognition Arrangement, your
                  credentials are recognized as equivalent across diverse
                  international regulatory environments."
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    ISO 9001:2015
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    IAF Member
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    EIAC Accredited
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FICS UK Info Section */}
      <div id="fics" className="bg-slate-50 py-24 border-b border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 mb-6 p-3 pr-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <img
                  src="/images/fics-logo.png"
                  alt="FICS UK — Forum for International Certified Scholars"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Accredited By</div>
                  <div className="text-sm font-bold text-slate-900">FICS UK</div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">
                International Certification by{" "}
                <span className="text-blue-600">FICS UK</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                FICS (Forum for International Certified Scholars) is a prominent
                UK-based association providing performance-based certification
                exams and professional qualifications globally.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Accredited by a prominent UK institution.",
                  "Focuses on professional excellence and job-related skills.",
                  "Empowers students with up-to-date, industry-relevant knowledge.",
                  "Global acceleration through practice test solutions.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-white rounded-2xl border border-slate-200">
                <p className="text-sm font-bold text-slate-500 uppercase mb-2">
                  Verification & More info
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    id="cert-fics-home-link"
                    href="https://ficsuk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    FICS Official Website
                  </a>
                  <a
                    id="cert-fics-verify-link"
                    href="https://ficsuk.com/verify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Verify FICS Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-emerald-600/5 rounded-3xl transform -rotate-3 scale-95" />
              <div className="relative bg-slate-900 text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Globe className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  UK Standard Education
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  "We believe that academic courses should bear social
                  relevance. Our internationally recognised programs are
                  designed to impart in-depth knowledge and give mastery over
                  relevant subjects."
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    UK Registered
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    Global Reach
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                    Skill-Oriented
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  id={`cert-faq-toggle-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
