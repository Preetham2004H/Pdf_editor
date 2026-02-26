import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="container-main">
                        <div className="glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">🍪 We use cookies</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">We use cookies to enhance your experience and analyze traffic. By clicking "Accept", you consent to our use of cookies. Read our <a href="/privacy" className="text-primary underline">Privacy Policy</a>.</p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button onClick={decline} className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Decline</button>
                                <button onClick={accept} className="btn-primary !py-2 !px-5 !text-sm">Accept</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
