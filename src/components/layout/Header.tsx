'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-serif font-bold text-primary">Classic Home</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                    <Link href="/recipes" className="hover:text-primary transition-colors">Recipes</Link>
                    <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Healthy Tips</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="relative hidden lg:block">
                        <form onSubmit={handleSearch}>
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border rounded-full bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 text-foreground"
                            />
                        </form>
                    </div>
                    <button className="md:hidden p-2">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
