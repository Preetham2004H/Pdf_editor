import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

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
    // ── New 30 posts ──
    {
        slug: 'how-to-password-protect-pdf',
        title: 'How to Password Protect a PDF File',
        excerpt: 'Secure your sensitive documents with password protection. A step-by-step guide to encrypting PDF files and controlling who can open or edit them.',
        date: 'March 1, 2026',
        readTime: '5 min read',
        category: 'Security',
    },
    {
        slug: 'pdf-vs-epub-which-format-is-better',
        title: 'PDF vs EPUB – Which Format Is Better for eBooks?',
        excerpt: 'Choosing between PDF and EPUB for your eBook? Explore the differences in reflowability, device compatibility, and publishing standards.',
        date: 'February 27, 2026',
        readTime: '5 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-flatten-pdf-form',
        title: 'How to Flatten a PDF Form – Complete Guide',
        excerpt: 'Flatten fillable PDF forms so field data becomes permanent and non-editable. Learn when and why to flatten PDFs before sharing.',
        date: 'February 25, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'best-pdf-compression-techniques',
        title: 'Best PDF Compression Techniques in 2026',
        excerpt: 'Deep dive into lossless vs lossy compression, image downsampling, and font subsetting — to shrink PDF files without sacrificing quality.',
        date: 'February 23, 2026',
        readTime: '6 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-extract-images-from-pdf',
        title: 'How to Extract Images from a PDF File',
        excerpt: 'Need to pull out photos or graphics from a PDF? Learn multiple methods to extract images quickly and save them in high quality.',
        date: 'February 22, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-file-size-reduction-guide',
        title: 'The Ultimate Guide to PDF File Size Reduction',
        excerpt: 'Comprehensive guide covering every technique to reduce your PDF file size — from compression algorithms to page removal and metadata stripping.',
        date: 'February 20, 2026',
        readTime: '8 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-rotate-pdf-pages',
        title: 'How to Rotate PDF Pages – Quick & Easy Methods',
        excerpt: 'Accidentally scanned pages sideways? Learn how to rotate individual or all PDF pages and save the corrected document.',
        date: 'February 18, 2026',
        readTime: '3 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-tips-for-remote-workers',
        title: '10 PDF Tips Every Remote Worker Should Know',
        excerpt: 'Working from home means more digital documents. Master these 10 PDF skills to stay organized, communicate clearly, and maintain productivity.',
        date: 'February 16, 2026',
        readTime: '6 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-combine-scanned-documents',
        title: 'How to Combine Scanned Documents into One PDF',
        excerpt: 'Scan multiple pages into a single organized PDF. Step-by-step guide using free online tools — no software installation needed.',
        date: 'February 14, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-ocr-make-text-searchable',
        title: 'PDF OCR – Make Your Scanned Documents Searchable',
        excerpt: 'Optical Character Recognition (OCR) converts scanned image PDFs into searchable, copy-able text. Learn how OCR works and when to use it.',
        date: 'February 12, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-add-page-numbers-to-pdf',
        title: 'How to Add Page Numbers to a PDF',
        excerpt: 'Professional-looking PDFs always have page numbers. Learn how to add, customize, and position page numbers across all pages of your document.',
        date: 'February 10, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-for-legal-documents',
        title: 'Using PDF for Legal Documents – Best Practices',
        excerpt: 'Legal documents require strict formatting, authenticity, and tamper-evidence. Learn how PDF features protect legal agreements and contracts.',
        date: 'February 8, 2026',
        readTime: '7 min read',
        category: 'Guide',
    },
    {
        slug: 'share-pdf-securely-online',
        title: 'How to Share PDF Files Securely Online',
        excerpt: 'Sending sensitive PDFs over the internet? Learn the safest methods — from encrypted email to secure cloud links and expiring share links.',
        date: 'February 6, 2026',
        readTime: '5 min read',
        category: 'Security',
    },
    {
        slug: 'how-to-add-header-footer-pdf',
        title: 'How to Add Headers and Footers to a PDF',
        excerpt: 'Headers and footers add professionalism and context to PDF documents. Learn best practices for adding consistent branding across all pages.',
        date: 'February 4, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'reduce-pdf-size-without-quality-loss',
        title: 'Reduce PDF Size Without Quality Loss – 7 Proven Methods',
        excerpt: 'Seven battle-tested techniques to shrink PDF files while preserving image sharpness and text clarity. Works for any type of PDF document.',
        date: 'February 2, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'pdf-invoice-best-practices',
        title: 'PDF Invoice Best Practices for Freelancers & Businesses',
        excerpt: 'Create professional invoices in PDF format that get paid faster. Covers layout, essential fields, file naming, and sending tips.',
        date: 'January 31, 2026',
        readTime: '5 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-convert-png-to-pdf',
        title: 'How to Convert PNG to PDF in Seconds',
        excerpt: 'Turn PNG screenshots, designs, and diagrams into PDF files instantly — keeping transparency and image quality intact.',
        date: 'January 29, 2026',
        readTime: '3 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-bookmarks-navigation-guide',
        title: 'PDF Bookmarks – How to Add and Use Navigation Links',
        excerpt: 'Bookmarks make long PDFs easy to navigate. Learn how to add, organize, and use bookmarks for a table-of-contents-style reading experience.',
        date: 'January 27, 2026',
        readTime: '5 min read',
        category: 'Guide',
    },
    {
        slug: 'pdf-troubleshooting-common-errors',
        title: 'PDF Troubleshooting – Fix 10 Common PDF Errors',
        excerpt: 'PDF won\'t open? File is corrupted? Fonts look wrong? Diagnose and fix the 10 most common PDF problems with these proven solutions.',
        date: 'January 25, 2026',
        readTime: '7 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-convert-excel-to-pdf',
        title: 'How to Convert Excel Spreadsheets to PDF',
        excerpt: 'Convert Excel files to PDF while preserving formatting, gridlines, and print areas. Works for spreadsheets with charts and pivot tables.',
        date: 'January 23, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'how-to-convert-powerpoint-to-pdf',
        title: 'How to Convert PowerPoint Presentations to PDF',
        excerpt: 'Share your presentations as a universally viewable PDF. Learn how to export slides, preserve animations notes, and control quality settings.',
        date: 'January 21, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-for-resumes-job-applications',
        title: 'Why You Should Always Send Your Resume as a PDF',
        excerpt: 'PDF resumes look the same on every device, can\'t be accidentally edited, and impress hiring managers. Learn to create and optimize your resume PDF.',
        date: 'January 19, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-unlock-pdf',
        title: 'How to Unlock a PDF – Remove Restrictions',
        excerpt: 'Locked PDF preventing you from printing or copying? Learn the legitimate ways to remove PDF restrictions when you are the document owner.',
        date: 'January 17, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-archive-long-term-storage',
        title: 'PDF/A – The Right Format for Long-Term Document Storage',
        excerpt: 'PDF/A is the ISO standard for archiving documents. Learn what makes it different from regular PDF and when to use it for compliance.',
        date: 'January 15, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-crop-pdf-pages',
        title: 'How to Crop PDF Pages – Remove Unwanted Margins',
        excerpt: 'Oversized margins wasting space on your PDF? Learn how to crop page borders precisely and create a cleaner, more professional document.',
        date: 'January 13, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-tools-for-teachers',
        title: 'Best PDF Tools for Teachers and Educators',
        excerpt: 'Create, share, and manage educational materials efficiently. The top PDF tools that every teacher needs for lesson plans, handouts, and grading.',
        date: 'January 11, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-combine-pdf-and-images',
        title: 'How to Combine PDFs and Images into One Document',
        excerpt: 'Mix PDF pages and images — photos, diagrams, screenshots — into a single well-organized PDF document using free online tools.',
        date: 'January 9, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-reading-tips-productivity',
        title: 'PDF Reading Tips to Boost Your Productivity',
        excerpt: 'Read PDFs smarter, not harder. From keyboard shortcuts to annotation tools and reading modes — master your PDF reading workflow.',
        date: 'January 7, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-redact-pdf',
        title: 'How to Redact Sensitive Information in a PDF',
        excerpt: 'Permanently hide confidential text, SSNs, or financial data in PDFs before sharing. Learn proper redaction vs just covering content with black boxes.',
        date: 'January 5, 2026',
        readTime: '5 min read',
        category: 'Security',
    },
    {
        slug: 'pdf-batch-processing-workflow',
        title: 'PDF Batch Processing – Handle Hundreds of Files at Once',
        excerpt: 'Stop processing PDFs one by one. Learn batch processing strategies for compressing, converting, or renaming large numbers of PDF files.',
        date: 'January 3, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'pdf-accessibility-standards',
        title: 'Understanding PDF Accessibility Standards',
        excerpt: 'Dive deep into PDF/UA, WCAG, and ADA compliance. Learn why accessible PDFs are legally and ethically important for modern organizations.',
        date: 'March 6, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-compress-scanned-pdfs',
        title: 'How to Compress Large Scanned PDFs',
        excerpt: 'Scanned documents are notoriously large. Learn specific techniques to compress scanned PDFs up to 90% without losing text readability.',
        date: 'March 5, 2026',
        readTime: '4 min read',
        category: 'Tips',
    },
    {
        slug: 'pdf-signature-vs-digital-signature',
        title: 'PDF Signatures vs. Digital Signatures: What’s the Difference?',
        excerpt: 'Confused by electronic signatures? We break down the legal and technical differences between drawing your name and cryptographic digital signatures.',
        date: 'March 4, 2026',
        readTime: '5 min read',
        category: 'Security',
    },
    {
        slug: 'how-to-translate-pdf-documents',
        title: 'How to Translate Entire PDF Documents',
        excerpt: 'Need to read a PDF in another language? Learn the best free and paid tools to translate PDF files while preserving their original layout.',
        date: 'March 3, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-color-profiles-explained',
        title: 'PDF Color Profiles: RGB vs CMYK vs Grayscale',
        excerpt: 'Why do your printed PDFs look different from the screen? Learn how to manage color profiles to ensure your PDFs print exactly as designed.',
        date: 'March 2, 2026',
        readTime: '7 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-fix-corrupted-pdfs',
        title: 'How to Fix and Recover Corrupted PDF Files',
        excerpt: 'PDF won\'t open? File is damaged? Learn the most effective methods to repair corrupted PDF documents and recover your critical data.',
        date: 'February 28, 2026',
        readTime: '6 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-tools-for-lawyers',
        title: 'Essential PDF Tools for Legal Professionals',
        excerpt: 'From Bates stamping to secure redaction — discover the PDF workflows that save law firms thousands of hours and ensure client confidentiality.',
        date: 'February 26, 2026',
        readTime: '8 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-add-audio-video-to-pdf',
        title: 'How to Add Audio and Video to a PDF',
        excerpt: 'Make your documents interactive. Learn step-by-step how to embed multimedia files directly into your PDF presentations and reports.',
        date: 'February 24, 2026',
        readTime: '4 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-font-embedding-guide',
        title: 'The Ultimate Guide to PDF Font Embedding',
        excerpt: 'Prevent formatting disasters when sharing files. Learn why font embedding matters, how to do it, and how to fix missing font errors.',
        date: 'February 21, 2026',
        readTime: '6 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-compare-two-pdfs',
        title: 'How to Compare Two PDF Documents for Differences',
        excerpt: 'Reviewing a contract draft? Learn the best tools and techniques to automatically highlight the differences between two versions of a PDF.',
        date: 'February 19, 2026',
        readTime: '5 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-to-html-conversion',
        title: 'Converting PDF to HTML: Best Practices',
        excerpt: 'Need to publish your document on the web as native text? Learn the best ways to convert PDF to clean, responsive HTML code.',
        date: 'February 17, 2026',
        readTime: '6 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-create-pdf-portfolio',
        title: 'How to Create a Professional PDF Portfolio',
        excerpt: 'Designers, writers, and architects: learn how to compile your best work into an impressive, interactive PDF portfolio that lands clients.',
        date: 'February 13, 2026',
        readTime: '7 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-bates-numbering',
        title: 'What is Bates Numbering in PDFs?',
        excerpt: 'A comprehensive guide to Bates stamping for legal and medical professionals. Learn how to index and identify hundreds of document pages automatically.',
        date: 'February 11, 2026',
        readTime: '5 min read',
        category: 'Guide',
    },
    {
        slug: 'how-to-dark-mode-pdfs',
        title: 'How to Read PDFs in Dark Mode',
        excerpt: 'Save your eyes during late-night reading sessions. Learn how to invert colors or force dark mode on any PDF document across different devices.',
        date: 'February 9, 2026',
        readTime: '4 min read',
        category: 'Tips',
    },
    {
        slug: 'pdf-file-naming-conventions',
        title: 'Best Practices for Naming Your PDF Files',
        excerpt: 'Never lose a document again. Learn professional file naming conventions to keep your digital archive organized and easily searchable.',
        date: 'February 7, 2026',
        readTime: '5 min read',
        category: 'Tips',
    },
    {
        slug: 'how-to-add-hyperlinks-to-pdf',
        title: 'How to Add Clickable Hyperlinks to a PDF',
        excerpt: 'Enhance your documents by linking to external websites, email addresses, or specific pages within the same PDF document.',
        date: 'February 5, 2026',
        readTime: '3 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-malware-protection',
        title: 'Can PDFs Contain Viruses? How to Protect Yourself',
        excerpt: 'Yes, malicious PDFs exist. Learn how hackers hide malware in documents and the best software settings to keep your computer secure.',
        date: 'February 3, 2026',
        readTime: '6 min read',
        category: 'Security',
    },
    {
        slug: 'how-to-print-multiple-pages-per-sheet-pdf',
        title: 'How to Print Multiple PDF Pages on One Sheet',
        excerpt: 'Save paper and ink. Learn how to use the N-up printing feature to print 2, 4, or 6 PDF pages onto a single physical sheet of paper.',
        date: 'February 1, 2026',
        readTime: '3 min read',
        category: 'Tutorial',
    },
    {
        slug: 'pdf-layer-management',
        title: 'Working with OCGs (Optional Content Groups) in PDFs',
        excerpt: 'Advanced CAD and design workflows use PDF layers. Learn how to toggle visibility of different elements in complex architectural or map PDFs.',
        date: 'January 26, 2026',
        readTime: '7 min read',
        category: 'Guide',
    },
    {
        slug: 'future-of-the-pdf-format',
        title: 'The Future of the PDF Format',
        excerpt: 'From its invention in 1993 to AI integration today. Where is the Portable Document Format heading in the next decade of digital transformation?',
        date: 'January 24, 2026',
        readTime: '8 min read',
        category: 'Guide',
    },
];

return (
    <>
        <SEOHead
            title="Blog – PDF Tips & Tutorials"
            description="Expert tips, tutorials, and guides on working with PDF files. Learn how to compress, merge, split, watermark, and convert PDFs using PDFHelperEdit's free tools."
            keywords="pdf tips, pdf tutorials, how to compress pdf, merge pdf guide, pdf tools blog, PDFHelperEdit blog"
            path="/blog"
        />
        <section className="section-padding">
            <div className="container-main max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl font-bold mb-3">PDF Tips & <span className="gradient-text">Tutorials</span></h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">Expert guides to help you work smarter with PDF files — powered by PDFHelperEdit.</p>
                </motion.div>


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


            </div>
        </section>
    </>
);

