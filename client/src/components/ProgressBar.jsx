import { motion } from 'framer-motion';

export default function ProgressBar({ progress = 0, status = 'Processing...' }) {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{status}</span>
                <span className="text-sm font-bold gradient-text">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full gradient-bg rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}
