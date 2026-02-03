import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EngagementTracker from '@/components/EngagementTracker';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import { recipes } from '@/lib/data';
import { Clock, ChefHat, Users, CheckCircle2, ArrowLeft, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return recipes.map((recipe) => ({
        id: recipe.id,
    }));
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <EngagementTracker />
            <Header />

            <main className="flex-grow pb-24">
                {/* Breadcrumb & Navigation */}
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-4">
                                {recipe.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                                {recipe.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {recipe.description}
                            </p>

                            <div className="flex flex-wrap gap-8 py-6 border-y mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="bg-muted p-2 rounded-lg">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold">Prep Time</span>
                                        <span className="font-bold">{recipe.time}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-muted p-2 rounded-lg">
                                        <ChefHat className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold">Skill Level</span>
                                        <span className="font-bold">{recipe.difficulty}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-muted p-2 rounded-lg">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold">Servings</span>
                                        <span className="font-bold">{recipe.servings} People</span>
                                    </div>
                                </div>
                            </div>

                            {/* Classic Layout: Two Columns for Ingredients/Steps */}
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-serif font-bold mb-6 italic">Ingredients</h2>
                                    <ul className="space-y-4">
                                        {recipe.ingredients.map((ingredient, i) => (
                                            <li key={i} className="flex items-start gap-3 text-lg p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                                <span>{ingredient}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* In-Content Ad Unit (Leaderboard) */}
                                <div className="py-8 flex justify-center">
                                    <AdPlaceholder width="100%" height={90} label="Advertisement" className="max-w-[728px]" />
                                </div>

                                <section>
                                    <h2 className="text-3xl font-serif font-bold mb-6 italic">Instructions</h2>
                                    <div className="space-y-8">
                                        {recipe.instructions.map((instr) => (
                                            <div key={instr.step} className="flex gap-6">
                                                <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                                    {instr.step}
                                                </span>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">{instr.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                                        {instr.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Right: Media & Sidebar */}
                        <div className="lg:sticky lg:top-28 space-y-8 order-1 lg:order-2">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Sidebar Ad Unit (Sticky High Value) */}
                            <AdPlaceholder width="100%" height={250} label="Advertisement" />

                            <div className="bg-surface border p-8 rounded-3xl shadow-lg">
                                <h3 className="text-2xl font-serif font-bold mb-4">Nutritional Info</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/30 rounded-xl text-center">
                                        <span className="block text-2xl font-bold">{recipe.calories}</span>
                                        <span className="text-sm text-muted-foreground uppercase">Calories</span>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-xl text-center">
                                        <span className="block text-2xl font-bold">{recipe.protein}</span>
                                        <span className="text-sm text-muted-foreground uppercase">Protein</span>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-xl text-center">
                                        <span className="block text-2xl font-bold">{recipe.carbs}</span>
                                        <span className="text-sm text-muted-foreground uppercase">Carbs</span>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-xl text-center">
                                        <span className="block text-2xl font-bold">{recipe.fat}</span>
                                        <span className="text-sm text-muted-foreground uppercase">Total Fat</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t">
                                    <span className="inline-flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-1.5 rounded-full">
                                        <HeartPulse className="h-4 w-4" />
                                        {recipe.healthLabel}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-primary p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Chef's Tip</h3>
                                    <p className="text-primary-foreground/90 italic leading-relaxed">
                                        "{recipe.chefTip}"
                                    </p>
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
