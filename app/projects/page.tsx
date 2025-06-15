"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";
import Link from "next/link";

const projects = [
  {
    title: "BidBot Auction Platform",
    description:
      "A full-stack auction platform featuring real-time bidding, user authentication, and secure payment processing. Users can list items, place bids, and manage their profiles. The platform includes an admin dashboard for managing auctions and users.",
    tech: "React, Node.js (Express), MongoDB, Bootstrap CSS",
    points: [
      "Implemented real-time bidding system",
      "Built secure payment processing",
      "Created admin dashboard for auction management",
      "Integrated user authentication and profiles",
    ],
    links: {
      github:
        "https://github.com/hriday-sehgal/BidBot-Online-Auction-System-Project-Frontend",
      live: "https://bidbotauctionsystem.onrender.com/",
    },
  },
  {
    title: "Next.js Blog Website",
    description:
      "Decode with Hriday is a Next.js blog Website featuring premium content, Supabase Auth, Sanity CMS, and Razorpay payments, delivering insightful articles on technology, product management, and healthcare with a seamless, secure, and responsive experience.",
    tech: "Next.js, Supabase (Auth & PostgreSQL), Sanity CMS, Razorpay, Vercel, Tailwind CSS",
    points: [
      "Implemented premium content with Razorpay integration",
      "Built authentication with Supabase",
      "Created content management with Sanity CMS",
      "Optimized for SEO and performance",
    ],
    links: {
      github: "https://github.com/hriday-sehgal/decodewithhriday-blog",
      live: "https://decodewithhriday.vercel.app/",
    },
  },
  {
    title: "AI-Powered RAG Chatbot",
    description:
      "A chatbot built using a Retrieval-Augmented Generation (RAG) architecture, leveraging MongoDB Atlas for vector search and Google Gemma for language modeling. It can answer questions based on a provided knowledge base, making it suitable for customer service or information retrieval tasks.",
    tech: "Python (FastAPI), MongoDB Atlas, Google Gemma Model",
    points: [
      "Implemented RAG architecture for accurate responses",
      "Integrated MongoDB Atlas for vector search",
      "Utilized Google Gemma for language modeling",
      "Built scalable API with FastAPI",
    ],
    links: {
      github: "https://github.com/hriday-sehgal/RAG-Chatbot",
    },
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This very website! A showcase of my skills, projects, and experience. Built with Next.js for static site generation and optimized for performance and SEO. Uses Tailwind CSS for styling and Framer Motion for animations. Includes a contact form and links to my social media profiles.",
    tech: "Next.js, Tailwind CSS, Framer Motion, Shadcn/UI, Vercel",
    points: [
      "Built with Next.js 15 and App Router",
      "Implemented responsive design with Tailwind CSS",
      "Added smooth animations with Framer Motion",
      "Optimized for SEO and performance",
    ],
    links: {
      github: "https://github.com/hriday-sehgal/NextJS-Portfolio-Website",
      live: "https://hridaysehgal.vercel.app/",
    },
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-[1.2] tracking-wide pb-2">
              <span className="inline-block">My Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Showcasing my journey in software development through innovative
              solutions and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-blue-100 group">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                    <CardTitle className="text-xl font-bold text-blue-600 relative z-10">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-purple-600 mb-4">
                      {project.tech}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                      {project.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm hover:text-blue-600 transition-colors"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          <FiGithub className="mr-2" /> GitHub
                        </Button>
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-600 text-purple-600 hover:bg-purple-50"
                        >
                          <FiExternalLink className="mr-2" /> Live Demo
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Hriday Sehgal
              </h3>
              <p className="text-gray-600 mb-4">
                Software Developer, passionate about creating innovative
                solutions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/hriday-sehgal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <FiLinkedin className="mr-2" /> LinkedIn
                  </Button>
                </Link>
                <Link
                  href="https://github.com/hriday-sehgal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    <FiGithub className="mr-2" /> GitHub
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://decodewithhriday.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects#contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <a href="mailto:hriday.career@gmail.com" target="_blank">
                  <li className="flex items-center text-gray-600">
                    <FiMail className="mr-2" /> hriday.career@gmail.com
                  </li>
                </a>
                <li className="flex items-center text-gray-600">
                  <FiMapPin className="mr-2" /> Gurgaon, India
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Hriday Sehgal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
