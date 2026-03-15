import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ProductLightboxProps {
    images: string[];
    isOpen: boolean;
    currentIndex: number;
    onClose: () => void;
    /** Optional product name shown in footer */
    productName?: string;
    /** Accent color for glow effect (e.g. "rgba(249,115,22,0.15)"). Omit for no glow. */
    glowColor?: string;
}

export function ProductLightbox({ images, isOpen, currentIndex, onClose, productName, glowColor }: ProductLightboxProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[110]"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        src={images[currentIndex]}
                        className="max-w-full max-h-full object-contain rounded-2xl"
                        style={glowColor ? { boxShadow: `0 0 100px ${glowColor}` } : undefined}
                        onClick={(e) => e.stopPropagation()}
                    />

                    {productName && (
                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/40 text-sm font-bold uppercase tracking-widest z-[110]">
                            <span>{productName}</span>
                            <span>Image {currentIndex + 1} / {images.length}</span>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
