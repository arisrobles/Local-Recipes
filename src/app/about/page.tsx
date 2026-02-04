import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="py-20 bg-[#F8F5F0]">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">Our Heritage in the Kitchen</h1>
                        <p className="text-2xl text-muted-foreground italic leading-relaxed">
                            "Good food doesn't have to be complicated. It just has to be made with love and good ingredients."
                        </p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <img
                                    src="/images/senior_cooking_traditional.png"
                                    alt="Senior Cooking Traditional Meal"
                                    className="rounded-3xl shadow-2xl"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold italic">Why We Started</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Classic Home Recipes was founded on a simple principle: to bring the joy of traditional, healthy cooking back to every American home. We noticed that in the rush of the modern world, the art of slow-cooked meals and family dinner traditions was being lost.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our mission is to provide you with tested, reliable recipes that cater to your health needs without sacrificing the soul-satisfying taste of a home-cooked meal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-surface border-y">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-serif font-bold mb-12 italic text-primary">Our Commitment to You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-background border">
                                <h3 className="font-bold mb-4">Precision</h3>
                                <p className="text-sm text-muted-foreground">Every measurement is exact, ensuring your results match our kitchen-tested standards.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-background border">
                                <h3 className="font-bold mb-4">Health</h3>
                                <p className="text-sm text-muted-foreground">We focus on low-sodium, heart-healthy, and diabetic-safe options for a better lifestyle.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-background border">
                                <h3 className="font-bold mb-4">Simplicity</h3>
                                <p className="text-sm text-muted-foreground">We use common ingredients found at your local grocery store. No complex sourcing required.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
