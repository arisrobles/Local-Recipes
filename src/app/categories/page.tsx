import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { categories } from '@/lib/data';
import { ChevronRight, Salad, Soup, Heart, Clock } from 'lucide-react';

const iconMap: Record<string, any> = {
    "Salad": Salad,
    "Soup": Soup,
    "Heart": Heart,
    "Clock": Clock
};

export const metadata = {
    title: 'Recipe Categories | Classic Home Recipes',
    description: 'Browse our recipes by category: Healthy, Comfort Food, Diabetic Friendly, and more.',
};

export default function CategoriesIndexPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Browse by Category</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Find the perfect meal for your needs, from heart-healthy options to classic family comfort foods.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {categories.map((cat) => {
                        const Icon = iconMap[cat.icon] || Salad;
                        return (
                            <Link
                                key={cat.name}
                                href={`/categories/${cat.slug}`}
                                className="group flex items-center justify-between p-8 bg-surface border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-8 w-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{cat.name}</h2>
                                        <span className="text-muted-foreground">{cat.count} Recipes</span>
                                    </div>
                                </div>
                                <div className="bg-muted p-2 rounded-full group-hover:bg-primary/10">
                                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
}
