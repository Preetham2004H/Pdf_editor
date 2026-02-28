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
    {
        slug: 'how-to-merge-pdf-files',
        title: 'How to Merge PDF Files – The Ultimate Guide',
        excerpt: 'Combine multiple PDF documents into a single file effortlessly. Learn professional tips for organizing and merging PDFs like a pro.',
        date: 'February 8, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'how-to-split-pdf-into-separate-pages',
        title: 'How to Split PDF Into Separate Pages',
        excerpt: 'Need to extract specific pages from a large PDF? Learn multiple methods to split PDFs by page range, individual pages, or bookmarks.',
        date: 'February 6, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-security-tips-protect-your-documents',
        title: 'PDF Security Tips – Protect Your Documents',
        excerpt: 'Learn how to secure your PDF files with watermarks, password protection, and best practices for sharing sensitive documents online.',
        date: 'February 4, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'pdf-vs-word-when-to-use-which-format',
        title: 'PDF vs Word – When to Use Which Format',
        excerpt: 'Choosing between PDF and Word? Understand the pros, cons, and ideal use cases for each document format in professional settings.',
        date: 'February 2, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-remove-pages-from-pdf',
        title: 'How to Remove Pages from PDF Quickly',
        excerpt: 'Delete unwanted pages from your PDF files in seconds. Step-by-step guide with tips for keeping your documents clean and organized.',
        date: 'January 30, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'batch-convert-images-to-pdf',
        title: 'Batch Convert Images to PDF – Complete Guide',
        excerpt: 'Convert dozens of images to a single PDF in one go. Learn about batch processing, ordering, and quality settings for the best output.',
        date: 'January 28, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-tools-for-students',
        title: 'Essential PDF Tools Every Student Needs in 2026',
        excerpt: 'From merging lecture notes to compressing assignments, discover the must-have free PDF tools for students and educators.',
        date: 'January 25, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-convert-pdf-to-image',
        title: 'How to Convert PDF to Image (JPG/PNG)',
        excerpt: 'Extract high-quality images from PDF pages. Perfect for presentations, social media, and when you need images from PDF documents.',
        date: 'January 22, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'optimize-pdf-for-web-upload',
        title: 'How to Optimize PDF for Web Upload',
        excerpt: 'Make your PDFs web-friendly with smaller file sizes and faster loading. Essential tips for uploading PDFs to websites and portals.',
        date: 'January 20, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'remove-watermark-from-pdf-guide',
        title: 'How to Remove Watermark from PDF',
        excerpt: 'Got a watermarked PDF? Learn the proper methods and best practices for removing watermarks from your own PDF documents.',
        date: 'January 18, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-accessibility-guide',
        title: 'PDF Accessibility – Making Documents for Everyone',
        excerpt: 'Learn how to create accessible PDFs that work for people with disabilities. Covers tagging, alt text, reading order, and WCAG compliance.',
        date: 'January 15, 2026',
        readTime: '7 min read',
        category: 'Guide',
    },
    {
        slug: 'digital-signatures-in-pdf',
        title: 'Digital Signatures in PDF – What You Need to Know',
        excerpt: 'Understanding digital signatures, e-signatures, and their legal validity. Learn how to sign PDFs and verify document authenticity.',
        date: 'January 12, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'pdf-forms-create-and-fill',
        title: 'PDF Forms – How to Create and Fill Them',
        excerpt: 'Master fillable PDF forms for contracts, applications, and surveys. Learn how to create interactive forms and fill existing ones.',
        date: 'January 10, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-metadata-what-it-is-and-why-it-matters',
        title: 'PDF Metadata – What It Is and Why It Matters',
        excerpt: 'Discover hidden information in your PDFs. Learn about metadata, what it reveals, and how to view, edit, or remove it for privacy.',
        date: 'January 8, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'create-print-ready-pdf',
        title: 'How to Create a Print-Ready PDF',
        excerpt: 'Ensure your PDF prints perfectly every time. Learn about bleed, color modes, fonts, resolution, and other settings for professional printing.',
        date: 'January 5, 2026',
        readTime: '6 min read',
        category: 'Guide',
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
