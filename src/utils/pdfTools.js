import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';

/**
 * Merge multiple PDF files into one
 */
export async function mergePDFs(files, onProgress) {
    const merged = await PDFDocument.create();
    for (let i = 0; i < files.length; i++) {
        const bytes = await files[i].arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const pages = await merged.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => merged.addPage(page));
        onProgress?.((i + 1) / files.length * 100);
    }
    return await merged.save();
}

/**
 * Split a PDF into individual pages
 */
export async function splitPDF(file, pageRanges, onProgress) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const results = [];

    if (!pageRanges || pageRanges.length === 0) {
        const indices = pdf.getPageIndices();
        for (let i = 0; i < indices.length; i++) {
            const newDoc = await PDFDocument.create();
            const [page] = await newDoc.copyPages(pdf, [indices[i]]);
            newDoc.addPage(page);
            results.push({ name: `page_${i + 1}.pdf`, data: await newDoc.save() });
            onProgress?.(((i + 1) / indices.length) * 100);
        }
    } else {
        for (let r = 0; r < pageRanges.length; r++) {
            const { start, end } = pageRanges[r];
            const newDoc = await PDFDocument.create();
            const indices = [];
            for (let p = start - 1; p < end; p++) indices.push(p);
            const pages = await newDoc.copyPages(pdf, indices);
            pages.forEach(p => newDoc.addPage(p));
            results.push({ name: `pages_${start}-${end}.pdf`, data: await newDoc.save() });
            onProgress?.(((r + 1) / pageRanges.length) * 100);
        }
    }
    return results;
}

/**
 * Remove specific pages from a PDF
 */
export async function removePages(file, pagesToRemove, onProgress) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const newDoc = await PDFDocument.create();
    const totalPages = pdf.getPageCount();
    const keepIndices = [];

    for (let i = 0; i < totalPages; i++) {
        if (!pagesToRemove.includes(i + 1)) {
            keepIndices.push(i);
        }
    }

    const pages = await newDoc.copyPages(pdf, keepIndices);
    pages.forEach((page, i) => {
        newDoc.addPage(page);
        onProgress?.(((i + 1) / pages.length) * 100);
    });

    return await newDoc.save();
}

/**
 * Add text watermark to PDF
 */
export async function addWatermark(file, watermarkText = 'CONFIDENTIAL', options = {}, onProgress) {
    const { opacity = 0.3, fontSize = 50, rotation = -45, color = { r: 0.5, g: 0.5, b: 0.5 } } = options;
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const font = await pdf.embedFont(StandardFonts.HelveticaBold);
    const pages = pdf.getPages();

    pages.forEach((page, i) => {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);

        page.drawText(watermarkText, {
            x: (width - textWidth) / 2,
            y: height / 2,
            size: fontSize,
            font,
            color: rgb(color.r, color.g, color.b),
            opacity,
            rotate: degrees(rotation),
        });
        onProgress?.(((i + 1) / pages.length) * 100);
    });

    return await pdf.save();
}

/**
 * Add image/logo watermark to PDF
 */
export async function addImageWatermark(file, logoFile, options = {}, onProgress) {
    const { opacity = 0.3, scale = 0.3, position = 'center' } = options;
    const pdfBytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(pdfBytes);
    const logoBytes = await logoFile.arrayBuffer();

    // Try embedding as PNG first, fall back to JPG
    let logo;
    try {
        logo = await pdf.embedPng(logoBytes);
    } catch {
        try {
            logo = await pdf.embedJpg(logoBytes);
        } catch {
            throw new Error('Unsupported image format. Please use PNG or JPG.');
        }
    }

    const logoDims = logo.scale(scale);
    const pages = pdf.getPages();

    pages.forEach((page, i) => {
        const { width, height } = page.getSize();
        let x, y;

        switch (position) {
            case 'top-left':
                x = 30;
                y = height - logoDims.height - 30;
                break;
            case 'top-right':
                x = width - logoDims.width - 30;
                y = height - logoDims.height - 30;
                break;
            case 'bottom-left':
                x = 30;
                y = 30;
                break;
            case 'bottom-right':
                x = width - logoDims.width - 30;
                y = 30;
                break;
            case 'center':
            default:
                x = (width - logoDims.width) / 2;
                y = (height - logoDims.height) / 2;
                break;
        }

        page.drawImage(logo, {
            x,
            y,
            width: logoDims.width,
            height: logoDims.height,
            opacity,
        });
        onProgress?.(((i + 1) / pages.length) * 100);
    });

    return await pdf.save();
}

/**
 * Convert images to PDF
 */
export async function imagesToPDF(files, onProgress) {
    const pdf = await PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const bytes = await file.arrayBuffer();
        let image;

        // Try PNG first, fall back to JPG
        try {
            image = await pdf.embedPng(bytes);
        } catch {
            image = await pdf.embedJpg(bytes);
        }

        const { width, height } = image.scaleToFit(595, 842); // A4-ish
        const page = pdf.addPage([width, height]);
        page.drawImage(image, { x: 0, y: 0, width, height });
        onProgress?.(((i + 1) / files.length) * 100);
    }

    return await pdf.save();
}

/**
 * Convert PDF pages to images using pdfjs-dist canvas rendering
 * Returns an array of { name, blob } for each page
 */
export async function pdfToImages(file, onProgress) {
    const pdfjsLib = await import('pdfjs-dist');
    const workerUrl = await import('pdfjs-dist/build/pdf.worker.mjs?url');

    // Set worker source from local node_modules
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl.default;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdf.numPages;
    const images = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const scale = 2; // High quality rendering
        const viewport = page.getViewport({ scale });

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');

        await page.render({ canvasContext: ctx, viewport }).promise;

        // Convert canvas to blob
        const blob = await new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png', 0.95);
        });

        images.push({
            name: `page_${pageNum}.png`,
            blob,
            url: URL.createObjectURL(blob),
        });

        onProgress?.((pageNum / totalPages) * 100);
    }

    return images;
}

/**
 * Get page count of a PDF
 */
export async function getPageCount(file) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    return pdf.getPageCount();
}
