import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Simple mapping for demo purposes
    const filteredRecipes = recipes.filter(r =>
        r.category.toLowerCase().includes(slug.toLowerCase()) ||
        slug === 'all'
    );

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

    if (filteredRecipes.length === 0 && slug !== 'all') {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{categoryName} Recipes</h1>
                    <p className="text-xl text-muted-foreground italic">
                        Wholesome and simple meals for your daily kitchen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
