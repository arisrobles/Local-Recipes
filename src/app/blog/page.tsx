import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export const metadata = {
    title: 'Healthy Living Tips | Classic Home Recipes',
    description: 'Advice and tips for senior nutrition, heart health, and easier cooking.',
};

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Healthy Living Tips</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Practical advice for maintaining a balanced lifestyle, managing nutrition, and enjoying your time in the kitchen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col h-full bg-surface border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                            <div className="h-48 overflow-hidden relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="text-primary font-bold text-sm uppercase tracking-wide underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary transition-all">
                                    Read Article
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <AdPlaceholder width="100%" height={90} label="Advertisement" className="max-w-[728px]" />
                </div>
            </main>
            <Footer />
        </div>
    );
}
