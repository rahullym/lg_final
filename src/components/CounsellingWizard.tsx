import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronRightIcon, ChevronLeftIcon, CheckCircleIcon, UserIcon, PhoneIcon, AcademicCapIcon, CalendarIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface WizardProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CounsellingWizard({ isOpen, onClose }: WizardProps) {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        qualification: '',
        currentStatus: '',
        interest: 'Diploma in Logistics',
        preferredTime: 'Morning'
    });

    const totalSteps = 3;

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsSubmitted(false);
        }
    }, [isOpen]);

    const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            // onClose();
        }, 3000);
    };

    const updateData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    {/* Close Button */}
                    <button
                        id="wizard-close-button"
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-8 md:right-8 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                    >
                        <XMarkIcon className="w-6 h-6 text-slate-400" />
                    </button>

                    {!isSubmitted ? (
                        <>
                            {/* Progress Header */}
                            <div className="pt-12 md:pt-16 px-6 md:px-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map((s) => (
                                            <div
                                                key={s}
                                                className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'w-8 bg-brand-blue' : 'w-4 bg-slate-100'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Step {step} of {totalSteps}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading tracking-tight mb-2">
                                    {step === 1 && "Let's get started"}
                                    {step === 2 && "Educational Background"}
                                    {step === 3 && "Final Details"}
                                </h2>
                                <p className="text-slate-500 text-sm">
                                    {step === 1 && "Basic contact information to reach you."}
                                    {step === 2 && "Tell us a bit about your journey so far."}
                                    {step === 3 && "When would you like our expert to call?"}
                                </p>
                            </div>

                            {/* Wizard Content */}
                            <div className="p-6 md:p-10">
                                <form onSubmit={handleSubmit}>
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-4"
                                            >
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Full Name</label>
                                                    <div className="relative">
                                                        <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                        <input
                                                            type="text"
                                                            required
                                                            placeholder="Enter your name"
                                                            value={formData.name}
                                                            onChange={(e) => updateData('name', e.target.value)}
                                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Phone Number</label>
                                                    <div className="relative">
                                                        <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                        <input
                                                            type="tel"
                                                            required
                                                            placeholder="+91 00000 00000"
                                                            value={formData.phone}
                                                            onChange={(e) => updateData('phone', e.target.value)}
                                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-4"
                                            >
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Highest Qualification</label>
                                                    <div className="relative">
                                                        <AcademicCapIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                        <select
                                                            required
                                                            value={formData.qualification}
                                                            onChange={(e) => updateData('qualification', e.target.value)}
                                                            className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue appearance-none transition-all font-medium"
                                                        >
                                                            <option value="">Select Qualification</option>
                                                            <option value="Degree">Degree / PG</option>
                                                            <option value="Diploma">Diploma</option>
                                                            <option value="Plus Two">+2 / HSE</option>
                                                        </select>
                                                        <ChevronRightIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90" />
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Current Status</label>
                                                    <div className="relative">
                                                        <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                        <select
                                                            required
                                                            value={formData.currentStatus}
                                                            onChange={(e) => updateData('currentStatus', e.target.value)}
                                                            className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue appearance-none transition-all font-medium"
                                                        >
                                                            <option value="">Select Status</option>
                                                            <option value="Student">Student (Pursuing Degree)</option>
                                                            <option value="Fresher">Degree Holder / Fresher</option>
                                                            <option value="Professional">Working Professional</option>
                                                            <option value="PlusTwoExp">Plus Two (with Work Experience)</option>
                                                            <option value="Break">On Career Break / Seeking Job</option>
                                                        </select>
                                                        <ChevronRightIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-4"
                                            >
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Course Interest</label>
                                                    <select
                                                        value={formData.interest}
                                                        onChange={(e) => updateData('interest', e.target.value)}
                                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue appearance-none font-medium transition-all"
                                                    >
                                                        <option>Diploma in Logistics</option>
                                                        <option>Supply Chain Management</option>
                                                        <option>Warehouse Operations</option>
                                                    </select>
                                                </div>
                                                <div className="relative">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Preferred Call Time</label>
                                                    <div className="flex items-center gap-3">
                                                        <CalendarIcon className="w-5 h-5 text-slate-400" />
                                                        <div className="flex-1 grid grid-cols-3 gap-2">
                                                            {['Morning', 'Afternoon', 'Evening'].map((time) => (
                                                                <button
                                                                    key={time}
                                                                    id={`wizard-time-select-${time.toLowerCase()}`}
                                                                    type="button"
                                                                    onClick={() => updateData('preferredTime', time)}
                                                                    className={`py-2 px-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all ${formData.preferredTime === time ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-200'}`}
                                                                >
                                                                    {time}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Navigation Buttons */}
                                    <div className="mt-8 flex gap-3">
                                        {step > 1 && (
                                            <button
                                                id="wizard-back-button"
                                                type="button"
                                                onClick={handleBack}
                                                className="flex-1 py-4 px-6 border border-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                            >
                                                <ChevronLeftIcon className="w-4 h-4" /> Back
                                            </button>
                                        )}
                                        {step < totalSteps ? (
                                            <button
                                                id="wizard-next-button"
                                                type="button"
                                                disabled={step === 1 ? (!formData.name || !formData.phone) : step === 2 ? !formData.qualification : false}
                                                onClick={handleNext}
                                                className="flex-[2] py-4 px-6 bg-brand-blue text-white font-bold rounded-2xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2"
                                            >
                                                Continue <ChevronRightIcon className="w-4 h-4 font-black" />
                                            </button>
                                        ) : (
                                            <button
                                                id="wizard-submit-button"
                                                type="submit"
                                                className="flex-[2] py-4 px-6 bg-brand-blue text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2"
                                            >
                                                Book Free Session
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        /* Success Screen */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-12 text-center"
                        >
                            <div className="w-24 h-24 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <CheckCircleIcon className="w-16 h-16" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 font-heading tracking-tight mb-4">
                                Request Received!
                            </h2>
                            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                                Thank you, <span className="text-brand-blue font-bold">{formData.name.split(' ')[0]}</span>. One of our senior career experts will call you during the <span className="font-bold text-slate-900 text-lowercase">{formData.preferredTime}</span> to guide you.
                            </p>
                            <button
                                id="wizard-success-close"
                                onClick={onClose}
                                className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                            >
                                Close Window
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
