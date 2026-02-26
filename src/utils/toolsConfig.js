// Tool configurations for all PDF tools
export const toolsConfig = {
    'image-to-pdf': {
        title: 'Image to PDF Converter',
        description: 'Convert your images (JPG, PNG, WEBP) to PDF format. Combine multiple images into a single PDF document.',
        accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'] },
        keywords: 'image to pdf, jpg to pdf, png to pdf, convert image to pdf online free',
        multiple: true,
    },
    'pdf-to-image': {
        title: 'PDF to Image Converter',
        description: 'Convert PDF pages to high-quality JPG or PNG images. Extract all pages from your PDF as separate image files.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'pdf to image, pdf to jpg, pdf to png, convert pdf to image online',
        multiple: false,
    },
    'merge-pdf': {
        title: 'Merge PDF Files',
        description: 'Combine multiple PDF files into one document. Simply upload your files, arrange them in order, and merge.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'merge pdf, combine pdf, join pdf files online free',
        multiple: true,
    },
    'split-pdf': {
        title: 'Split PDF',
        description: 'Split a PDF into separate files. Extract specific pages or split by page ranges.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'split pdf, separate pdf pages, extract pdf pages online free',
        multiple: false,
    },
    'compress-pdf': {
        title: 'Compress PDF',
        description: 'Reduce your PDF file size without losing quality. Perfect for email attachments and web uploads.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'compress pdf, reduce pdf size, resize pdf online free',
        multiple: false,
    },
    'remove-pages': {
        title: 'Remove PDF Pages',
        description: 'Delete specific pages from your PDF document. Preview your PDF and select pages to remove.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'remove pdf pages, delete pdf pages, remove pages from pdf online',
        multiple: false,
    },
    'add-watermark': {
        title: 'Add Watermark to PDF',
        description: 'Add custom text or image watermarks to your PDF documents. Control position, size, opacity, and rotation.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'add watermark to pdf, pdf watermark, watermark pdf online free',
        multiple: false,
    },
    'remove-watermark': {
        title: 'Remove Watermark from PDF',
        description: 'Remove watermarks from your PDF files. Clean up your documents by removing unwanted watermarks.',
        accept: { 'application/pdf': ['.pdf'] },
        keywords: 'remove watermark from pdf, pdf watermark remover, delete watermark pdf',
        multiple: false,
    },
};
