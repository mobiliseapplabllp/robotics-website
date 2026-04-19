import { useEffect, useRef } from "react";
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

/**
 * Accessible modal image viewer with:
 * - Escape key to close
 * - Focus trap (Tab / Shift+Tab cycles within the modal)
 * - Focus restoration to the trigger element on close
 * - Proper dialog semantics (role + aria-modal + aria-label)
 */
export function ProductLightbox({ images, isOpen, currentIndex, onClose, productName, glowColor }: ProductLightboxProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);

    // Focus management: trap focus inside, restore on close
    useEffect(() => {
        if (!isOpen) return;

        // Remember what was focused before opening so we can restore
        previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

        // Move focus into the modal
        closeButtonRef.current?.focus();

        // Prevent body scroll while modal is open
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
                return;
            }
            if (e.key === "Tab") {
                // Focus trap: only the close button is focusable here, so keep focus on it
                const dialog = dialogRef.current;
                if (!dialog) return;
                const focusables = dialog.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusables.length === 0) {
                    e.preventDefault();
                    return;
                }
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = originalOverflow;
            // Restore focus to the element that opened the lightbox
            previouslyFocusedRef.current?.focus();
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label={productName ? `${productName} image ${currentIndex + 1} of ${images.length}` : `Image ${currentIndex + 1} of ${images.length}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12"
                    onClick={onClose}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close image viewer"
                        className="absolute top-5 right-5 w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors z-[110]"
                    >
                        <X className="w-5 h-5" aria-hidden="true" />
                    </button>

                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        src={images[currentIndex]}
                        alt={productName ? `${productName} — enlarged view` : "Enlarged product image"}
                        className="max-w-full max-h-full object-contain rounded-2xl"
                        style={glowColor ? { boxShadow: `0 0 100px ${glowColor}` } : undefined}
                        onClick={(e) => e.stopPropagation()}
                    />

                    {productName && (
                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/60 text-sm font-bold uppercase tracking-widest z-[110] pointer-events-none">
                            <span>{productName}</span>
                            <span>Image {currentIndex + 1} / {images.length}</span>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
