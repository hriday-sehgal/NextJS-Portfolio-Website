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
            tech: 'React, Node.js (Express), MongoDB, Socket.IO, Redux, Tailwind CSS',
            links: {
                github: 'https://github.com/hriday-sehgal/bidbot-auction', // Replace with your actual GitHub link
                live: 'https://bidbotauctionsystem.onrender.com/' // Replace with your actual live link
            },
            image: '/bidbot.png' // Add image paths.  Make sure these files exist in your /public directory.
        },
        {
            title: 'HealthTech Dashboard',
            description: 'A patient monitoring system with real-time data visualization and analytics.  It allows healthcare professionals to track patient vitals, view historical data, and receive alerts for critical conditions.  Built with responsiveness in mind for use on various devices.',
            tech: 'React, Python (Flask), AWS (DynamoDB, Lambda, API Gateway), Chart.js, Material-UI',
            links: {
                github: 'https://github.com/hriday-sehgal',
                live: '#'
            },
            image: '/healthtech.png'
        },
        {
            title: 'E-commerce Platform',
            description: 'A complete online shopping solution with product browsing, shopping cart, user accounts, order management, and payment integration. Includes features like product search, filtering, reviews, and admin panel for managing products and orders.',
            tech: 'Next.js, Stripe, Firebase (Firestore, Authentication, Storage), Tailwind CSS, Redux Toolkit',
            links: {
                github: 'https://github.com/hriday-sehgal',
                live: '#'
            },
            image: '/ecommerce.png'
        },
        {
            title: 'AI-Powered Chatbot',
            description: 'A chatbot built using a Retrieval-Augmented Generation (RAG) architecture, leveraging MongoDB Atlas for vector search and Google Gemma for language modeling.  It can answer questions based on a provided knowledge base, making it suitable for customer service or information retrieval tasks.',
            tech: 'Python (FastAPI), MongoDB Atlas, Google Gemma, LangChain, Streamlit',
            links: {
                github: 'https://github.com/hriday-sehgal/RAG-Chatbot',
                live: '#' //  A live demo might be more complex here, consider skipping or linking to a demo video.
            },
            image: '/chatbot.png'
        },
        {
            title: 'Personal Portfolio Website',
            description: "This very website!  A showcase of my skills, projects, and experience.  Built with Next.js for static site generation and optimized for performance and SEO.  Uses Tailwind CSS for styling and Framer Motion for animations.  Includes a contact form and links to my social media profiles.",
            tech: 'Next.js, Tailwind CSS, Framer Motion, Shadcn/UI, Vercel',
            links: {
                github: 'https://github.com/hriday-sehgal/NextJS-Portfolio-Website', // Replace with your portfolio's GitHub link
                live: 'https://hridayportfolio.vercel.app/' // Replace with your portfolio's URL
            },
            image: '/portfolio.png'
        },
        {
            title: 'Task Manager Application',
            description: 'A full-stack task management application where users can create, organize, and track their tasks.  Includes features like task prioritization, due dates, categorization, and user authentication.',
            tech: 'React, Node.js (Express), MongoDB, JWT, Bootstrap',
            links: {
                github: 'https://github.com/hriday-sehgal',
                live: '#'
            },
            image: '/task-manager.png'
        }
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
