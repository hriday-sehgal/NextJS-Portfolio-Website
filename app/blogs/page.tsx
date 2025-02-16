// app/blogs/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Import icons for sorting
import ContactForm from '@/components/ui/contact-form';
import Image from 'next/image';

// Mock Blog Data (Replace with your actual data fetching)
const allBlogs = [
    {
        id: 1,
        title: 'Building Scalable Applications',
        date: '2024-03-15',
        author: 'Hriday Sehgal',
        description: 'Learn the principles of building applications that can handle increasing workloads.',
        tags: ['Technology', 'Architecture'],
        content: '...', // Full blog content (for the individual blog page)
        imageUrl: '/placeholder-image.jpg' // Add imageUrl for consistency, even if it's a placeholder.
    },
    {
        id: 2,
        title: 'Product Management 101',
        date: '2024-02-20',
        author: 'Hriday Sehgal',
        description: 'A beginner\'s guide to the world of product management.',
        tags: ['Management', 'Guide'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 3,
        title: 'Cloud Best Practices',
        date: '2024-01-10',
        author: 'Hriday Sehgal',
        description: 'Best practices for deploying and managing applications in the cloud.',
        tags: ['Technology', 'DevOps', 'AWS'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 4,
        title: 'The Future of AI in Healthcare',
        date: '2024-04-01',
        author: 'Hriday Sehgal',
        description: 'Exploring the potential of AI to revolutionize healthcare.',
        tags: ['AI', 'Healthcare'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 5,
        title: 'Mastering React Hooks',
        date: '2024-03-28',
        author: 'Hriday Sehgal',
        description: 'A deep dive into React Hooks and how to use them effectively.',
        tags: ['Technology', 'Web Development', 'React'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 6,
        title: 'Beatboxing Basics',
        date: '2024-03-10',
        author: 'Hriday Sehgal',
        description: "Learn fundamental beatbox sounds",
        tags: ['Beatboxing'],
        content: "...",
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 7,
        title: 'Advanced state management',
        date: '2024-01-10',
        author: 'Hriday Sehgal',
        description: 'Advanced state management techniques',
        tags: ['Technology', 'Web Development'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 8,
        title: 'Product visions',
        date: '2024-01-10',
        author: 'Hriday Sehgal',
        description: 'How to create great product visions',
        tags: ['Product Management'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 9,
        title: 'AI and ML',
        date: '2023-04-10',
        author: 'Hriday Sehgal',
        description: 'Diff b/w AI and ML',
        tags: ['AI'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 10,
        title: 'Introduction to Beatboxing',
        date: '2023-02-12',
        author: 'Hriday Sehgal',
        description: 'introduction to world of beatboxing',
        tags: ['Beatboxing'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 11,
        title: 'Roadmap to Web development',
        date: '2023-05-10',
        author: 'Hriday Sehgal',
        description: 'best roadmap to web dev',
        tags: ['Technology', 'Web Development'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
    {
        id: 12,
        title: 'How to define a product strategy',
        date: '2024-03-01',
        author: 'Hriday Sehgal',
        description: 'Learn to define perfect product strategy',
        tags: ['Product Management'],
        content: '...',
        imageUrl: '/placeholder-image.jpg'
    },
];

const categories = ['Product Management', 'Web Development', 'AI', 'Beatboxing', 'Technology'];


export default function BlogsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(10);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest'); // Add sort state

    // Filter blogs by category
    const filteredBlogsByCategory = activeCategory
        ? allBlogs.filter(blog => blog.tags.includes(activeCategory))
        : allBlogs;

    // Filter blogs by search query
    const filteredBlogsBySearch = filteredBlogsByCategory.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort blogs by date
    const sortedBlogs = [...filteredBlogsBySearch].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === 'latest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });


    // Get current blogs (for pagination)
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Helper function to format date
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="container mx-auto px-4 md:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">All Blogs</h1>

            {/* Search Bar */}
            <div className="mb-8 flex justify-center">
                <Input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-md"
                />
            </div>

            {/* Sorting Options */}
            <div className="mb-4 flex justify-center gap-4">
                <Button
                    variant={sortBy === 'latest' ? 'default' : 'outline'}
                    onClick={() => setSortBy('latest')}
                    className="flex items-center gap-2"
                >
                    Latest <FiArrowDown />
                </Button>
                <Button
                    variant={sortBy === 'oldest' ? 'default' : 'outline'}
                    onClick={() => setSortBy('oldest')}
                    className="flex items-center gap-2"
                >
                    Oldest <FiArrowUp />
                </Button>
            </div>

            {/* Category Filters */}
            <div className="mb-8 flex flex-wrap justify-center gap-4">
                <Button
                    variant={activeCategory === null ? "default" : "outline"}
                    onClick={() => setActiveCategory(null)}
                >
                    All Categories
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

             {/* Blog Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                    <Link key={blog.id} href="#" passHref>
                    {/* Wrap Card with Link, set href to # */}
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{blog.title}</CardTitle>
                                <CardDescription>{blog.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative w-full h-48">
                                     <Image
                                        src={blog.imageUrl || '/placeholder-image.jpg'}
                                        alt={blog.title}
                                        fill
                                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                                        className="rounded-md"

                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                              <p className="text-sm text-gray-500">Published: {formatDate(blog.date)}</p>
                          </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: Math.ceil(sortedBlogs.length / blogsPerPage) }, (_, i) => (
                    <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? 'default' : 'outline'}
                        onClick={() => paginate(i + 1)}
                        className="mx-1"
                    >
                        {i + 1}
                    </Button>
                ))}
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="py-16">
                <ContactForm />
            </div>
        </div>
    );
}
