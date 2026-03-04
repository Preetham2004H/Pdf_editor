import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Get in touch with Preetham H, the creator of DonPDF. We'd love to hear your feedback, questions, or suggestions about our free PDF tools."
                keywords="contact donpdf, pdf tool support, preetham, feedback"
                path="/contact"
            />
            <section className="section-padding">
                <div className="container-main max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-3">Get In <span className="gradient-text">Touch</span></h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-10">
                            Have a question, suggestion, or feedback? We'd love to hear from you. Reach out directly via email below.
                        </p>

                        <div className="glass-card p-8 space-y-8">
                            {/* Owner Info */}
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                                    PH
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Creator & Owner</p>
                                    <p className="text-xl font-bold text-gray-800 dark:text-gray-100">Preetham H</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI & Data Science Graduate · DonPDF</p>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* Email */}
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                                    <a
                                        href="mailto:preetham171977@gmail.com?subject=Feedback for DonPDF"
                                        className="text-primary font-semibold hover:underline text-lg break-all"
                                    >
                                        preetham171977@gmail.com
                                    </a>
                                    <p className="text-xs text-gray-400 mt-1">We typically respond within 24–48 hours.</p>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* CTA Button */}
                            <div className="text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                                    Click below to open your email app and send us a message directly.
                                </p>
                                <a
                                    href="mailto:preetham171977@gmail.com?subject=Feedback for DonPDF&body=Hi Preetham,"
                                    className="btn-primary !px-10 !py-4 !text-base !rounded-2xl inline-flex items-center gap-3"
                                    id="contact-email-btn"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    Send Us an Email
                                </a>
                            </div>
                        </div>

                        {/* DMCA note */}
                        <div className="mt-6 glass-card p-5 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                For <strong className="text-gray-700 dark:text-gray-300">DMCA / copyright</strong> requests, please include "DMCA" in the subject line of your email.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
