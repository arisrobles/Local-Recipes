import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import EngagementTracker from '@/components/EngagementTracker';
import { blogPosts, recipes } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <EngagementTracker />
            <Header />

            <main className="flex-grow pb-24">
                {/* Hero Header */}
                <div className="bg-muted/30 py-16">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Healthy Tips
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wide">
                                {post.category}
                            </span>
                            <span className="text-muted-foreground text-sm flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-t border-b py-6 mt-8">
                            <div className="text-muted-foreground">
                                Published on <span className="text-foreground font-medium">{post.date}</span>
                            </div>
                            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Share2 className="h-4 w-4" />
                                <span className="hidden sm:inline">Share Article</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                        <article>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto rounded-3xl mb-10 shadow-lg"
                            />

                            {/* Ad in middle of content */}
                            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary mb-8"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="my-10">
                                <AdPlaceholder width="100%" height={250} label="Advertisement" />
                            </div>

                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            <div className="bg-surface border p-6 rounded-2xl sticky top-24">
                                <h3 className="font-serif font-bold text-xl mb-4">Related Recipes</h3>
                                <div className="space-y-4">
                                    {recipes.slice(0, 3).map(recipe => (
                                        <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="flex gap-4 group">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">{recipe.title}</h4>
                                                <span className="text-xs text-muted-foreground">{recipe.category}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t">
                                    <AdPlaceholder width="100%" height={250} label="Sidebar Ad" />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
