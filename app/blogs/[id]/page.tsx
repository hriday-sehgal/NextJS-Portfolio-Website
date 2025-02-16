/* // app/blogs/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiCopy,
  FiArrowLeft,
} from 'react-icons/fi';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from "sonner"
import { marked } from 'marked'; // Import the marked library
import ContactForm from '@/components/ui/contact-form';
import { use } from 'react';


// Define a type for the blog post object (good practice!)
interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  content: string;
  imageUrl: string;
}

// Mock now holds the correct BlogPost type
const allBlogs: BlogPost[] = [  // The BlogPost Type
  {
    id: 1,
    title: 'Building Scalable Applications',
    date: '2024-03-15',
    author: 'Hriday Sehgal',
    description: 'Learn the principles of building applications that can handle increasing workloads.',
    tags: ['Technology', 'Architecture'],
    content:
      `<p><b><strong>Introduction</strong></b></p>

<p>Scalability is a critical aspect of modern software development.  As your user base grows, your application needs to be able to handle the increased load without impacting performance.  This article outlines key principles and strategies for building scalable applications.</p> <br>

<p><b><strong>Key Principles of Scalability</strong></b></p> <br>
<ul>

<p><strong><li>Horizontal Scaling:</li></strong> Instead of upgrading a single server (vertical scaling), distribute the load across multiple servers. This is often more cost-effective and provides better fault tolerance. </p><br>
<p><strong><li>Loose Coupling:</li></strong> Design components of your system to be independent.  This means that changes in one part of the system don't require changes in others.  Microservices are a common pattern for achieving loose coupling. </p><br>
<p><strong><li>Caching:</li></strong> Store frequently accessed data in a cache (e.g., Redis, Memcached) to reduce database load and improve response times. </p><br>
<p><strong><li>Asynchronous Processing:</li></strong> Use message queues (e.g., RabbitMQ, Kafka) to handle tasks that don't need to be completed immediately. This prevents long-running operations from blocking the main thread. </p><br>
<p><strong><li>Database Optimization:</li></strong> Choose the right database for your needs (SQL, NoSQL).  Optimize queries, use indexing, and consider database sharding for very large datasets.</p><br>
<p><strong><li>Load Balancing:</li></strong> Use a load balancer to distribute traffic across multiple servers. </p><br>
<p><strong><li>Content Delivery Networks (CDNs):</li></strong> Serve static assets (images, CSS, JavaScript) from a CDN to reduce server load and improve latency for users in different geographic locations. </p><br>
<p><strong><li>Statelessness:</li></strong>Where possible, design your application to be stateless. This makes it easier to scale horizontally, as any server can handle any request. </p><br>
</ul>

<p><b><strong>Practical Strategies </strong></b></p> <br>

<ul>
<p><strong><li>Microservices Architecture:</li></strong> Break down your application into smaller, independent services.</p><br>
<p><strong><li>Containerization (Docker):</li></strong> Package your applications and their dependencies into containers for consistent deployment across different environments.</p><br>
<p><strong><li>Orchestration (Kubernetes):</li></strong> Manage and scale your containerized applications.</p><br>
<p><strong><li>Cloud-Based Services:</li></strong> Leverage cloud platforms (AWS, Azure, GCP) and their managed services (databases, queues, etc.) for easier scaling.</p><br>
<p><strong><li>Monitoring and Performance Testing:</li></strong> Regularly monitor your application's performance and conduct load testing to identify bottlenecks.</p><br>
</ul>

<p><b><strong>Conclusion</strong></b></p>

Building scalable applications requires careful planning and consideration of various factors. By following these principles and strategies, you can create applications that can handle growth and provide a positive user experience.  Remember to continuously monitor and optimize your application as needs evolve.
`
    ,
    imageUrl: '/images/scalable-apps.jpg', // Add an image URL
  },
  {
    id: 2,
    title: 'Product Management 101',
    date: '2024-02-20',
    author: 'Hriday Sehgal',
    description: 'A beginner\'s guide to the world of product management.',
    tags: ['Management', 'Guide'],
    content: '...',
    imageUrl: '/images/product-management.jpg', // Add an image URL
  },
  {
    id: 3,
    title: 'Cloud Best Practices',
    date: '2024-01-10',
    author: 'Hriday Sehgal',
    description: 'Best practices for deploying and managing applications in the cloud.',
    tags: ['Technology', 'DevOps', 'AWS'],
    content: '...',
    imageUrl: '/images/cloud-practices.jpg', // Add an image URL
  },
  {
    id: 4,
    title: 'The Future of AI in Healthcare',
    date: '2023-12-18',
    author: 'Hriday Sehgal',
    description: 'Exploring the transformative potential of AI in healthcare.',
    tags: ['AI', 'Healthcare', 'Future'],
    content: '...',
    imageUrl: '/images/ai-healthcare.jpg'
  }
];


// Data fetching (simulated) - Use *async* for real fetching.
async function getBlog(id: string): Promise<BlogPost | undefined> {
  // In a real app, fetch from an API or database.
  // Simulate network delay (remove in production)
  await new Promise((resolve) => setTimeout(resolve, 200));
  const idNum = parseInt(id, 10); //Ensure conversion!!!!
  return allBlogs.find((blog) => blog.id === idNum);
}

//Get related blogs
function getRelatedBlogs(currentBlogId: number, allBlogs: BlogPost[]): BlogPost[] {
    const relatedBlogs = allBlogs
        .filter(blog => blog.id !== currentBlogId) // Exclude current blog
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // sort by latest
        .slice(0, 3);

    return relatedBlogs;
}



interface PageProps {  //Define props
  params: { id: string };
}

export default function BlogPage({ params }: PageProps) {

  const blogPromise = getBlog(params.id); // Get a promise for the blog data
  const blog = use(blogPromise);        // Get the resolved value


  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);


  const handleCopy = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          // Show a success message (using a simple alert for this example)
          toast.success("URL Copied to clipboard");

          //  alert('Blog URL copied to clipboard!'); //Consider using toast for better ux and style
        })
        .catch((err) => {
          // Handle errors (e.g., the user denied clipboard access)
          console.error('Failed to copy URL: ', err);
          toast.error("Failed to copy URL! Please try again.");
        });
    }
  };


  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };


  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.id, allBlogs);

  const shareUrl = `http://localhost:3000/blogs/${params.id}`; // Replace with domain

  // Convert Markdown to HTML
  const renderedHtml = marked(blog.content);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Back Button */ /* 
      <Link href="/blogs">
        <Button variant="link" className="mb-4">
          <FiArrowLeft className="mr-2" /> Back to All Blogs
        </Button>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
        <p className="text-muted-foreground mb-4">Published: {formatDate(blog.date)}</p>

        {/* Image */ /* 
        <div className="relative w-full h-96 mb-8">
          <Image
            src={blog.imageUrl || '/placeholder-image.jpg'} // Use a placeholder if no image
            alt={blog.title}
            fill
            style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            className="rounded-lg"
          />
        </div>

        {/* Blog Content (using dangerouslySetInnerHTML for rich text) 
        <div
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />


        {/* Social Sharing Links 
        <div className="flex gap-4 mt-8">
          <Button variant="outline" size="icon" asChild>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
                blog.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(
                blog.title
              )}&summary=${encodeURIComponent(blog.description)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={handleCopy}>
            <FiCopy className='h-5 w-5' />
          </Button>
        </div>

        {/* Read More Blogs (Related Blogs) 

        <div className="mt-12">

          <h2 className="text-2xl font-semibold mb-6">Read More Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} href="#" passHref>
                {/* Wrap the entire Card with a Link 
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle> {relatedBlog.title} </CardTitle>
                    <CardDescription>{relatedBlog.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="relative w-full h-48">
                      <Image
                        src={relatedBlog.imageUrl || "/placeholder-image.jpg"}
                        alt={relatedBlog.title}
                        fill
                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                        className="rounded-md"

                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Blogs CTA - Added marginBottom 
          <div className="mt-8 mb-14 text-center"> {/* Increased top margin 
            <Link href='/blogs'>
              <Button variant="outline">View All Blogs</Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <div id="contact" className="py-16">
        <ContactForm />
      </div>
    </div>
  );
}
export const dynamic = 'force-dynamic'; */ 
