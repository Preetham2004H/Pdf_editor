import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const tools = [
    { name: 'Image to PDF', path: '/tools/image-to-pdf' },
    { name: 'PDF to Image', path: '/tools/pdf-to-image' },
    { name: 'Merge PDF', path: '/tools/merge-pdf' },
    { name: 'Split PDF', path: '/tools/split-pdf' },
    { name: 'Compress PDF', path: '/tools/compress-pdf' },
    { name: 'Remove Pages', path: '/tools/remove-pages' },
    { name: 'Add Watermark', path: '/tools/add-watermark' },
    { name: 'Remove Watermark', path: '/tools/remove-watermark' },
];

const legalLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Disclaimer & DMCA', path: '/disclaimer' },
    { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const { dark, toggleTheme } = useTheme();
    const location = useLocation();

    const navLink = (path, label, onClick) => (
        <Link
            to={path}
            onClick={onClick}
            className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${location.pathname === path
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5'
                }`}
        >
            {label}
        </Link>
    );

    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
                <div className="container-main flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 no-underline">
                        <div className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg gradient-text hidden sm:block">PDFHelperEdit</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLink('/', 'Home')}

                        {/* Tools Dropdown */}
                        <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
                            <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/tools') ? 'text-primary bg-primary/10' : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5'}`}>
                                Tools
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {toolsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-1 w-56 glass-card p-2 shadow-xl"
                                    >
                                        {tools.map(tool => (
                                            <Link
                                                key={tool.path}
                                                to={tool.path}
                                                className="block px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors no-underline"
                                            >
                                                {tool.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLink('/blog', 'Blog')}

                        {/* More / Legal Dropdown */}
                        <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                            <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${['/about', '/contact', '/privacy', '/terms', '/disclaimer'].includes(location.pathname) ? 'text-primary bg-primary/10' : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5'}`}>
                                More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {moreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-1 w-52 glass-card p-2 shadow-xl"
                                    >
                                        {legalLinks.map(link => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className={`block px-3 py-2 rounded-lg text-sm transition-colors no-underline ${location.pathname === link.path ? 'text-primary bg-primary/10 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {dark ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                            )}
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {mobileOpen ? (
                                    <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                ) : (
                                    <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-700/50"
                        >
                            <div className="py-3 px-4 space-y-1">
                                <Link to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-700 dark:text-gray-200 hover:bg-primary/10">Home</Link>
                                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</div>
                                {tools.map(tool => (
                                    <Link key={tool.path} to={tool.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm no-underline text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary pl-6">{tool.name}</Link>
                                ))}
                                <div className="px-3 py-1 border-t border-gray-200/50 dark:border-gray-700/50 mt-1"></div>
                                <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-700 dark:text-gray-200 hover:bg-primary/10">Blog</Link>
                                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Legal & Info</div>
                                {legalLinks.filter(l => l.path !== '/blog').map(link => (
                                    <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm no-underline text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary pl-6">{link.name}</Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* Security Trust Strip */}
            <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-200/60 dark:border-green-700/30 py-1.5">
                <div className="container-main flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-green-700 dark:text-green-400 font-medium">
                    <span className="flex items-center gap-1">🔒 HTTPS Secured</span>
                    <span className="flex items-center gap-1">🗑️ Files auto-deleted after 30 min</span>
                    <span className="flex items-center gap-1">🚫 No file storage or sharing</span>
                    <span className="flex items-center gap-1">🛡️ No malware — 100% safe processing</span>
                    <span className="flex items-center gap-1">📱 Works on all devices</span>
                </div>
            </div>
        </>
    );
}
