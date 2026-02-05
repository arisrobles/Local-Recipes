'use client';

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function PromotionModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal after 3 seconds to ensure user is engaged
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2rem] max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X className="h-6 w-6 text-muted-foreground" />
                </button>

                <div className="p-8 md:p-12 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Gift className="h-8 w-8 text-primary" />
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        A Special Gift for You!
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8">
                        Join 50,000+ home cooks and get our exclusive <span className="font-bold text-primary italic">"10 Classic Dinners"</span> e-book absolutely free.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        closeModal();
                        window.dispatchEvent(new CustomEvent('show-win-modals'));
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your best email"
                            className="w-full px-6 py-4 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg text-foreground"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg transition-all"
                        >
                            Send Me My Free Book
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-muted-foreground">
                        No spam. Only delicious recipes delivered weekly.
                    </p>
                </div>
            </div>
        </div>
    );
}
