import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';

export const blogPosts = [
    {
        slug: 'how-to-compress-pdf-without-losing-quality',
        title: 'How to Compress PDF Without Losing Quality',
        excerpt: 'Learn the best techniques to reduce PDF file size while maintaining document quality. Perfect for email attachments and web uploads.',
        date: 'February 20, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'best-free-pdf-tools-online',
        title: 'Best Free PDF Tools Online in 2026',
        excerpt: 'Discover the top free online PDF tools for merging, splitting, compressing, and converting PDF files. Comprehensive comparison guide.',
        date: 'February 18, 2026',
        readTime: '7 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-add-watermark-to-pdf',
        title: 'How to Add Watermark to PDF – Complete Guide',
        excerpt: 'Step-by-step guide on adding text and image watermarks to your PDF documents. Protect your content with custom watermarks.',
        date: 'February 15, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'how-to-convert-jpg-to-pdf',
        title: 'How to Convert JPG to PDF – Quick & Easy',
        excerpt: 'Convert your JPG images to PDF format in seconds. Learn about batch conversion and quality settings for the best results.',
        date: 'February 12, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'reduce-pdf-size-for-email',
        title: 'How to Reduce PDF Size for Email Attachments',
        excerpt: 'Email attachment too large? Learn effective methods to reduce your PDF file size to fit within email limits without sacrificing quality.',
        date: 'February 10, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
];

export default function Blog() {
    return (
        <>
            <SEOHead
                title="Blog – PDF Tips & Tutorials"
                description="Expert tips, tutorials, and guides on working with PDF files. Learn how to compress, merge, split, watermark, and convert PDFs."
                keywords="pdf tips, pdf tutorials, how to compress pdf, merge pdf guide, pdf tools blog"
                path="/blog"
            />
            <section className="section-padding">
                <div className="container-main max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-3">PDF Tips & <span className="gradient-text">Tutorials</span></h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-10">Expert guides to help you work smarter with PDF files.</p>
                    </motion.div>

                    <AdBanner type="leaderboard" id="blog-header-ad" className="mb-8" />

                    <div className="space-y-6">
                        {blogPosts.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="no-underline block group">
                                    <div className="glass-card p-6 hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                                            <span className="text-xs text-gray-400">{post.date}</span>
                                            <span className="text-xs text-gray-400">• {post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors mb-2">{post.title}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                                            Read more
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-8">
                        <AdBanner type="in-content" id="blog-bottom-ad" />
                    </div>
                </div>
            </section>
        </>
    );
}
