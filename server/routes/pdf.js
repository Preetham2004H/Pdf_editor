const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Compress PDF endpoint
router.post('/compress', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

        const inputPath = req.file.path;
        const inputBytes = fs.readFileSync(inputPath);
        const pdf = await PDFDocument.load(inputBytes);

        // Re-serialize to strip unused objects (basic compression)
        const compressedBytes = await pdf.save();
        const outputName = 'compressed_' + req.file.filename;
        const outputPath = path.join(__dirname, '..', 'uploads', outputName);
        fs.writeFileSync(outputPath, compressedBytes);

        // Clean up input
        fs.unlinkSync(inputPath);

        res.download(outputPath, 'compressed.pdf', () => {
            // Clean up output after download
            if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
        });
    } catch (err) {
        console.error('Compress error:', err);
        res.status(500).json({ error: 'Failed to compress PDF' });
    }
});

// Merge PDFs endpoint
router.post('/merge', upload.array('files', 20), async (req, res) => {
    try {
        if (!req.files || req.files.length < 2) {
            return res.status(400).json({ error: 'At least 2 files required' });
        }

        const merged = await PDFDocument.create();

        for (const file of req.files) {
            const bytes = fs.readFileSync(file.path);
            const pdf = await PDFDocument.load(bytes);
            const pages = await merged.copyPages(pdf, pdf.getPageIndices());
            pages.forEach(page => merged.addPage(page));
            fs.unlinkSync(file.path);
        }

        const mergedBytes = await merged.save();
        const outputName = 'merged_' + Date.now() + '.pdf';
        const outputPath = path.join(__dirname, '..', 'uploads', outputName);
        fs.writeFileSync(outputPath, mergedBytes);

        res.download(outputPath, 'merged.pdf', () => {
            if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
        });
    } catch (err) {
        console.error('Merge error:', err);
        res.status(500).json({ error: 'Failed to merge PDFs' });
    }
});

// Upload and get info
router.post('/info', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

        const bytes = fs.readFileSync(req.file.path);
        const pdf = await PDFDocument.load(bytes);
        const pageCount = pdf.getPageCount();
        const title = pdf.getTitle() || '';
        const author = pdf.getAuthor() || '';

        fs.unlinkSync(req.file.path);

        res.json({
            pageCount,
            title,
            author,
            fileSize: req.file.size,
            fileName: req.file.originalname,
        });
    } catch (err) {
        console.error('Info error:', err);
        res.status(500).json({ error: 'Failed to read PDF info' });
    }
});

module.exports = router;
