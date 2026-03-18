import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toolsConfig } from '../utils/toolsConfig';
import { blogPosts } from './Blog';
import SEOHead from '../components/SEOHead';

export default function Sitemap() {
    const tools = Object.entries(toolsConfig).map(([slug, config]) => ({
        slug,
        title: config.title,
    }));

    return (
        <>
            <SEOHead
                title="Sitemap - PDFHelperEdit"
                description="Navigate through all the tools, guides, and pages available on PDFHelperEdit."
                keywords="sitemap, pdf tools list, blog posts, pdf helper edit links"
                path="/sitemap"
            />

            <section className="section-padding pt-12 pb-24">
                <div className="container-main max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-4">Site <span className="gradient-text">Map</span></h1>
                        <p className="text-gray-500 dark:text-gray-400">Can't find what you're looking for? Here's a complete list of all pages on PDFHelperEdit.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Essential Pages */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">🏠</span>
                                Main Pages
                            </h2>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</Link></li>
                                <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
                                <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
                                <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </motion.div>

                        {/* PDF Tools */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">🛠️</span>
                                PDF Tools
                            </h2>
                            <ul className="space-y-4">
                                {tools.map(tool => (
                                    <li key={tool.slug}>
                                        <Link to={`/tools/${tool.slug}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                            {tool.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Blog Posts */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">📝</span>
                                Blog & Guides
                            </h2>
                            <ul className="space-y-4">
                                {blogPosts.map(post => (
                                    <li key={post.slug}>
                                        <Link to={`/blog/${post.slug}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm line-clamp-2">
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
