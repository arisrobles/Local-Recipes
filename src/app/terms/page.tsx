import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                    <p>Last updated: February 02, 2026</p>
                    <p>
                        By accessing or using the Classic Home Recipes website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">Use of Content</h2>
                    <p>
                        The content on this website, including recipes, text, and images, is for personal, non-commercial use only. You may not reproduce, distribute, or modify our content without prior written permission.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
                    <p>
                        The recipes and nutritional information provided on this site are for informational purposes only. We do not guarantee specific results or dietary outcomes. Always consult with a professional for medical or health-related advice.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
                    <p>
                        Classic Home Recipes shall not be liable for any damages arising out of your use or inability to use the website or its content.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
