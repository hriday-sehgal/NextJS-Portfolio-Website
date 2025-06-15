// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
// import Footer from "@/components/ui/footer";
import { Toaster } from "sonner";
import { metadata as siteMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hriday Sehgal",
    default: "Hriday Sehgal | Full Stack Developer ",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, and Node.js. Expert in building scalable web applications and modern software development practices.",
  keywords: [
    "hriday sehgal",
    "hriday",
    "sehgal",
    "hriday sehgal portfolio",
    "hriday sehgal projects",
    "Hriday Sehgal",
    "Software Developer",
    "Technical Project Manager",
    "Product Manager",
    "Full-stack Developer",
    "Technical SEO",
    "Project Management",
    "Web Development",
    "Next.js",
    "React",
    "Frontend",
    "Backend",
    "Full Stack",
    "Technical SEO",
    "Web Development",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Express.js",
    "Sanity",
    "Supabase",
    "CMS",
    "SEO",
    "Health Informatics",
    "Healthcare",
    "Healthcare IT",
    "Healthcare Technology",
    "Healthcare Information Technology",
    "Healthcare Information Systems",
  ],
  authors: [{ name: "Hriday Sehgal" }],
  creator: "Hriday Sehgal",
  publisher: "Hriday Sehgal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hridaysehgal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hriday Sehgal | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and Node.js. Expert in building scalable web applications and modern software development practices.",
    url: "https://hridaysehgal.vercel.app",
    siteName: "Hriday Sehgal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hriday Sehgal | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and Node.js. Expert in building scalable web applications and modern software development practices.",
    // creator: '@hridaysehgal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-site-verification",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
        <Toaster richColors />
      </body>
    </html>
  );
}
