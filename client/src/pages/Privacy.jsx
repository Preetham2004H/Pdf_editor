import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
    return (
        <>
            <SEOHead
                title="Privacy Policy"
                description="PDFHelperEdit Privacy Policy – Learn how we protect your data, handle files, and comply with Google Analytics, AdSense, and GDPR requirements."
                keywords="PDFHelperEdit privacy policy, pdf tool privacy, data protection, adsense compliant privacy policy"
                path="/privacy"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Privacy <span className="gradient-text">Policy</span></h1>
                        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

                        <div className="glass-card p-8 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Introduction</h2>
                                <p>Welcome to PDFHelperEdit ("we," "our," or "us"). PDFHelperEdit is a free online PDF editing and compression platform available at pdfhelperedit.online. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. By using PDFHelperEdit, you consent to the practices described in this policy.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">1. Information We Collect</h2>
                                <p className="mb-3">PDFHelperEdit is designed with privacy as a core principle. We collect the following types of information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Usage Data:</strong> We collect anonymous usage data such as pages visited, tools used, and browser type through Google Analytics.</li>
                                    <li><strong>Log Data:</strong> Our servers automatically record standard log information including IP address, browser type, referring pages, and timestamps.</li>
                                    <li><strong>Cookies:</strong> We use cookies for essential site functionality, theme preferences, and third-party advertising.</li>
                                    <li><strong>Uploaded Files:</strong> Files you upload for processing are handled temporarily and never stored permanently on our servers.</li>
                                </ul>
                                <p className="mt-3">We do <strong>not</strong> collect your name, email address, or any personally identifiable information unless you voluntarily contact us.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">2. File Security & Processing</h2>
                                <p className="mb-3">Your file security is our top priority:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Most PDF operations run entirely in your browser (client-side) — your files never leave your device.</li>
                                    <li>For server-side operations, all file transfers are encrypted using HTTPS/TLS.</li>
                                    <li>Files uploaded to our servers are stored in isolated, secure environments and are <strong>automatically deleted within 30 minutes</strong> of processing.</li>
                                    <li>We do not access, read, analyze, or share the content of your files with any third party.</li>
                                    <li>We do not permanently store any files you upload to PDFHelperEdit.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">3. Google Analytics</h2>
                                <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects anonymous data about your usage patterns, device type, geographic location (at country/city level), and session duration. This data helps us improve our tools and user experience.</p>
                                <p className="mt-3">Google Analytics uses cookies to identify returning visitors. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">4. Google AdSense & Advertising</h2>
                                <p>We use Google AdSense to display advertisements on PDFHelperEdit. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet.</p>
                                <p className="mt-3">Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>
                                <p className="mt-3">Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutads.info</a>.</p>
                                <p className="mt-3">Third-party vendors, including Google, use cookies to serve ads based on prior visits. For more information on how Google uses data when you use our website, please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How Google uses data when you use our partners' sites or apps</a>.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5. Cookies Policy</h2>
                                <p className="mb-3">We use the following types of cookies:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., theme preferences).</li>
                                    <li><strong>Analytics Cookies:</strong> Used by Google Analytics to track anonymous usage statistics.</li>
                                    <li><strong>Advertising Cookies:</strong> Set by Google AdSense to deliver personalized or non-personalized ads.</li>
                                </ul>
                                <p className="mt-3">You can control or delete cookies through your browser settings. Note that rejecting cookies may affect some website functionality.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">6. How We Use Your Information</h2>
                                <p className="mb-3">We use the information collected to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide, maintain, and improve our PDF tools and services</li>
                                    <li>Analyze usage trends and understand how users interact with our tools</li>
                                    <li>Display relevant advertisements through Google AdSense</li>
                                    <li>Detect and prevent fraud or abuse of our services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                                <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">7. GDPR Rights & EU User Consent Policy</h2>
                                <p className="mb-3">For users in the European Economic Area (EEA) and the UK, we comply with the <strong>EU User Consent Policy</strong>. We ensure that:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-3 text-sm">
                                    <li>Legally valid consent is obtained for the use of cookies or other local storage where required.</li>
                                    <li>Consent is obtained for the collection, sharing, and use of personal data for personalization of ads.</li>
                                    <li>Users have the right to withdraw consent at any time.</li>
                                </ul>
                                <p className="mb-3">Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Right to access, rectification, and erasure of your personal data.</li>
                                    <li>Right to restrict and object to processing.</li>
                                    <li>Right to data portability.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">8. Children's Privacy (COPPA Compliance)</h2>
                                <p>PDFHelperEdit is not directed to children under the age of 13. We strictly comply with the **Children's Online Privacy Protection Act (COPPA)** and the Google Publisher Policy regarding child-directed treatment. We do not knowingly collect personal information from children under 13, and our advertising partners (Google AdSense) are instructed not to target personalized ads to users in this age group. If you believe a child has provided us with personal information, please contact us immediately.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">9. Third-Party Links</h2>
                                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any sites you visit.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">10. Changes to This Policy</h2>
                                <p>We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last updated" date at the top of this page. Your continued use of PDFHelperEdit after any changes constitutes acceptance of the updated policy.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">11. Contact Us</h2>
                                <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
                                <p className="mt-2"><strong>Email:</strong> privacy@pdfhelperedit.online</p>
                                <p><strong>Website:</strong> <a href="https://pdfhelperedit.online" className="text-primary hover:underline">pdfhelperedit.online</a></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
