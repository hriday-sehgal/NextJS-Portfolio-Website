import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hriday Sehgal",
  description:
    "Explore my portfolio of software development projects, including web applications, AI solutions, and full-stack development work.",
  keywords: [
    "software development projects",
    "web applications",
    "AI solutions",
    "full-stack development",
    "Next.js projects",
    "React projects",
    "TypeScript projects",
    "portfolio projects",
    "Hriday Sehgal",
    "software engineer portfolio",
    "technical projects",
    "web development portfolio",
  ],
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
  openGraph: {
    title: "Projects | Hriday Sehgal",
    description:
      "Explore my portfolio of software development projects, including web applications, AI solutions, and full-stack development work.",
    type: "website",
    url: "https://hridaysehgal.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Hriday Sehgal",
    description:
      "Explore my portfolio of software development projects, including web applications, AI solutions, and full-stack development work.",
  },
  alternates: {
    canonical: "https://hridaysehgal.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
