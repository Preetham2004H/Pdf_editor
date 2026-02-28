import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, keywords, path = '' }) {
    const siteName = 'PDFHelper';
    const baseUrl = 'https://pdfmasterpro.com';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} – Free Online PDF Tools`;
    const pageUrl = `${baseUrl}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || 'Free online PDF tools to merge, split, compress, convert, and edit your PDF files. Fast, secure, and easy to use.'} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={pageUrl} />

            {/* OpenGraph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
