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

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const { dark, toggleTheme } = useTheme();
    const location = useLocation();

    return (
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
                    <span className="font-bold text-lg gradient-text hidden sm:block">PDFHelper</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <Link to="/" className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${location.pathname === '/' ? 'text-primary bg-primary/10' : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5'}`}>
                        Home
                    </Link>

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

                    <Link to="/blog" className="px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors">Blog</Link>
                    <Link to="/about" className="px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors">About</Link>
                    <Link to="/contact" className="px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors">Contact</Link>
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
                            <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-700 dark:text-gray-200 hover:bg-primary/10">Blog</Link>
                            <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-700 dark:text-gray-200 hover:bg-primary/10">About</Link>
                            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-700 dark:text-gray-200 hover:bg-primary/10">Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
