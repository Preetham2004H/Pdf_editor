import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';

export default function About() {
    return (
        <>
            <SEOHead
                title="About Us"
                description="Learn about PDFMaster Pro - your free online PDF tools platform. Our mission is to make PDF editing accessible to everyone."
                path="/about"
            />
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">About <span className="gradient-text">PDFMaster Pro</span></h1>

                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                PDFMaster Pro was built with a simple goal: to make PDF editing accessible to everyone, completely free. We believe that essential document tools shouldn't cost a fortune or require complex software installations.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Our tools run directly in your browser, which means your files stay on your device. We process everything client-side whenever possible, ensuring maximum privacy and security for your documents.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Whether you need to merge PDFs for a business presentation, compress files for email, or add watermarks for document security — PDFMaster Pro has you covered with fast, reliable tools that work on any device.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { icon: '🔒', title: 'Privacy First', desc: 'Your files are processed locally. Nothing is stored on our servers.' },
                                { icon: '⚡', title: 'Lightning Fast', desc: 'Client-side processing means instant results with no upload wait.' },
                                { icon: '💰', title: '100% Free', desc: 'All tools are free to use. No registration, no hidden fees.' },
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

                        <AdBanner type="in-content" id="about-ad" />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
