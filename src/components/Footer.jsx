import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container-main">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                            </div>
                            <span className="font-bold text-lg text-white">PDFHelper</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">Free online PDF tools to merge, split, compress, convert, and edit your PDF files. Fast, secure, and easy to use.</p>
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">PDF Tools</h4>
                        <ul className="space-y-2 text-sm list-none p-0">
                            <li><Link to="/tools/merge-pdf" className="text-gray-400 hover:text-secondary transition-colors no-underline">Merge PDF</Link></li>
                            <li><Link to="/tools/split-pdf" className="text-gray-400 hover:text-secondary transition-colors no-underline">Split PDF</Link></li>
                            <li><Link to="/tools/compress-pdf" className="text-gray-400 hover:text-secondary transition-colors no-underline">Compress PDF</Link></li>
                            <li><Link to="/tools/image-to-pdf" className="text-gray-400 hover:text-secondary transition-colors no-underline">Image to PDF</Link></li>
                            <li><Link to="/tools/pdf-to-image" className="text-gray-400 hover:text-secondary transition-colors no-underline">PDF to Image</Link></li>
                        </ul>
                    </div>

                    {/* More Tools */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">More Tools</h4>
                        <ul className="space-y-2 text-sm list-none p-0">
                            <li><Link to="/tools/remove-pages" className="text-gray-400 hover:text-secondary transition-colors no-underline">Remove Pages</Link></li>
                            <li><Link to="/tools/add-watermark" className="text-gray-400 hover:text-secondary transition-colors no-underline">Add Watermark</Link></li>
                            <li><Link to="/tools/remove-watermark" className="text-gray-400 hover:text-secondary transition-colors no-underline">Remove Watermark</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm list-none p-0">
                            <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors no-underline">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors no-underline">Contact</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors no-underline">Blog</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-secondary transition-colors no-underline">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-secondary transition-colors no-underline">Terms & Conditions</Link></li>
                            <li><Link to="/disclaimer" className="text-gray-400 hover:text-secondary transition-colors no-underline">Disclaimer & DMCA</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Ad Slot */}
                <div className="ad-slot mb-8 py-4" id="footer-ad">Advertisement</div>

                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} PDFHelper. All rights reserved.</p>
                    <p>Made with ❤️ for productivity</p>
                </div>
            </div>
        </footer>
    );
}
