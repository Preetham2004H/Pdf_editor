import { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend API
        setSent(true);
    };

    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Get in touch with PDFMaster Pro team. We'd love to hear your feedback, questions, or suggestions."
                path="/contact"
            />
            <section className="section-padding">
                <div className="container-main max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-3">Contact <span className="gradient-text">Us</span></h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">Have a question or feedback? We'd love to hear from you.</p>

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-card p-12 text-center"
                            >
                                <div className="text-5xl mb-4">✉️</div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Message Sent!</h2>
                                <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Name</label>
                                        <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Email</label>
                                        <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Subject</label>
                                    <input type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Message</label>
                                    <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-y" placeholder="Tell us more..." />
                                </div>
                                <button type="submit" className="btn-primary w-full !py-4">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
