import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function RefundPolicy() {
    return (
        <>
            <SEOHead
                title="Refund & Billing Policy – 100% Free PDF Tools"
                description="Read our refund and billing policy at PDFHelperEdit. All our PDF tools are 100% free with no hidden charges, no subscriptions, and no credit card required."
                keywords="pdf tools refund policy, free pdf tools billing, PDFHelperEdit no charges, free online pdf editor"
                path="/refund-policy"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Refund & <span className="gradient-text">Billing Policy</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

                        <div className="glass-card p-8 space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">1. Our "100% Free" Guarantee</h2>
                                <p className="mb-4 text-lg font-medium text-primary">At PDFHelperEdit, we believe essential PDF tools should be free for everyone.</p>
                                <p>All services and tools provided on <strong>pdfhelperedit.online</strong> are completely free of charge. We do not offer any "Premium" plans, "Pro" versions, or subscription-based services. Every feature you see is available to all users at zero cost.</p>
                            </div>

                            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-green-400 flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    No Hidden Charges
                                </h3>
                                <p className="text-sm">We will <strong>NEVER</strong> ask for your credit card information, bank details, or any form of payment. If you encounter any website claiming to be PDFHelperEdit that asks for payment, please exit immediately — it is not us.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. Refund Eligibility</h2>
                                <p>Since we do not charge for any of our services, there are no financial transactions between PDFHelperEdit and its users. Consequently, there are no refunds to process. We do not maintain any billing systems or payment gateways.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. How We Sustain the Platform</h2>
                                <p>To keep these tools free and maintain our servers, we display non-intrusive advertisements (Google AdSense). These ads are our only source of revenue and allow us to provide professional-grade PDF tools without charging our users. We are committed to ensuring these ads do not interfere with your productivity.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. Third-Party Links & Ads</h2>
                                <p>While using PDFHelperEdit, you may see links to third-party services or advertisements. Any transaction you enter into with a third party discovered through our platform is strictly between you and that third party. We are not responsible for any payments, subscriptions, or refunds related to third-party services.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Security of Information</h2>
                                <p>Because we do not handle payments, your sensitive financial data is never collected, stored, or processed by us. This significantly reduces your security risk. All PDF processing happens over encrypted connections or directly in your browser.</p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Questions?</h2>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Billing Inquiries</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-100">billing@pdfhelperedit.online</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">General Support</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-100">contact@pdfhelperedit.online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
