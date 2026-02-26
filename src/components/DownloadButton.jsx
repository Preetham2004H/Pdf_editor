import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function DownloadButton({ url, filename = 'download.pdf', onDownload }) {
    const handleDownload = () => {
        // Fire confetti!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#4F46E5', '#06B6D4', '#F59E0B', '#10B981'],
        });

        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        onDownload?.();
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-primary !px-8 !py-4 !text-lg !rounded-2xl"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download File
            </motion.button>
            <p className="text-xs text-gray-400 dark:text-gray-500">Your file is ready! Click to download.</p>
        </div>
    );
}
