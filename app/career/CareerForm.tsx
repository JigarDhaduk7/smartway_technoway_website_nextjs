'use client';

import React, { useRef, useState } from 'react';
import { FileUp, Send, X } from 'lucide-react';
import { submitFormData } from '../../lib/api';
import SectionHeading from '../component/ui/SectionHeading';
import { Reveal } from '../component/ui/Reveal';
import Button from '../component/ui/Button';

const fieldCls =
  'w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-fg placeholder:text-subtle outline-none transition-[border-color,background,box-shadow] duration-300 focus:border-brand-bright focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(61,123,255,0.15)]';
const labelCls = 'mb-2 block text-sm font-medium text-fg/90';

export default function CareerForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        about: '',
        resume: null as File | null
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [dragging, setDragging] = useState(false);
    const fileInput = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const acceptFile = (file: File | undefined) => {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            setMessage('File size must be less than 5MB');
            if (fileInput.current) fileInput.current.value = '';
            return;
        }
        setMessage('');
        setFormData(prev => ({ ...prev, resume: file }));
    };

    const clearFile = () => {
        setFormData(prev => ({ ...prev, resume: null }));
        if (fileInput.current) fileInput.current.value = '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.resume) {
            setMessage('Please select a resume file');
            return;
        }

        setLoading(true);
        setMessage('');

        const formDataToSend = new FormData();
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('about', formData.about);
        formDataToSend.append('resume', formData.resume, formData.resume.name);

        try {
            const result = await submitFormData('job/apply', formDataToSend);
            if (result.success) {
                setMessage('Application submitted successfully!');
                setFormData({ fullName: '', email: '', subject: '', about: '', resume: null });
                if (fileInput.current) fileInput.current.value = '';
            } else {
                setMessage(result.message || 'Failed to submit application');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const success = message.includes('success');

    return (
        <section id="ApplyForCareer" className="relative py-20 md:py-28">
            <div className="pointer-events-none absolute top-1/4 right-0 size-[500px] rounded-full bg-brand/20 blur-[150px]" />
            <div className="container-x relative grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <SectionHeading
                        align="left"
                        eyebrow="Apply"
                        title="Come to Join Us!"
                        description="From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises."
                    />
                </div>
                <Reveal className="lg:col-span-8">
                    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[28px] border border-line bg-surface/70 p-6 backdrop-blur md:grid-cols-2 md:p-10">
                        <div>
                            <label htmlFor="cr-name" className={labelCls}>Full name *</label>
                            <input id="cr-name" type="text" name="fullName" autoComplete="name" value={formData.fullName} onChange={handleChange} className={fieldCls} placeholder="Enter Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="cr-email" className={labelCls}>Contact email *</label>
                            <input id="cr-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className={fieldCls} placeholder="you@example.com" required />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="cr-subject" className={labelCls}>Subject *</label>
                            <input id="cr-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} className={fieldCls} placeholder="UI Designer" required />
                        </div>
                        <div className="md:col-span-2">
                            <span className={labelCls}>Resume *</span>
                            <label
                                htmlFor="cr-resume"
                                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                                onDragLeave={() => setDragging(false)}
                                onDrop={(e) => { e.preventDefault(); setDragging(false); acceptFile(e.dataTransfer.files?.[0]); }}
                                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-6 py-8 text-center transition-colors ${dragging ? 'border-cyan bg-cyan/10' : 'border-line-strong bg-white/[0.02] hover:border-brand-bright'}`}
                            >
                                <FileUp className="size-7 text-cyan" aria-hidden />
                                {formData.resume ? (
                                    <span className="flex items-center gap-2 text-sm text-fg">
                                        {formData.resume.name}
                                        <button type="button" aria-label="Remove file" onClick={(e) => { e.preventDefault(); clearFile(); }} className="grid size-7 place-items-center rounded-full hover:bg-white/10">
                                            <X className="size-4" />
                                        </button>
                                    </span>
                                ) : (
                                    <>
                                        <span className="text-sm text-fg">Drop your resume here or <span className="text-cyan underline underline-offset-4">browse</span></span>
                                        <span className="text-xs text-subtle">PDF, JPG or PNG — up to 5MB</span>
                                    </>
                                )}
                            </label>
                            <input id="cr-resume" ref={fileInput} className="sr-only" type="file" onChange={(e) => acceptFile(e.target.files?.[0])} accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="cr-about" className={labelCls}>Tell us a bit about you *</label>
                            <textarea id="cr-about" name="about" value={formData.about} onChange={handleChange} className={`${fieldCls} resize-none`} rows={5} placeholder="Let us know" required />
                        </div>
                        <p className="text-sm text-subtle md:col-span-2">By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                        {message && (
                            <p role="status" className={`rounded-xl px-4 py-3 text-sm md:col-span-2 ${success ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'}`}>
                                {message}
                            </p>
                        )}
                        <div className="md:col-span-2">
                            <Button type="submit" disabled={loading}>
                                <span className="inline-flex items-center gap-2"><Send className="size-4" /> {loading ? 'Submitting...' : 'Apply Now'}</span>
                            </Button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
