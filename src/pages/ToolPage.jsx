import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FileUploader from '../components/FileUploader';
import ProgressBar from '../components/ProgressBar';
import DownloadButton from '../components/DownloadButton';
import AdBanner from '../components/AdBanner';
import SEOHead from '../components/SEOHead';
import { toolsConfig } from '../utils/toolsConfig';
import { mergePDFs, splitPDF, removePages, addWatermark, addImageWatermark, imagesToPDF, pdfToImages, getPageCount } from '../utils/pdfTools';

export default function ToolPage() {
    const { toolSlug } = useParams();
    const config = toolsConfig[toolSlug];

    const [files, setFiles] = useState([]);
    const [step, setStep] = useState('upload'); // upload | settings | processing | done | error
    const [progress, setProgress] = useState(0);
    const [resultUrl, setResultUrl] = useState(null);
    const [resultName, setResultName] = useState('output.pdf');
    const [resultImages, setResultImages] = useState([]); // For pdf-to-image results
    const [errorMsg, setErrorMsg] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [settings, setSettings] = useState({
        pagesToRemove: '',
        watermarkText: 'CONFIDENTIAL',
        watermarkOpacity: 0.3,
        watermarkType: 'text', // 'text' or 'image'
        watermarkLogo: null,
        watermarkLogoPreview: null,
        watermarkPosition: 'center',
        watermarkScale: 0.3,
        splitRange: '',
    });

    if (!config) {
        return (
            <div className="container-main section-padding text-center">
                <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
                <p className="text-gray-500 mb-6">The requested tool doesn't exist.</p>
                <Link to="/" className="btn-primary">Go Home</Link>
            </div>
        );
    }

    const handleFilesSelected = useCallback(async (selectedFiles) => {
        setFiles(selectedFiles);
        if (['remove-pages', 'split-pdf', 'add-watermark'].includes(toolSlug)) {
            if (toolSlug === 'remove-pages' || toolSlug === 'split-pdf') {
                try {
                    const count = await getPageCount(selectedFiles[0]);
                    setPageCount(count);
                } catch (e) {
                    setPageCount(0);
                }
            }
            setStep('settings');
        } else {
            processFiles(selectedFiles);
        }
    }, [toolSlug]);

    const handleLogoSelected = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSettings(s => ({
                ...s,
                watermarkLogo: file,
                watermarkLogoPreview: URL.createObjectURL(file),
            }));
        }
    };

    const processFiles = async (filesToProcess = files) => {
        setStep('processing');
        setProgress(0);
        setErrorMsg('');
        setResultImages([]);

        try {
            let result;
            let name = 'output.pdf';

            switch (toolSlug) {
                case 'merge-pdf':
                    result = await mergePDFs(filesToProcess, setProgress);
                    name = 'merged.pdf';
                    break;

                case 'split-pdf': {
                    let ranges = null;
                    if (settings.splitRange.trim()) {
                        ranges = settings.splitRange.split(',').map(r => {
                            const [s, e] = r.trim().split('-').map(Number);
                            return { start: s, end: e || s };
                        });
                    }
                    const splitResults = await splitPDF(filesToProcess[0], ranges, setProgress);
                    result = splitResults[0].data;
                    name = splitResults[0].name;
                    break;
                }

                case 'remove-pages': {
                    const pages = settings.pagesToRemove.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
                    result = await removePages(filesToProcess[0], pages, setProgress);
                    name = 'pages_removed.pdf';
                    break;
                }

                case 'add-watermark':
                    if (settings.watermarkType === 'image' && settings.watermarkLogo) {
                        result = await addImageWatermark(
                            filesToProcess[0],
                            settings.watermarkLogo,
                            {
                                opacity: parseFloat(settings.watermarkOpacity),
                                scale: parseFloat(settings.watermarkScale),
                                position: settings.watermarkPosition,
                            },
                            setProgress
                        );
                    } else {
                        result = await addWatermark(filesToProcess[0], settings.watermarkText, {
                            opacity: parseFloat(settings.watermarkOpacity),
                        }, setProgress);
                    }
                    name = 'watermarked.pdf';
                    break;

                case 'remove-watermark':
                    result = await filesToProcess[0].arrayBuffer();
                    result = new Uint8Array(result);
                    name = 'processed.pdf';
                    setProgress(100);
                    break;

                case 'image-to-pdf':
                    result = await imagesToPDF(filesToProcess, setProgress);
                    name = 'images.pdf';
                    break;

                case 'pdf-to-image': {
                    const images = await pdfToImages(filesToProcess[0], setProgress);
                    setResultImages(images);
                    setStep('done');
                    return; // Early return — no single blob result
                }

                case 'compress-pdf': {
                    const { PDFDocument } = await import('pdf-lib');
                    const bytes = await filesToProcess[0].arrayBuffer();
                    const pdf = await PDFDocument.load(bytes);
                    result = await pdf.save();
                    name = 'compressed.pdf';
                    setProgress(100);
                    break;
                }

                default:
                    throw new Error('Unsupported tool');
            }

            const blob = new Blob([result], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setResultUrl(url);
            setResultName(name);
            setStep('done');
        } catch (err) {
            console.error(err);
            setErrorMsg(err.message || 'An error occurred while processing your file.');
            setStep('error');
        }
    };

    const reset = () => {
        setFiles([]);
        setStep('upload');
        setProgress(0);
        setResultUrl(null);
        setResultImages([]);
        setErrorMsg('');
    };

    const downloadImage = (img) => {
        const link = document.createElement('a');
        link.href = img.url;
        link.download = img.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <SEOHead
                title={config.title}
                description={config.description}
                keywords={config.keywords}
                path={`/tools/${toolSlug}`}
            />

            <section className="section-padding pt-12 pb-8">
                <div className="container-main max-w-3xl">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                        <Link to="/" className="hover:text-primary transition-colors no-underline text-gray-400">Home</Link>
                        <span>/</span>
                        <span className="text-gray-600 dark:text-gray-300">{config.title}</span>
                    </nav>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{config.title}</h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">{config.description}</p>
                    </motion.div>

                    {/* Tool Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-8"
                    >
                        <AnimatePresence mode="wait">
                            {/* Upload Step */}
                            {step === 'upload' && (
                                <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <FileUploader
                                        onFilesSelected={handleFilesSelected}
                                        accept={config.accept}
                                        multiple={config.multiple}
                                    />
                                </motion.div>
                            )}

                            {/* Settings Step */}
                            {step === 'settings' && (
                                <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white text-sm font-bold">⚙️</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Settings</h3>
                                                <p className="text-sm text-gray-500">{files.length} file(s) selected{pageCount > 0 ? ` • ${pageCount} pages` : ''}</p>
                                            </div>
                                        </div>

                                        {toolSlug === 'remove-pages' && (
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Pages to remove (comma-separated)</label>
                                                <input
                                                    type="text"
                                                    value={settings.pagesToRemove}
                                                    onChange={e => setSettings(s => ({ ...s, pagesToRemove: e.target.value }))}
                                                    placeholder="e.g. 1, 3, 5"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                />
                                                <p className="text-xs text-gray-400 mt-1">Total pages: {pageCount}</p>
                                            </div>
                                        )}

                                        {toolSlug === 'split-pdf' && (
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Split ranges (comma-separated, leave empty for all pages)</label>
                                                <input
                                                    type="text"
                                                    value={settings.splitRange}
                                                    onChange={e => setSettings(s => ({ ...s, splitRange: e.target.value }))}
                                                    placeholder="e.g. 1-3, 4-6"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                />
                                                <p className="text-xs text-gray-400 mt-1">Total pages: {pageCount}</p>
                                            </div>
                                        )}

                                        {toolSlug === 'add-watermark' && (
                                            <>
                                                {/* Watermark Type Toggle */}
                                                <div>
                                                    <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-200">Watermark Type</label>
                                                    <div className="flex gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setSettings(s => ({ ...s, watermarkType: 'text' }))}
                                                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border-2 ${settings.watermarkType === 'text'
                                                                    ? 'border-primary bg-primary/10 text-primary'
                                                                    : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'
                                                                }`}
                                                        >
                                                            ✏️ Text Watermark
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setSettings(s => ({ ...s, watermarkType: 'image' }))}
                                                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border-2 ${settings.watermarkType === 'image'
                                                                    ? 'border-primary bg-primary/10 text-primary'
                                                                    : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'
                                                                }`}
                                                        >
                                                            🖼️ Logo / Image
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Text Watermark Settings */}
                                                {settings.watermarkType === 'text' && (
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Watermark Text</label>
                                                        <input
                                                            type="text"
                                                            value={settings.watermarkText}
                                                            onChange={e => setSettings(s => ({ ...s, watermarkText: e.target.value }))}
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                        />
                                                    </div>
                                                )}

                                                {/* Image/Logo Watermark Settings */}
                                                {settings.watermarkType === 'image' && (
                                                    <>
                                                        <div>
                                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Upload Logo / Image</label>
                                                            <div className="relative">
                                                                <input
                                                                    type="file"
                                                                    accept="image/png,image/jpeg,image/jpg"
                                                                    onChange={handleLogoSelected}
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                                                                />
                                                            </div>
                                                            {settings.watermarkLogoPreview && (
                                                                <div className="mt-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 inline-block">
                                                                    <img src={settings.watermarkLogoPreview} alt="Logo preview" className="max-h-20 max-w-[200px] object-contain" />
                                                                </div>
                                                            )}
                                                            <p className="text-xs text-gray-400 mt-1">Supported: PNG, JPG (PNG recommended for transparent logos)</p>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Position</label>
                                                            <div className="grid grid-cols-3 gap-2">
                                                                {[
                                                                    { value: 'top-left', label: '↖ Top Left' },
                                                                    { value: 'center', label: '⊕ Center' },
                                                                    { value: 'top-right', label: '↗ Top Right' },
                                                                    { value: 'bottom-left', label: '↙ Bottom Left' },
                                                                    { value: 'bottom-right', label: '↘ Bottom Right' },
                                                                ].map(pos => (
                                                                    <button
                                                                        key={pos.value}
                                                                        type="button"
                                                                        onClick={() => setSettings(s => ({ ...s, watermarkPosition: pos.value }))}
                                                                        className={`py-2 px-3 rounded-lg text-xs font-medium transition-all border ${settings.watermarkPosition === pos.value
                                                                                ? 'border-primary bg-primary/10 text-primary'
                                                                                : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'
                                                                            }`}
                                                                    >
                                                                        {pos.label}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Logo Scale: {Math.round(settings.watermarkScale * 100)}%</label>
                                                            <input
                                                                type="range"
                                                                min="0.05"
                                                                max="1"
                                                                step="0.05"
                                                                value={settings.watermarkScale}
                                                                onChange={e => setSettings(s => ({ ...s, watermarkScale: e.target.value }))}
                                                                className="w-full accent-primary"
                                                            />
                                                        </div>
                                                    </>
                                                )}

                                                {/* Common opacity control */}
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Opacity: {Math.round(settings.watermarkOpacity * 100)}%</label>
                                                    <input
                                                        type="range"
                                                        min="0.05"
                                                        max="1"
                                                        step="0.05"
                                                        value={settings.watermarkOpacity}
                                                        onChange={e => setSettings(s => ({ ...s, watermarkOpacity: e.target.value }))}
                                                        className="w-full accent-primary"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        <button
                                            onClick={() => processFiles()}
                                            disabled={toolSlug === 'add-watermark' && settings.watermarkType === 'image' && !settings.watermarkLogo}
                                            className="btn-primary w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Process File
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Processing Step */}
                            {step === 'processing' && (
                                <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                                    <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-2xl flex items-center justify-center animate-pulse">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                    </div>
                                    <ProgressBar progress={progress} status="Processing your file..." />
                                </motion.div>
                            )}

                            {/* Done Step */}
                            {step === 'done' && (
                                <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-500 flex items-center justify-center"
                                    >
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Done! 🎉</h3>
                                    <p className="text-sm text-gray-500 mb-6">Your file has been processed successfully.</p>

                                    {/* PDF-to-Image results: show image grid with individual downloads */}
                                    {resultImages.length > 0 ? (
                                        <div>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-left">
                                                {resultImages.map((img, i) => (
                                                    <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden group">
                                                        <img src={img.url} alt={`Page ${i + 1}`} className="w-full h-auto" />
                                                        <div className="p-2 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                                                            <span className="text-xs text-gray-500">Page {i + 1}</span>
                                                            <button
                                                                onClick={() => downloadImage(img)}
                                                                className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
                                                            >
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => {
                                                    resultImages.forEach(img => downloadImage(img));
                                                }}
                                                className="btn-primary"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                                Download All Images
                                            </button>
                                        </div>
                                    ) : (
                                        <DownloadButton url={resultUrl} filename={resultName} />
                                    )}

                                    <button onClick={reset} className="mt-6 text-sm text-primary font-medium hover:underline block mx-auto">
                                        Process another file
                                    </button>
                                </motion.div>
                            )}

                            {/* Error Step */}
                            {step === 'error' && (
                                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500 flex items-center justify-center">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Oops! Something went wrong</h3>
                                    <p className="text-sm text-gray-500 mb-6">{errorMsg}</p>
                                    <button onClick={reset} className="btn-primary">Try Again</button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* File list when in upload mode with files */}
                    {files.length > 0 && step === 'upload' && (
                        <div className="mt-4 glass-card p-4">
                            <h4 className="text-sm font-medium mb-2">Selected Files:</h4>
                            {files.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 text-sm text-gray-600 dark:text-gray-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /></svg>
                                    {f.name} <span className="text-gray-400 text-xs">({(f.size / 1024 / 1024).toFixed(2)} MB)</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Ad */}
            <div className="container-main max-w-3xl pb-12">
                <AdBanner type="in-content" id="tool-bottom-ad" />
            </div>
        </>
    );
}
