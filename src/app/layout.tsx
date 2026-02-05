import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import StickyFooterAd from '@/components/ui/StickyFooterAd';
import PromotionModal from '@/components/ui/PromotionModal';
import WinModals from '@/components/ui/WinModals';


const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Classic Home Recipes | Simple, Delicious Home Cooking",
  description: "Discover classic dinner recipes and simple home-cooked meals. Perfect for healthy living and everyday dinner inspiration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        {children}
        <StickyFooterAd />
        <PromotionModal />
        <WinModals />
      </body>
    </html>
  );
}
