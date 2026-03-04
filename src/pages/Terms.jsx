import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Terms() {
    return (
        <>
            <SEOHead
                title="Terms & Conditions"
                description="DonPDF Terms and Conditions. Read our terms of service before using our free PDF tools. Includes user responsibility, file privacy, and limitations of liability."
                keywords="donpdf terms conditions, pdf tool terms of service, user agreement"
                path="/terms"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Terms & <span className="gradient-text">Conditions</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. Acceptance of Terms</h2>
                                <p>By accessing and using DonPDF ("Service"), available at donpdf.com, you agree to be legally bound by these Terms and Conditions ("Terms"). These Terms apply to all visitors, users, and others who access the Service. If you do not agree with any part of these Terms, please do not use our Service.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. Description of Service</h2>
                                <p>DonPDF provides free, browser-based PDF tools including but not limited to: PDF compression, PDF merging, PDF splitting, image-to-PDF conversion, PDF-to-image conversion, watermark addition, watermark removal, and page removal. These tools are provided free of charge for personal and professional use.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. User Responsibility</h2>
                                <p className="mb-3">By using DonPDF, you agree to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                                    <li>Not upload files containing illegal content, malware, viruses, or harmful code</li>
                                    <li>Not use the Service to process copyrighted material without proper authorization</li>
                                    <li>Not attempt to circumvent, disable, or interfere with the security features of the Service</li>
                                    <li>Not use automated scripts, bots, or tools to excessively use or abuse the Service</li>
                                    <li>Ensure you have the legal right to process any files you upload</li>
                                    <li>Be solely responsible for the content of files you upload and process</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. File Privacy & Processing</h2>
                                <p className="mb-3">Regarding file privacy and processing:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Most PDF operations are processed directly in your browser — your files never leave your device</li>
                                    <li>For server-side processing, files are transmitted via encrypted HTTPS connections</li>
                                    <li>Files uploaded to our servers are automatically and permanently deleted within 30 minutes of processing</li>
                                    <li>We do not access, read, or distribute the content of your files</li>
                                    <li>You are responsible for downloading your processed files before they are automatically deleted</li>
                                    <li>We strongly recommend keeping backup copies of all original files before processing</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Service Limitations</h2>
                                <p className="mb-3">The following limitations apply to our Service:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Maximum file size: 100MB per file upload</li>
                                    <li>Files are automatically deleted from our servers 30 minutes after processing</li>
                                    <li>We reserve the right to limit usage to prevent abuse or server overload</li>
                                    <li>Service may be temporarily unavailable due to maintenance or technical issues</li>
                                    <li>We reserve the right to modify, suspend, or discontinue any tool or feature at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. Intellectual Property</h2>
                                <p>All content, design, functionality, code, and branding of DonPDF — including but not limited to logos, text, graphics, and software — are owned by DonPDF and protected by applicable intellectual property laws. You retain full ownership of all files you process using our tools. No transfer of intellectual property rights occurs through your use of the Service.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. Disclaimer of Warranties</h2>
                                <p>The Service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>Warranties of merchantability or fitness for a particular purpose</li>
                                    <li>Warranties that the Service will be uninterrupted, error-free, or virus-free</li>
                                    <li>Warranties regarding the accuracy or reliability of processing results</li>
                                </ul>
                                <p className="mt-3">We make no guarantee that every file will be processed without errors or data loss. Always maintain backup copies of important documents.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">8. Limitation of Liability</h2>
                                <p>To the fullest extent permitted by applicable law, DonPDF and its operators shall not be liable for any:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>Direct, indirect, incidental, special, or consequential damages</li>
                                    <li>Loss of data, profits, business, or goodwill</li>
                                    <li>File corruption, processing errors, or service interruptions</li>
                                    <li>Damages arising from unauthorized access to or alteration of your files</li>
                                </ul>
                                <p className="mt-3">This limitation applies whether the claim is based on warranty, contract, tort, or any other legal theory, even if DonPDF has been advised of the possibility of such damages.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">9. Service Disclaimer</h2>
                                <p>DonPDF tools are provided for general utility purposes. We do not guarantee:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>That results will meet your specific requirements or expectations</li>
                                    <li>That compressed files will achieve a specific size reduction</li>
                                    <li>That merged or split files will maintain all original formatting in all PDF viewers</li>
                                    <li>Continuous, uninterrupted availability of any particular tool</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">10. Governing Law</h2>
                                <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">11. Changes to Terms</h2>
                                <p>We reserve the right to modify these Terms at any time. We will update the "Last updated" date at the top of this page when changes are made. Your continued use of DonPDF after any changes constitutes acceptance of the updated Terms.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">12. Contact Us</h2>
                                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                                <p className="mt-2"><strong>Email:</strong> legal@donpdf.com</p>
                                <p><strong>Website:</strong> <a href="https://donpdf.com" className="text-primary hover:underline">donpdf.com</a></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
