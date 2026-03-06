import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function About() {
    return (
        <>
            <SEOHead
                title="About Us – Free Online PDF Tools for Students & Professionals"
                description="Learn about PDFHelperEdit – a free online PDF editing and compression tool designed for students and professionals. Fast, secure, browser-based PDF tools with no registration required."
                keywords="about PDFHelperEdit, free pdf tools online, PDFHelperEdit mission, pdf editor for students, pdf tool for professionals"
                path="/about"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">About <span className="gradient-text">PDFHelperEdit</span></h1>

                        {/* Owner Card */}
                        <div className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                                PH
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Website Creator & Owner</p>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">Preetham H</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    Artificial Intelligence & Data Science Graduate · Web Developer
                                </p>
                                <a href="mailto:preetham171977@gmail.com" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    preetham171977@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Who We Are */}
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Who We Are</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                PDFHelperEdit is a <strong>free online PDF editing and compression platform</strong> built for students, professionals, and everyday users who need powerful document tools without the price tag. We believe that essential PDF tools should be accessible to everyone — completely free, without registration or software installation.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Whether you're a student compressing assignment files to meet upload limits, a professional merging reports for a client presentation, or anyone who works with PDFs daily — PDFHelperEdit is designed to make your life easier and more productive.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our tools run directly in your browser, which means your files stay on your device. We process everything client-side whenever possible, ensuring maximum privacy, security, and speed for all your PDF needs.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Our mission is simple: <strong>democratize access to professional PDF tools</strong>. Most PDF software costs hundreds of dollars annually, creating a barrier for students, freelancers, and small businesses who need these tools most.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                PDFHelperEdit was founded to break down those barriers. By leveraging modern browser technologies like WebAssembly and client-side JavaScript processing, we've built tools that are both powerful and privacy-respecting — at zero cost to the user.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We sustain PDFHelperEdit through non-intrusive advertising (Google AdSense) so the tools can remain free forever. Your trust matters to us, and we're committed to maintaining a clean, ad-light experience that doesn't compromise usability.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { icon: '🔒', title: 'Privacy First', desc: 'Your files are processed locally in your browser. Nothing is stored on our servers permanently.' },
                                { icon: '⚡', title: 'Lightning Fast', desc: 'Client-side processing means instant results with no upload wait times. Process files in seconds.' },
                                { icon: '💰', title: '100% Free', desc: 'All tools are free to use with no hidden costs. No registration, no subscriptions, no limits.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="glass-card p-6 text-center"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Our Story */}
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                PDFHelperEdit started from a very common frustration: needing to perform simple PDF operations — merging two files, removing a page, compressing for email — and finding that most online tools were either paid, slow, or required uploading sensitive documents to unknown servers.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                As an AI and Data Science student working on various academic and personal projects, the need for reliable, free PDF tools was constant. Multiple subscriptions just for basic document management didn't make sense. So we built PDFHelperEdit — a platform that's different from the start.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Today, PDFHelperEdit offers a comprehensive suite of 8+ PDF tools — from basic operations like merging and splitting to advanced features like watermarking and image conversion — all available for free with no registration required. We're committed to expanding our toolset based on user needs.
                            </p>
                        </div>

                        {/* Technology */}
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Technology</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                PDFHelperEdit is built on cutting-edge web technologies to deliver the best possible experience:
                            </p>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">→</span>
                                    <span><strong className="text-gray-800 dark:text-gray-100">Client-side processing:</strong> Most operations run entirely in your browser using pdf-lib and pdfjs-dist libraries, meaning your files never leave your device.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">→</span>
                                    <span><strong className="text-gray-800 dark:text-gray-100">Modern React framework:</strong> Our interface is built with React and Framer Motion for smooth, responsive interactions across all devices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">→</span>
                                    <span><strong className="text-gray-800 dark:text-gray-100">Secure server processing:</strong> For operations requiring server-side processing, files are encrypted during transfer and automatically deleted within 30 minutes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">→</span>
                                    <span><strong className="text-gray-800 dark:text-gray-100">Responsive design:</strong> Our tools work seamlessly on desktops, tablets, and mobile phones — no app installation required.</span>
                                </li>
                            </ul>
                        </div>

                        {/* What We Offer */}
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">What We Offer</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { tool: 'Compress PDF', desc: 'Reduce file size without losing quality' },
                                    { tool: 'Merge PDF', desc: 'Combine multiple PDF files into one document' },
                                    { tool: 'Split PDF', desc: 'Extract specific pages or split by range' },
                                    { tool: 'Image to PDF', desc: 'Convert JPG, PNG, WebP to PDF format' },
                                    { tool: 'PDF to Image', desc: 'Convert PDF pages to high-quality images' },
                                    { tool: 'Remove Pages', desc: 'Delete unwanted pages from your PDFs' },
                                    { tool: 'Add Watermark', desc: 'Protect documents with text watermarks' },
                                    { tool: 'Remove Watermark', desc: 'Clean up watermarks from your own files' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <span className="text-primary font-bold text-lg">✓</span>
                                        <div>
                                            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm">{item.tool}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { number: '8+', label: 'PDF Tools' },
                                { number: '100%', label: 'Free Forever' },
                                { number: '100MB', label: 'Max File Size' },
                                { number: '0', label: 'Data Stored' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-4 text-center"
                                >
                                    <div className="text-2xl font-extrabold gradient-text mb-1">{stat.number}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>


                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: 'Is PDFHelperEdit really free?', a: 'Yes, 100% free. All our PDF tools are available without any cost, registration, or hidden fees. We sustain the platform through non-intrusive Google AdSense advertising.' },
                                    { q: 'Are my files safe?', a: 'Absolutely. Most of our tools process files directly in your browser — your files never leave your device. For operations requiring server processing, files are encrypted in transit and automatically deleted within 30 minutes.' },
                                    { q: 'Do I need to create an account?', a: 'No. PDFHelperEdit works without any registration or account creation. Simply visit the site, choose your tool, and start processing your files immediately.' },
                                    { q: 'What file formats do you support?', a: 'We primarily work with PDF files, but also support JPG, PNG, WebP, BMP, and GIF for image-related conversions. Our tools handle files up to 100MB in size.' },
                                    { q: 'Can I use PDFHelperEdit on mobile?', a: 'Yes! Our website is fully responsive and works on all devices — smartphones, tablets, laptops, and desktops. No app installation required.' },
                                    { q: 'How is PDFHelperEdit different from paid tools?', a: "PDFHelperEdit offers the same core PDF functionality as paid tools, completely free. We prioritize privacy, speed, and simplicity. Unlike many paid tools, most of our processing happens right in your browser — no data ever reaches our servers." },
                                ].map((faq, i) => (
                                    <details key={i} className="glass-card p-5 group cursor-pointer">
                                        <summary className="font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-between list-none">
                                            {faq.q}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180 flex-shrink-0 ml-4"><polyline points="6 9 12 15 18 9" /></svg>
                                        </summary>
                                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 text-center">
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Ready to Get Started?</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">Try our free PDF tools right now — no sign-up needed.</p>
                            <Link to="/" className="btn-primary !px-8 !py-3 !rounded-xl inline-block">
                                Explore All Tools
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
