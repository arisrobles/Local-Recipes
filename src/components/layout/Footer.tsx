import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-primary">Classic Home</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Bringing traditional recipes and healthy cooking tips to your kitchen. Simple meals for a better living.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/recipes" className="hover:text-primary transition-colors">All Recipes</Link></li>
                            <li><Link href="/categories/healthy" className="hover:text-primary transition-colors">Healthy Meals</Link></li>
                            <li><Link href="/categories/comfort" className="hover:text-primary transition-colors">Comfort Food</Link></li>
                            <li><Link href="/categories/seniors" className="hover:text-primary transition-colors">Senior Friendly</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">Get weekly recipes delivered to your inbox.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Classic Home Recipes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
