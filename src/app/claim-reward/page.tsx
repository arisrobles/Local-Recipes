'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClaimRewardPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();
    const [holdProgress, setHoldProgress] = useState(0);
    const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isHoldingRef = useRef(false);

    useEffect(() => {
        // Delay playing for 3 seconds
        const playTimer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.log("Autoplay blocked", err);
                });
            }
        }, 3000);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !isHoldingRef.current) {
                isHoldingRef.current = true;

                // Start progress tracking
                let startTime = Date.now();
                const duration = 2000; // 2 seconds hold

                holdTimerRef.current = setInterval(() => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min((elapsed / duration) * 100, 100);
                    setHoldProgress(progress);

                    if (elapsed >= duration) {
                        if (holdTimerRef.current) clearInterval(holdTimerRef.current);
                        // Exit logic
                        if (document.fullscreenElement) {
                            document.exitFullscreen().catch(() => { });
                        }
                        router.push('/');
                    }
                }, 50);
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                isHoldingRef.current = false;
                if (holdTimerRef.current) {
                    clearInterval(holdTimerRef.current);
                    holdTimerRef.current = null;
                }
                setHoldProgress(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (holdTimerRef.current) clearInterval(holdTimerRef.current);
            clearTimeout(playTimer);
        };
    }, [router]);

    return (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden cursor-none">
            <video
                ref={videoRef}
                className="w-full h-full object-cover pointer-events-none"
                muted={false}
                playsInline
            >
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hold ESC Indicator */}
            {holdProgress > 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                        <div
                            className="h-full bg-white transition-all duration-75 ease-linear"
                            style={{ width: `${holdProgress}%` }}
                        />
                    </div>
                    <p className="text-white font-black text-xl uppercase tracking-widest drop-shadow-lg animate-pulse">
                        Holding ESC to Exit...
                    </p>
                </div>
            )}

            {/* Subtle invisible click to unmute help (optional but good for browsers) */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-50 flex items-center justify-center">
                <p className="text-white/30 text-xs uppercase tracking-tighter">Pure Cinema Mode • Hold ESC to Return</p>
            </div>
        </div>
    );
}
