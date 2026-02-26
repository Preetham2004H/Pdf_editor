import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const icons = {
    'image-to-pdf': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
    ),
    'pdf-to-image': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /></svg>
    ),
    'merge-pdf': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="8" height="14" rx="1" /><rect x="14" y="3" width="8" height="14" rx="1" /><path d="M10 14h4" /></svg>
    ),
    'split-pdf': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 3h5v5M4 20V15M21 3L14 10M4 20l7-7" /></svg>
    ),
    'compress-pdf': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" /><line x1="14" y1="10" x2="21" y2="3" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
    ),
    'remove-pages': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
    ),
    'add-watermark': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    'remove-watermark': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="4" y1="4" x2="20" y2="20" /></svg>
    ),
};

const colors = {
    'image-to-pdf': 'from-pink-500 to-rose-500',
    'pdf-to-image': 'from-purple-500 to-violet-500',
    'merge-pdf': 'from-blue-500 to-indigo-500',
    'split-pdf': 'from-cyan-500 to-teal-500',
    'compress-pdf': 'from-green-500 to-emerald-500',
    'remove-pages': 'from-orange-500 to-amber-500',
    'add-watermark': 'from-indigo-500 to-blue-500',
    'remove-watermark': 'from-red-500 to-pink-500',
};

export default function ToolCard({ slug, title, description, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link to={`/tools/${slug}`} className="no-underline block group">
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[slug] || 'from-primary to-secondary'} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {icons[slug] || icons['merge-pdf']}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
            </Link>
        </motion.div>
    );
}
