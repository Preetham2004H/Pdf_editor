import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, keywords, path = '' }) {
    const siteName = 'DonPDF';
    const baseUrl = 'https://donpdf.com';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} – Free Online PDF Tools`;
    const pageUrl = `${baseUrl}${path}`;
    const ogImage = `${baseUrl}/og-image.png`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || 'Free online PDF tools to merge, split, compress, convert, and edit your PDF files. Fast, secure, and easy to use. No registration required.'} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={pageUrl} />

            {/* OpenGraph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || 'Free online PDF tools for everyone.'} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || 'Free online PDF tools for everyone.'} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}
