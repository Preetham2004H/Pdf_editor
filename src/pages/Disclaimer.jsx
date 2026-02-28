import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Disclaimer() {
    return (
        <>
            <SEOHead
                title="Disclaimer & DMCA"
                description="PDFHelper Disclaimer and DMCA Policy. Read about our liability limitations, copyright policies, and third-party content disclaimers."
                path="/disclaimer"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Disclaimer & <span className="gradient-text">DMCA</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. General Disclaimer</h2>
                                <p>The information and tools provided on PDFHelper are for general informational and utility purposes only. While we strive to provide accurate, up-to-date, and functional tools, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, tools, or services contained on this website.</p>
                                <p className="mt-3">Any reliance you place on such information or tools is strictly at your own risk. We shall not be liable for any loss or damage arising from the use of our website or tools.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. DMCA Policy</h2>
                                <p>PDFHelper respects the intellectual property rights of others. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to notices of alleged copyright infringement.</p>
                                <p className="mt-3">If you believe that any content on our website infringes your copyright, please send a written notice to our designated DMCA agent at <strong>dmca@pdfmasterpro.com</strong> with the following information:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>A description of the copyrighted work you claim has been infringed</li>
                                    <li>The URL or location on our website where the infringing material is located</li>
                                    <li>Your contact information (name, address, telephone number, and email)</li>
                                    <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                                    <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on their behalf</li>
                                    <li>Your physical or electronic signature</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. Copyright Notice</h2>
                                <p>All content on PDFHelper, including text, graphics, logos, icons, images, and software, is the property of PDFHelper and is protected by international copyright laws. Unauthorized reproduction, distribution, or modification of any content on this website is strictly prohibited without prior written consent.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. Third-Party Links</h2>
                                <p>Our website may contain links to third-party websites or services that are not owned or controlled by PDFHelper. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that PDFHelper shall not be responsible or liable for any damage or loss caused by the use of any such content or services.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Advertising Disclaimer</h2>
                                <p>PDFHelper displays advertisements provided by third-party advertising networks, including Google AdSense. These advertisements are not endorsements of the products or services advertised. We are not responsible for the content, accuracy, or opinions expressed in such advertisements, and any transactions between you and advertisers are solely between you and the advertiser.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. File Processing Disclaimer</h2>
                                <p>PDFHelper provides PDF manipulation tools on an "as is" basis. While we make every effort to ensure accurate file processing, we cannot guarantee that every file will be processed without errors. Users are advised to keep backup copies of their original files before processing. We are not responsible for any data loss, file corruption, or other issues that may occur during processing.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. Contact Us</h2>
                                <p>If you have any questions about this disclaimer or need to submit a DMCA notice, please contact us at <strong>legal@pdfmasterpro.com</strong>.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
