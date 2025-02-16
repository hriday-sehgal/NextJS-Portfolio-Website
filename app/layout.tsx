// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/ui/navbar'; // Import Navbar
import Footer from '@/components/ui/footer';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Hriday Sehgal | Portfolio',
    description: 'Portfolio of Hriday Sehgal',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                   <Navbar />
                    <main className="container mx-auto px-4 md:px-8 pt-20 pb-10">
                        {children}
                    </main>
                    <Footer />
                    <Toaster richColors  />
                </ThemeProvider>
            </body>
        </html>
    );
}
