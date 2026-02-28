import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Terms() {
    return (
        <>
            <SEOHead
                title="Terms & Conditions"
                description="PDFHelper Terms and Conditions. Read our terms of service before using our free PDF tools."
                path="/terms"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Terms & <span className="gradient-text">Conditions</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. Acceptance of Terms</h2>
                                <p>By accessing and using PDFHelper, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our service.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. Use of Service</h2>
                                <p>PDFHelper provides free online PDF tools. You agree to use these tools only for lawful purposes. You must not use our service to process files containing illegal content, malware, or copyrighted material without authorization.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. File Processing</h2>
                                <p>Files uploaded to our service are processed temporarily and deleted automatically within 30 minutes. We make no guarantees about the availability or permanence of processed files. You are responsible for downloading your files before they are deleted.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. Limitations</h2>
                                <p>Maximum file size is limited to 100MB per file. We reserve the right to limit usage, modify features, or restrict access to prevent abuse of our service. Our tools are provided "as is" without warranty of any kind.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Intellectual Property</h2>
                                <p>All content, design, and functionality of PDFHelper are owned by us and protected by copyright laws. You retain full ownership of all files you process using our tools.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. Limitation of Liability</h2>
                                <p>PDFHelper shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our service. This includes but is not limited to data loss, service interruptions, or processing errors.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. Changes to Terms</h2>
                                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
