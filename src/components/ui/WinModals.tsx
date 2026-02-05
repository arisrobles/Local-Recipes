'use client';

import { useState, useEffect } from 'react';
import { PartyPopper, Trophy, Star, X, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WinModals() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleShow = () => {
            setIsVisible(true);
            // Optional: add some sound or haptics if desired
            console.log('Win modals triggered!');
        };
        window.addEventListener('show-win-modals', handleShow);
        return () => window.removeEventListener('show-win-modals', handleShow);
    }, []);

    const handleClaim = () => {
        setIsVisible(false);
        router.push('/claim-reward');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[200] overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                onClick={() => setIsVisible(false)}
            />

            {/* Modals Container */}
            <div className="relative h-full w-full flex items-center justify-center">

                {/* 1. Top Left Modal */}
                <div className="absolute top-[10%] left-[10%] w-[320px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-center transform -rotate-6 animate-slide-top hover:rotate-0 transition-transform cursor-pointer group">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <PartyPopper className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Amazing Luck!</h3>
                    <p className="text-slate-600">You've just unlocked our exclusive <span className="font-bold text-primary italic">Secret Ingredient</span> guide!</p>
                </div>

                {/* 2. Main Center Modal */}
                <div className="z-10 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-white rounded-[3rem] shadow-[0_30px_100px_rgba(255,165,0,0.5)] p-12 max-w-lg w-full text-center animate-zoom-in">
                    <div className="relative inline-block mb-8">
                        <Trophy className="h-24 w-24 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]" />
                        <div className="absolute -top-4 -right-4">
                            <Star className="h-10 w-10 text-white fill-current animate-pulse" />
                        </div>
                    </div>

                    <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter italic drop-shadow-sm">
                        CONGRATULATIONS!
                    </h2>

                    <div className="space-y-4 mb-10">
                        <p className="text-2xl font-bold">YOU WIN THE GRAND PRIZE!</p>
                        <p className="text-white/90 text-lg leading-relaxed">
                            You've been selected as our <span className="font-black underline decoration-white">Golden Member</span> of the week. Exclusive rewards are coming your way!
                        </p>
                    </div>

                    <button
                        onClick={handleClaim}
                        className="w-full bg-white text-orange-600 py-6 rounded-2xl font-black text-xl hover:scale-105 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                        <Gift className="h-6 w-6" />
                        CLAIM MY REWARDS
                    </button>

                    <p className="mt-6 text-sm text-white/70 font-medium">
                        Check your email for the next steps!
                    </p>
                </div>

                {/* 3. Bottom Right Modal */}
                <div className="absolute bottom-[10%] right-[10%] w-[320px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-center transform rotate-6 animate-slide-bottom hover:rotate-0 transition-transform cursor-pointer group">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Star className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Instant Bonus!</h3>
                    <p className="text-slate-600">A <span className="font-bold text-emerald-600">$50 Grocery Voucher</span> entry has been added to your account!</p>
                </div>

            </div>

            {/* Global Close Button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all hover:rotate-90"
                aria-label="Close"
            >
                <X className="h-8 w-8" />
            </button>
        </div>
    );
}
