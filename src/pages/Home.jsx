import { motion } from 'framer-motion';
import ToolCard from '../components/ToolCard';
import AdBanner from '../components/AdBanner';
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
    { q: 'Is PDFMaster Pro free to use?', a: 'Yes! All our core PDF tools are completely free. No registration required.' },
    { q: 'Are my files secure?', a: 'Absolutely. Files are processed securely and automatically deleted after 30 minutes. We never store your files permanently.' },
    { q: 'What is the maximum file size?', a: 'You can upload files up to 100MB in size. For larger files, consider compressing them first.' },
    { q: 'Do I need to install any software?', a: 'No installation needed. All tools work directly in your browser.' },
    { q: 'Can I use these tools on mobile?', a: 'Yes! PDFMaster Pro is fully responsive and works perfectly on mobile devices and tablets.' },
];

export default function Home() {
    return (
        <>
            <SEOHead
                title="Free Online PDF Tools"
                description="Free online PDF tools to merge, split, compress, convert, and edit your PDF files. Fast, secure, and easy to use. No registration required."
                keywords="free pdf converter, image to pdf online, compress pdf free, remove pdf pages, pdf watermark remover, merge pdf, split pdf"
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            100% Free — No Registration Required
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
                            Every PDF Tool You Need,{' '}
                            <span className="gradient-text">All in One Place</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Merge, split, compress, convert, add watermarks, and more — all for free. Fast, secure, and works right in your browser.
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

            {/* Header Ad */}
            <div className="container-main mb-8">
                <AdBanner type="leaderboard" id="home-header-ad" />
            </div>

            {/* Tools Grid */}
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

            {/* In-content Ad */}
            <div className="container-main my-8">
                <AdBanner type="in-content" id="home-content-ad" />
            </div>

            {/* How It Works */}
            <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-800/30">
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
            <section className="section-padding">
                <div className="container-main">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { number: '9+', label: 'PDF Tools' },
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
                    "name": "PDFMaster Pro",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Web",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                    "description": "Free online PDF tools to merge, split, compress, convert, and edit PDF files."
                })
            }} />
        </>
    );
}
