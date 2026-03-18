import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import SEOHead from '../components/SEOHead';

const tools = [
    { slug: 'image-to-pdf', title: 'Image to PDF', description: 'Convert JPG, PNG, and other images to PDF format instantly. Batch conversion supported.' },
    { slug: 'pdf-to-image', title: 'PDF to Image', description: 'Convert PDF pages to high-quality JPG or PNG images. Extract all pages at once.' },
    { slug: 'merge-pdf', title: 'Merge PDF', description: 'Combine multiple PDF files into one document. Drag to reorder pages easily.' },
    { slug: 'split-pdf', title: 'Split PDF', description: 'Split a PDF into multiple files. Extract specific pages or split by range.' },
    { slug: 'compress-pdf', title: 'Compress PDF', description: 'Reduce PDF file size without losing quality. Perfect for email attachments.' },
    { slug: 'remove-pages', title: 'Remove Pages', description: 'Delete specific pages from your PDF document. Preview before removing.' },
    { slug: 'add-watermark', title: 'Add Watermark', description: 'Add text or image watermark to your PDF. Customize position, opacity, and size.' },
    { slug: 'remove-watermark', title: 'Remove Watermark', description: 'Remove watermarks from PDF files. Clean up your documents easily.' },
];

const faqs = [
    { q: 'Is PDFHelperEdit free to use?', a: 'Yes! All our core PDF tools are completely free. No registration required and no hidden fees ever.' },
    { q: 'Are my files secure?', a: 'Absolutely. Files are processed securely and automatically deleted after 30 minutes. We never store your files permanently and we do not share them with any third parties.' },
    { q: 'Does PDFHelperEdit store my uploaded files?', a: 'No. We do not store your PDF files on our servers after processing. All uploaded files are automatically and permanently deleted within 30 minutes. Your documents remain private.' },
    { q: 'Is the site safe from malware?', a: 'Yes. PDFHelperEdit only processes PDF and image files using trusted open-source libraries in your browser. We never execute code from your files and our site does not distribute any malware or harmful software.' },
    { q: 'What is the maximum file size?', a: 'You can upload files up to 100MB in size. For larger files, consider compressing them first using our Compress PDF tool.' },
    { q: 'Do I need to install any software?', a: 'No installation needed. All tools work directly in your browser on any operating system — Windows, Mac, Linux, iOS, or Android.' },
    { q: 'Can I use these tools on mobile?', a: 'Yes! PDFHelperEdit is fully responsive and works perfectly on mobile devices and tablets. No app download needed.' },
    { q: 'How long does it take to process a PDF?', a: 'Most operations complete in seconds. Processing time depends on your file size and internet connection speed.' },
    { q: 'What PDF tools are available for free?', a: 'We offer 8 free tools: Merge PDF, Split PDF, Compress PDF, Image to PDF, PDF to Image, Remove Pages, Add Watermark, and Remove Watermark — all completely free.' },
    { q: 'Does PDFHelperEdit work without an internet connection?', a: 'No, as PDFHelperEdit is a web-based service it requires an internet connection. However, many of our operations run client-side in your browser, so processing is fast even on slower connections.' },
    { q: 'Can I merge more than two PDF files?', a: 'Yes! Our Merge PDF tool supports combining unlimited PDF files in a single operation. Simply upload all the PDFs you want to merge, arrange them in order, and download the combined file.' },
    { q: 'Will compressing a PDF reduce its quality?', a: 'Our smart compression minimizes quality loss while maximizing size reduction. For most PDFs, you will see 40–70% size reduction with no visible quality difference on screen. Print-quality PDFs may see slightly reduced image sharpness.' },
];

const whyChoose = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Process your PDF files in seconds. Our optimized tools deliver instant results without any waiting.' },
    { icon: '🔒', title: '100% Secure', desc: 'Files are processed in your browser and auto-deleted from servers within 30 minutes. Your privacy is our priority.' },
    { icon: '💰', title: 'Completely Free', desc: 'All tools are free forever. No hidden fees, no subscriptions, no credit card required.' },
    { icon: '📱', title: 'Works Everywhere', desc: 'Works on any device — desktop, tablet, or mobile. No software installation needed.' },
    { icon: '🌐', title: 'No Registration', desc: 'Start using any tool instantly. No sign-up, no login, no personal information required.' },
    { icon: '✨', title: 'High Quality', desc: 'Preserve the original quality of your documents. Our compression maintains visual clarity.' },
];

export default function Home() {
    return (
        <>
            <SEOHead
                title="Free Online PDF Tools – Merge, Split, Compress & Convert"
                description="PDFHelperEdit offers free online PDF tools to merge, split, compress, convert, and edit PDF files. Fast, secure, and works in your browser. No registration required."
                keywords="free pdf tools, compress pdf online, merge pdf free, split pdf, convert pdf, PDFHelperEdit, online pdf editor, pdf compressor"
                path="/"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden section-padding pb-12" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="container-main relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            100% Free — No Registration Required
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6 border border-green-500/20 shadow-sm"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            100% Secure & Private: Files are processed locally in your browser
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
                            Every PDF Tool You Need,{' '}
                            <span className="gradient-text">All in One Place</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Merge, split, compress, convert, add watermarks, and more — all for free on PDFHelperEdit. Fast, secure, and works right in your browser.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center gap-4"
                        >
                            <a href="#tools" className="btn-primary !px-8 !py-4 !text-lg !rounded-2xl">
                                Explore All Tools
                            </a>
                            <a href="#how-it-works" className="btn-secondary !px-8 !py-4 !text-lg !rounded-2xl">
                                How It Works
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Trust & Transparency Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transparent & <span className="gradient-text">Trusted</span></h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                                We know that findable, free PDF tools often come with hidden catches. At <strong>PDFHelperEdit</strong>, we believe in complete transparency.
                            </p>
                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                                        <span className="text-primary text-xl">💳</span>
                                        No Credit Card, ever.
                                    </h3>
                                    <p className="text-sm text-gray-500">We never ask for your payment information or personal details. No hidden subscriptions, no "trial" periods that turn into charges.</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                                        <span className="text-secondary text-xl">📢</span>
                                        How we stay free
                                    </h3>
                                    <p className="text-sm text-gray-500">We sustain our platform through non-intrusive Google AdSense advertising. This allows us to keep professional-grade tools accessible to everyone at zero cost.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card p-8 md:p-10 border-2 border-primary/20 relative z-10">
                                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Security Guarantee</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    Your privacy is our core value. Unlike many online tools, we prioritize <strong>local processing</strong>.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Files processed in your browser whenever possible',
                                        'Encrypted HTTPS transfers for server operations',
                                        'Automatic permanent deletion within 30 minutes',
                                        'No human or AI reads your document content',
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-1" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-1" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="tools" className="section-padding pt-8">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            All PDF Tools at Your <span className="gradient-text">Fingertips</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            Choose from our collection of powerful PDF tools. No installation, no registration — just results.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool, i) => (
                            <ToolCard key={tool.slug} {...tool} index={i} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Why Choose PDFHelperEdit */}
            <section id="why-choose" className="section-padding bg-gray-50 dark:bg-gray-800/30">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Why Choose <span className="gradient-text">PDFHelperEdit?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            Trusted by students, professionals, and businesses worldwide for all their PDF needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChoose.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6"
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="section-padding">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Simple as <span className="gradient-text">1-2-3</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            No complex setups. Just upload, process, and download.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { step: '1', icon: '📤', title: 'Upload Your File', desc: 'Drag and drop your files or click to browse. We support PDF, JPG, PNG, and more.' },
                            { step: '2', icon: '⚡', title: 'Process Instantly', desc: 'Our tools process your files in seconds. Watch the progress in real-time.' },
                            { step: '3', icon: '📥', title: 'Download Result', desc: 'Your processed file is ready! Download it instantly to your device.' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <div className="inline-flex w-8 h-8 items-center justify-center rounded-full gradient-bg text-white text-sm font-bold mb-3">{item.step}</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
                <div className="container-main">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { number: '8+', label: 'PDF Tools' },
                            { number: '100%', label: 'Free to Use' },
                            { number: '100MB', label: 'Max File Size' },
                            { number: '30min', label: 'Auto File Delete' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6"
                            >
                                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured PDF Guides Section */}
            <section className="section-padding bg-white dark:bg-transparent">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Expert <span className="gradient-text">PDF Guides</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            Master your documents with our detailed guides and tutorials from the PDFHelperEdit blog.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { slug: 'how-to-compress-pdf-without-losing-quality', title: 'Compress PDF Guide', desc: 'Learn the best ways to reduce PDF size while maintaining perfect visual quality.' },
                            { slug: 'pdf-security-tips-protect-your-documents', title: 'PDF Security Tips', desc: 'Essential advice on protecting your sensitive documents via watermarking and more.' },
                            { slug: 'how-to-convert-jpg-to-pdf', title: 'JPG to PDF Conversion', desc: 'Efficiently combine your images into a single, professional PDF document.' },
                        ].map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 flex flex-col"
                            >
                                <span className="text-xs font-medium text-primary mb-2">Popular Guide</span>
                                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-100">{post.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">{post.desc}</p>
                                <Link to={`/blog/${post.slug}`} className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 group">
                                    Read Guide
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog CTA */}
            <section className="section-padding">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
                        <div className="relative">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Learn PDF Tips & Tricks</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                                Explore our free blog with expert guides on compressing, merging, splitting, and managing PDF files like a pro.
                            </p>
                            <Link to="/blog" className="btn-primary !px-8 !py-3 !rounded-xl inline-block">
                                Read Our Blog
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
                <div className="container-main max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.details
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-5 group cursor-pointer"
                            >
                                <summary className="font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-between list-none">
                                    {faq.q}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
                                </summary>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                            </motion.details>
                        ))}
                    </div>

                    {/* FAQ Schema */}
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(f => ({
                                "@type": "Question",
                                "name": f.q,
                                "acceptedAnswer": { "@type": "Answer", "text": f.a }
                            }))
                        })
                    }} />
                </div>
            </section>

            {/* SoftwareApplication Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "PDFHelperEdit",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Web",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                    "description": "Free online PDF tools to merge, split, compress, convert, and edit PDF files.",
                    "url": "https://pdfhelperedit.online"
                })
            }} />
        </>
    );
}
