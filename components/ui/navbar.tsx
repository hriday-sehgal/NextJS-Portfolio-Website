// components/ui/navbar.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname(); // Get the current pathname, although it is not USED

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0  backdrop-blur-md z-50 border-b ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80'}`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href="/" className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Hriday Sehgal
                    </Link>
                </motion.div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-4">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                 <Button asChild variant="ghost" className={`${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                   <Link href={link.path} >
                                        {link.name}
                                   </Link>
                                 </Button>

                            </motion.div>
                        ))}
                        {/* Dedicated Contact Button */}
                         <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="ghost" onClick={scrollToContact} className={`${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                Contact
                            </Button>
                        </motion.div>

                    </div>

                       <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={`${theme === 'dark' ? 'border-gray-700' : ''}`}
                    >

                        {mounted ? (
                            theme === 'dark' ? (
                                <Sun className={`h-4 w-4 ${theme === 'dark' ? 'text-yellow-500' : ''}`} />
                            ) : (
                                <Moon className={`h-4 w-4 ${theme === 'dark' ? '' : 'text-blue-700'}`} />
                            )
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                      </Button>
                </div>
            </div>
        </motion.nav>
    );
}

