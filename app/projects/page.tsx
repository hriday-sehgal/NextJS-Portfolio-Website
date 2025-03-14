'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import ContactForm from '@/components/ui/contact-form';

export default function ProjectsPage() {
    const projects = [
        {
            title: 'BidBot Auction Platform',
            description: 'A full-stack auction platform featuring real-time bidding, user authentication, and secure payment processing.  Users can list items, place bids, and manage their profiles.  The platform includes an admin dashboard for managing auctions and users.',
            tech: 'React, Node.js (Express), MongoDB, Bootstrap CSS',
            links: {
                github: 'https://github.com/hriday-sehgal/BidBot-Online-Auction-System-Project-Frontend', // Replace with your actual GitHub link
                live: 'https://bidbotauctionsystem.onrender.com/' // Replace with your actual live link
            },
            image: '/Bidbot.png' // Add image paths.  Make sure these files exist in your /public directory.
        },
        {
            title: 'Next.js Blog Website',
            description: 'Decode with Hriday is a Next.js blog Website featuring premium content, Supabase Auth, Sanity CMS, and Razorpay payments, delivering insightful articles on technology, product management, and healthcare with a seamless, secure, and responsive experience.',
            tech: 'Next.js, Supabase (Auth & PostgreSQL), Sanity CMS, Razorpay, Vercel, Tailwind CSS',
            links: {
                github: 'https://github.com/hriday-sehgal/decodewithhriday-blog',
                live: 'https://decodewithhriday.vercel.app/'
            },
            image: '/Blogwebsite.png'
        },
      
        {
            title: 'AI-Powered RAG Chatbot',
            description: 'A chatbot built using a Retrieval-Augmented Generation (RAG) architecture, leveraging MongoDB Atlas for vector search and Google Gemma for language modeling.  It can answer questions based on a provided knowledge base, making it suitable for customer service or information retrieval tasks.',
            tech: 'Python (FastAPI), MongoDB Atlas, Google Gemma Model',
            links: {
                github: 'https://github.com/hriday-sehgal/RAG-Chatbot',
                
            },
            image: '/ragchatbot.png'
        },
        {
            title: 'Personal Portfolio Website',
            description: "This very website!  A showcase of my skills, projects, and experience.  Built with Next.js for static site generation and optimized for performance and SEO.  Uses Tailwind CSS for styling and Framer Motion for animations.  Includes a contact form and links to my social media profiles.",
            tech: 'Next.js, Tailwind CSS, Framer Motion, Shadcn/UI, Vercel',
            links: {
                github: 'https://github.com/hriday-sehgal/NextJS-Portfolio-Website', // Replace with your portfolio's GitHub link
                live: 'https://hridaysehgal.vercel.app/' // Replace with your portfolio's URL
            },
            image: '/Portfolio.png'
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Projects Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    My Projects
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader className="relative">
                                    {/* Image with hover effect */}
                                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardTitle className="mt-4">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow py-4">
                                    <p className="text-sm text-muted-foreground">
                                        <span className="font-semibold">Tech Stack:</span> {project.tech}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-4 border-t">
                                    <div className="flex items-center justify-between w-full">
                                        <Button variant="outline" asChild>
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                <FiGithub /> GitHub
                                            </a>
                                        </Button>
                                        <Button asChild>
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                <FiExternalLink /> Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
 <div id="contact" className="py-16">
                <ContactForm />
      </div>
            
        </div>
    );
}
