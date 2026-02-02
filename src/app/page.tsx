import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/ui/RecipeCard';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import EngagementTracker from '@/components/EngagementTracker';
import { recipes } from '@/lib/data';
import { ChevronRight, ShieldCheck, HeartPulse, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <EngagementTracker />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-[#F8F5F0]">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6">
                Loved by 50,000+ Home Cooks
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.1]">
                Easy Home-Cooked Meals for <span className="text-primary italic">Healthy</span> Living
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                Discover 10 classic dinner recipes everyone loves. Simple, heart-healthy, and diabetic-friendly meals designed for mature tastes and easy cooking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/recipes"
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                >
                  Browse All Recipes
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/categories/healthy"
                  className="bg-white border-2 border-primary/20 text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/5 transition-all text-center"
                >
                  Healthy Living Tips
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full">
            <div className="relative w-full h-full">
              <img
                src="/hero-image-old-couple.png"
                alt="Happy Senior Couple Cooking"
                className="w-full h-full object-cover rounded-l-[100px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F0] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Benefits/Trust Section */}
        <section className="py-16 border-y bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tested & Trusted</h3>
                  <p className="text-muted-foreground">Every recipe is kitchen-tested to ensure perfect results every single time you cook.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-4 rounded-2xl">
                  <HeartPulse className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Health First</h3>
                  <p className="text-muted-foreground">Nutrient-dense meals with clear labels for diabetic, low-salt, and heart-healthy diets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl">
                  <Clock className="h-8 w-8 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy & Simple</h3>
                  <p className="text-muted-foreground">No complicated techniques or rare ingredients. Just good food made simply.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit (Billboard) */}
        <section className="py-8 bg-muted/20 border-b">
          <div className="container mx-auto px-4 flex justify-center">
            <AdPlaceholder width="100%" height={90} label="Advertisement" className="max-w-[728px] bg-white" />
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-4 italic">Editor's Choice</h2>
                <p className="text-xl text-muted-foreground">Our most requested recipes for this week.</p>
              </div>
              <Link href="/recipes" className="text-primary font-bold hover:underline hidden md:flex items-center gap-1">
                View all recipes <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Join Our Community of <br className="hidden md:block" /> Home Cooks
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Sign up today and get our <span className="font-bold underline italic text-secondary-foreground">"10 Classic Dinners"</span> e-book for free. Start cooking delicious, healthy meals that your family will love.
            </p>
            <div className="max-w-xl mx-auto">
              <form className="flex flex-col sm:flex-row gap-0 items-center overflow-hidden rounded-2xl md:rounded-full bg-white p-1.5 shadow-2xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow w-full px-8 py-4 text-foreground bg-transparent focus:outline-none placeholder:text-muted-foreground text-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-secondary text-white px-10 py-4 rounded-xl md:rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-md whitespace-nowrap"
                >
                  Get My Free Book
                </button>
              </form>
              <p className="mt-6 text-sm text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
