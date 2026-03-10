import { useEffect, useRef } from 'react';

export default function AdBanner({ type = 'horizontal', id = 'ad-slot', className = '' }) {
    const adRef = useRef(null);

    const sizes = {
        horizontal: 'min-h-[90px] w-full',
        sidebar: 'min-h-[250px] w-full',
        'in-content': 'min-h-[250px] w-full my-6',
        'sticky-mobile': 'fixed bottom-0 left-0 right-0 z-40 min-h-[50px] md:hidden',
        leaderboard: 'min-h-[90px] w-full max-w-[728px] mx-auto',
    };

    useEffect(() => {
        try {
            if (adRef.current && adRef.current.offsetWidth > 0) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div
            id={id}
            className={`ad-slot overflow-hidden ${sizes[type] || sizes.horizontal} ${className}`}
            aria-label="Advertisement"
        >
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3378246022656041"
                data-ad-slot="auto"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}
