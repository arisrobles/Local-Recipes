import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                    <p>Last updated: February 02, 2026</p>
                    <p>
                        Classic Home Recipes ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Classic Home Recipes.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                    <p>
                        We may collect information that you provide directly to us, such as when you subscribe to our newsletter, contact us via email, or interact with our website.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to monitor and analyze trends and usage.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                    <p>
                        We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
