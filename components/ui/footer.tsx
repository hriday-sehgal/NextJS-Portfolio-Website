// components/ui/footer.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function Footer() {
    
    const { theme } = useTheme();

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className={`border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white'}`}>
            <div className="container mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>Hriday Sehgal</h3>
                        <p className={`text-muted-foreground ${theme === 'dark' ? 'text-gray-400' : ''}`}>
                            Building digital solutions that matter
                        </p>
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>Quick Links</h3>
                        <div className="space-y-2">
                            {/* Use Link for all links, including Contact. Style consistently. */}
                            <Link
                                href="/"
                                className={`block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                Projects
                            </Link>
                           <Link
                               href="https://decodewithhriday.vercel.app/blogs"
                               target="_blank"
                               rel="noopener noreferrer"
                               className={`block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                               >
                                 Blogs
                           </Link>

                           <Link  // Corrected to use Link
                                href="#contact"  // Use '#' for same-page link
                                onClick={scrollToContact}
                                className={`block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>Connect With Me</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" size="icon" asChild className={`${theme === 'dark' ? 'text-white hover:bg-gray-800 border-gray-700' : ''}`}>
                                <a href="https://linkedin.com/in/hridaysehgal" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className={`${theme === 'dark' ? 'text-white hover:bg-gray-800 border-gray-700' : ''}`}>
                                <a href="https://github.com/hriday-sehgal" target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className={`${theme === 'dark' ? 'text-white hover:bg-gray-800 border-gray-700' : ''}`}>
                                <a href="mailto:hriday.career@gmail.com" rel="noopener noreferrer">
                                    <FiMail className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className={`${theme === 'dark' ? 'text-white hover:bg-gray-800 border-gray-700' : ''}`}>
                                <a href="tel:9818045065">
                                    <FiPhone className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright Line - Added this section */}
                <div className="mt-8 border-t pt-4 text-center"> {/* Consistent spacing */}
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-muted-foreground'}`}>
                        &copy; {new Date().getFullYear()} Hriday Sehgal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
