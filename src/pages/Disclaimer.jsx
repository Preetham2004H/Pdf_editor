import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Disclaimer() {
    return (
        <>
            <SEOHead
                title="Disclaimer & DMCA"
                description="DonPDF Disclaimer and DMCA Policy. Read about our liability limitations, copyright policies, and how to submit DMCA takedown requests."
                keywords="donpdf disclaimer, dmca policy, copyright, liability limitation"
                path="/disclaimer"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Disclaimer & <span className="gradient-text">DMCA</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. General Disclaimer</h2>
                                <p>The information and tools provided on DonPDF (donpdf.com) are for general informational and utility purposes only. While we strive to provide accurate, up-to-date, and functional tools, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, tools, or services contained on this website.</p>
                                <p className="mt-3">Any reliance you place on such information or tools is strictly at your own risk. DonPDF shall not be liable for any loss or damage arising from the use of our website or tools, including but not limited to data loss, file corruption, or service interruptions.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. File Processing Disclaimer</h2>
                                <p>DonPDF provides PDF manipulation tools on an "as is" basis. While we make every effort to ensure accurate file processing:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>We cannot guarantee that every file will be processed without errors</li>
                                    <li>Results may vary depending on the complexity and format of your PDF files</li>
                                    <li>Users are strongly advised to keep backup copies of their original files before processing</li>
                                    <li>We are not responsible for any data loss, file corruption, or other issues that may occur during processing</li>
                                    <li>Some PDF files with advanced security features or non-standard formatting may not process correctly</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. Copyright Notice</h2>
                                <p>All content on DonPDF — including text, graphics, logos, icons, images, and software — is the property of DonPDF and is protected by international copyright laws. Unauthorized reproduction, distribution, or modification of any content on this website is strictly prohibited without prior written consent from DonPDF.</p>
                                <p className="mt-3">Users retain full copyright ownership of all files they upload and process through DonPDF. We claim no ownership or rights over any files you process using our tools.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. DMCA Policy</h2>
                                <p>DonPDF respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). We respond promptly to valid notices of alleged copyright infringement.</p>
                                <p className="mt-3">If you believe that any content on our website infringes your copyright, please submit a written DMCA notice to our designated agent at <strong>dmca@donpdf.com</strong> with the following information:</p>
                                <ul className="list-disc pl-6 mt-3 space-y-2">
                                    <li>A description of the copyrighted work you claim has been infringed</li>
                                    <li>The specific URL or location on our website where the allegedly infringing material is located</li>
                                    <li>Your contact information: full name, address, telephone number, and email address</li>
                                    <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law</li>
                                    <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on their behalf</li>
                                    <li>Your physical or electronic signature</li>
                                </ul>
                                <p className="mt-3">Upon receipt of a valid DMCA notice, we will act expeditiously to remove or disable access to the allegedly infringing content and notify the affected party.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Third-Party Links Disclaimer</h2>
                                <p>DonPDF may contain links to third-party websites or services. These links are provided for your convenience and informational purposes only. We have no control over and assume no responsibility for the content, privacy policies, security, or practices of any third-party websites or services.</p>
                                <p className="mt-3">We do not endorse or make any representations about third-party websites. Your access to and use of third-party sites is at your own risk.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. Advertising Disclaimer</h2>
                                <p>DonPDF displays advertisements provided by Google AdSense and other third-party advertising networks. These advertisements are clearly identified and are not endorsements of the products or services advertised.</p>
                                <p className="mt-3">We are not responsible for the content, accuracy, or opinions expressed in such advertisements. Any transactions between you and advertisers are solely between you and the advertiser. We encourage you to review advertiser terms before engaging with any third-party products or services.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. Contact Us</h2>
                                <p>If you have questions about this disclaimer or need to submit a DMCA notice, please contact us at:</p>
                                <p className="mt-2"><strong>DMCA / Legal:</strong> dmca@donpdf.com</p>
                                <p><strong>General Contact:</strong> contact@donpdf.com</p>
                                <p><strong>Website:</strong> <a href="https://donpdf.com" className="text-primary hover:underline">donpdf.com</a></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
