import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
    return (
        <>
            <SEOHead
                title="Privacy Policy"
                description="PDFMaster Pro Privacy Policy. Learn how we handle your data and protect your privacy."
                path="/privacy"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Privacy <span className="gradient-text">Policy</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. Information We Collect</h2>
                                <p>PDFMaster Pro is designed with privacy in mind. We process your PDF files directly in your browser whenever possible. We do not permanently store any files you upload. When server-side processing is required, files are automatically deleted within 30 minutes of processing.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. How We Use Your Information</h2>
                                <p>We use anonymous analytics data to improve our services and understand how users interact with our tools. We do not sell, trade, or transfer your personal information to third parties. We may use cookies to enhance your browsing experience and serve relevant advertisements through Google AdSense.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. File Security</h2>
                                <p>All file transfers are encrypted using HTTPS. Files uploaded for server-side processing are stored temporarily in secure, isolated environments and are automatically deleted after 30 minutes. We do not access, read, or analyze the content of your files.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. Cookies & Advertising</h2>
                                <p>We use cookies for essential site functionality, theme preferences, and analytics. Third-party advertising partners, including Google AdSense, may use cookies to serve personalized ads. You can manage your cookie preferences through our cookie consent banner or your browser settings.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. GDPR Compliance</h2>
                                <p>If you're a European Union resident, you have the right to access, rectify, or delete your personal data. You can also object to processing or request data portability. Contact us at privacy@pdfmasterpro.com for any GDPR-related requests.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. Changes to This Policy</h2>
                                <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the updated policy.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. Contact Us</h2>
                                <p>If you have any questions about this privacy policy, please contact us at privacy@pdfmasterpro.com.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
