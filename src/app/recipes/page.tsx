import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/lib/data';

export const metadata = {
    title: 'All Recipes | Classic Home Recipes',
    description: 'Browse our collection of nutritious, home-cooked meals designed for a healthy lifestyle.',
};

export default function AllRecipesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">All Recipes</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Explore our complete collection of family favorites, from heaty stews to light, diabetic-friendly dinners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
