import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

export default function FileUploader({ onFilesSelected, accept = { 'application/pdf': ['.pdf'] }, multiple = true, maxSize = 100 * 1024 * 1024 }) {
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            onFilesSelected(acceptedFiles);
        }
    }, [onFilesSelected]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        multiple,
        maxSize,
    });

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            {...getRootProps()}
            className={`upload-zone ${isDragActive ? 'active' : ''}`}
        >
            <input {...getInputProps()} />
            <motion.div
                animate={isDragActive ? { scale: 1.05, y: -5 } : { scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center animate-float">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                        {isDragActive ? 'Drop your files here!' : 'Drag & drop files here'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        or <span className="text-primary font-medium cursor-pointer">browse files</span>
                    </p>
                </div>
                <p className="text-xs text-gray-400">Maximum file size: 100MB</p>
            </motion.div>
        </motion.div>
    );
}
