'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export default function ClaimRewardPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();
    const [holdProgress, setHoldProgress] = useState(0);
    const [showWarning, setShowWarning] = useState(true);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isHoldingRef = useRef(false);

    const handleProceed = () => {
        // Trigger native fullscreen on user interaction
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.warn(`Fullscreen error: ${err.message}`);
            });
        }

        setShowWarning(false);
        setIsCountingDown(true);

        // 1 second delay after clicking as requested
        setTimeout(() => {
            setIsCountingDown(false);
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.log("Autoplay blocked", err);
                });
            }
        }, 1000);
    };

    useEffect(() => {
        // Handle ESC key behavior for 'hold to exit' logic
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();

                if (!isHoldingRef.current) {
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
        };
    }, [router]);

    return (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden cursor-none">

            {/* Warning Modal */}
            {showWarning && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 cursor-default">
                    <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full text-center shadow-[0_0_100px_rgba(255,255,255,0.1)] animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <AlertTriangle className="h-10 w-10 text-amber-600" />
                        </div>

                        <h2 className="text-3xl font-black text-slate-800 mb-4 uppercase tracking-tight">
                            Security Protocol
                        </h2>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                            You are about to enter a secure masterclass session. Do you wish to proceed to claim your reward?
                        </p>

                        <div className="space-y-4">
                            <button
                                onClick={handleProceed}
                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl"
                            >
                                PROCEED TO CLAIM
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            <button
                                onClick={handleProceed}
                                className="w-full text-slate-400 font-bold hover:text-slate-600 transition-colors py-2"
                            >
                                Decline and Return
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading Indicator */}
            {isCountingDown && (
                <div className="absolute inset-0 z-[9998] flex items-center justify-center bg-black animate-in fade-in duration-500">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            )}

            <video
                ref={videoRef}
                className={`w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${showWarning || isCountingDown ? 'opacity-0' : 'opacity-100'}`}
                muted={false}
                playsInline
            >
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hold ESC Indicator */}
            {holdProgress > 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-[10001]">
                    <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4 shadow-sm">
                        <div
                            className="h-full bg-white transition-all duration-75 ease-linear"
                            style={{ width: `${holdProgress}%` }}
                        />
                    </div>
                    <p className="text-white font-black text-xl uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] animate-pulse">
                        Holding ESC to Exit...
                    </p>
                </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-50 flex items-center justify-center z-[10001]">
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">Cinema Mode • Hold ESC to Return Home</p>
            </div>
        </div>
    );
}
