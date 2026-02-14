import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface GalleryImage {
    id: number | string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openGallery = (index: number) => setSelectedIndex(index);
    const closeGallery = () => setSelectedIndex(null);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    // Lock body scroll when open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedIndex]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        layoutId={`gallery-card-${image.id}`}
                        onClick={() => openGallery(index)}
                        className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] md:aspect-[3/4] lg:aspect-square cursor-pointer bg-slate-200"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />

                        <motion.img
                            layoutId={`gallery-image-${image.id}`}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />


                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeGallery}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />

                        {/* Controls */}
                        <div className="absolute top-0 w-full p-4 flex justify-between items-center z-[110]">
                            <div className="text-white/70 font-mono text-sm px-4 py-2 rounded-full border border-white/10 bg-black/40">
                                {selectedIndex + 1} / {images.length}
                            </div>
                            <button
                                onClick={closeGallery}
                                className="p-2 text-white/70 hover:text-white transition-colors hover:rotate-90 duration-300"
                            >
                                <XMarkIcon className="w-10 h-10" />
                            </button>
                        </div>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 lg:left-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm group border border-white/5 hover:border-white/20"
                        >
                            <ChevronLeftIcon className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 lg:right-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm group border border-white/5 hover:border-white/20"
                        >
                            <ChevronRightIcon className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Main Image Container */}
                        <div
                            className="relative z-[105] max-w-7xl w-full h-full p-4 md:p-10 flex flex-col items-center justify-center pointer-events-none"
                        >
                            <motion.div
                                layoutId={`gallery-card-${images[selectedIndex].id}`}
                                className="relative w-fit h-fit pointer-events-auto"
                            >
                                <motion.img
                                    layoutId={`gallery-image-${images[selectedIndex].id}`}
                                    src={images[selectedIndex].src}
                                    alt={images[selectedIndex].alt}
                                    className="max-h-[70vh] md:max-h-[80vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
                                />
                            </motion.div>


                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
