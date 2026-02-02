import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-muted-foreground">We'd love to hear from you or see your home-cooked results!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-8 italic">Get in Touch</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Name</label>
                                    <input type="text" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Email</label>
                                    <input type="email" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Message</label>
                                    <textarea rows={5} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                                </div>
                                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-12">
                            <h2 className="text-2xl font-serif font-bold mb-8 italic">Our Info</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-4 rounded-2xl">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <p className="text-muted-foreground">hello@classichomerecipes.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-4 rounded-2xl">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Phone</h4>
                                        <p className="text-muted-foreground">+1 (555) 000-0000</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-4 rounded-2xl">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Address</h4>
                                        <p className="text-muted-foreground">123 Home Cook Lane, Suite 100<br />Nashville, TN 37203</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-muted/30 rounded-3xl border">
                                <h4 className="font-bold mb-2">Office Hours</h4>
                                <p className="text-muted-foreground">Monday - Friday: 9am - 5pm CST</p>
                                <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
