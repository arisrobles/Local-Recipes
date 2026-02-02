import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/ui/RecipeCard';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import { recipes } from '@/lib/data';

export const metadata = {
    title: 'Search Results | Classic Home Recipes',
    description: 'Search results for your favorite homemade recipes.',
};

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { q } = await searchParams;
    const query = typeof q === 'string' ? q : '';

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            {query ? `Results for "${query}"` : 'Search Recipes'}
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
                        </p>
                    </div>

                    {filteredRecipes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRecipes.map((recipe) => (
                                <RecipeCard key={recipe.id} {...recipe} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-muted/20 rounded-3xl">
                            <p className="text-2xl font-serif mb-4">No recipes found.</p>
                            <p className="text-muted-foreground mb-8">Try searching for "chicken", "beef", or "healthy".</p>
                            <div className="flex justify-center">
                                <AdPlaceholder width={300} height={250} label="Advertisement" />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
