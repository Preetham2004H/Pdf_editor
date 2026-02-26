export default function AdBanner({ type = 'horizontal', id = 'ad-slot', className = '' }) {
    const sizes = {
        horizontal: 'min-h-[90px] w-full',
        sidebar: 'min-h-[250px] w-full',
        'in-content': 'min-h-[250px] w-full my-6',
        'sticky-mobile': 'fixed bottom-0 left-0 right-0 z-40 min-h-[50px] md:hidden',
        leaderboard: 'min-h-[90px] w-full max-w-[728px] mx-auto',
    };

    return (
        <div
            id={id}
            className={`ad-slot ${sizes[type] || sizes.horizontal} ${className}`}
            data-ad-slot={id}
            aria-label="Advertisement"
        >
            {/* Google AdSense code goes here */}
            {/* <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXX" data-ad-slot="XXXXXXX" /> */}
            <span className="text-xs opacity-50">Ad Space</span>
        </div>
    );
}
