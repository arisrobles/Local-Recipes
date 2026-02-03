'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

export default function StickyFooterAd() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-2 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-4xl relative flex items-center justify-center min-h-[90px]">
                {/* Ad Unit: Standard Leaderboard 728x90 */}
                <AdPlaceholder width={728} height={90} label="Sticky Footer Ad" className="hidden md:flex" />

                {/* Mobile Banner 320x50 (fallback) */}
                <AdPlaceholder width={320} height={50} label="Mobile Ad" className="flex md:hidden" />

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-6 right-0 bg-white border rounded-full p-1 shadow-md hover:bg-muted font-bold text-muted-foreground"
                    aria-label="Close Ad"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
