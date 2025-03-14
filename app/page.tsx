// app/page.tsx
'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { SiReact, SiPython, SiJira, SiMongodb, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiExpress, SiNextdotjs, SiGoogleanalytics, SiPostman, SiGit, SiGithub } from 'react-icons/si';
import { FiDownload, FiGithub, FiExternalLink, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa'; // Leadership, Project Mgmt, Communication
import { BsGraphUp, BsClipboardData } from 'react-icons/bs';       // Strategy, Product Management
import { MdOutlineEventAvailable } from 'react-icons/md'               //Event Management
import { BiUserCheck } from 'react-icons/bi'                    //Stakeholder Management
import { TbBrandFigma, TbBrandSlack } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactForm from '@/components/ui/contact-form';

const experiences = [
    {
        role: 'Technical Project Manager Intern',
        company: 'dau Agency, Gurgaon',
        duration: 'Nov 2024 – Present',
        points: [
            'Delivered 12+ technical projects for brands like Unibic, CDSL, Pizza Express',
            'Managed project timelines with 85% task tracking accuracy',
            'Led cross-functional teams resolving 75+ UI/UX issues'
        ]
    },
    {
        role: 'Software Intern',
        company: 'KareXpert Technologies',
        duration: 'Aug 2024 – Oct 2024',
        points: [
            'Developed a RAG architecture based context aware chatbot using MongoDB Atlas & Google Gemma Model',
            'Used FAST API and optimized API endpoints reducing latency by 30%'
        ]
    },
    {
        role: 'MERN Full Stack Developer Intern',
        company: 'Ethnus Consultancy Services',
        duration: 'Aug 2023 - Nov 2023',
        points: [
            'Developed 10+ mini-projects including Word Counter app, Calculator app',
            'Built a full-stack Bidding platform with real time bidding updates'
        ]
    }
];
// Mock Blog Data
interface Blog {  // Define the Blog interface
    id: number;
    title: string;
    date: string;
    author: string;
    description: string;
    tags: string[];
    content: string;
    imageUrl: string;
}

const allBlogs: Blog[] = [ // Use the Blog interface
    {
        id: 1,
        title: 'Will AI Replace Software Engineers? The Future of Coding with AI',
        date: '2024-03-15',
        author: 'Hriday Sehgal',
        description: 'AI tools like ChatGPT, DeepSeek, and V0 by Vercel are revolutionizing coding, but will they replace software engineers?',
        tags: ['Technology', 'Software Development'],
        content: '', imageUrl: '/ai.jpg',
    },
    {
        id: 2,
        title: 'Product Management 101: A Beginner’s Guide to Understanding PM',
        date: '2024-02-20',
        author: 'Hriday Sehgal',
        description: 'A beginner friendly introduction to the world of product management.',
        tags: ['Product Management', 'Beginner'],
        content: '',
        imageUrl: '/Intro to PM-min.jpg',
    },
    {
        id: 3,
        title: 'Top 10 Project Management Tools Every PM Should Know',
        date: '2024-01-10',
        author: 'Hriday Sehgal',
        description: 'Project management tools streamline collaboration, planning, and execution across various industries. Here are the top 10 tools every project manager should know.',
        tags: ['Management', 'Guide'],
        content: ``,
        imageUrl: '/projectmanager_text_1-min.jpg',
    },

];

export default function Home() {

    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]); // Explicitly type latestBlogs

    useEffect(() => {
        setLatestBlogs(allBlogs); // Set to all blogs, not just the first 3, since linking is removed
    }, []);



    const skills = {
        technical: [
            { name: 'React', icon: <SiReact className="w-6 h-6" /> },
            { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6" /> },
            { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" /> },
            { name: 'Next.js', icon: <SiNextdotjs className='w-6 h-6' /> },
            { name: 'HTML', icon: <SiHtml5 className='w-6 h-6' /> },
            { name: 'CSS', icon: <SiCss3 className='w-6 h-6' /> },
            { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" /> },
            { name: 'Express.js', icon: <SiExpress className="w-6 h-6" /> },
            { name: 'Python', icon: <SiPython className="w-6 h-6" /> },
            { name: 'Figma', icon: <TbBrandFigma className='w-6 h-6' /> },
            { name: 'Jira', icon: <SiJira className='w-6 h-6' /> },
            { name: 'Google Analytics', icon: <SiGoogleanalytics className='w-6 h-6' /> },
            { name: 'Postman API', icon: <SiPostman className='w-6 h-6' /> },
            { name: 'Git', icon: <SiGit className='w-6 h-6' /> },
            { name: 'Github', icon: <SiGithub className='w-6 h-6' /> },
        ],
        management: [
            { name: 'Product Strategy', icon: <BsGraphUp className="w-6 h-6" /> },
            { name: 'Market Research', icon: <BsClipboardData className='w-6 h-6' /> },
            { name: 'Leadership', icon: <FaBrain className="w-6 h-6" /> },
            { name: 'Communication', icon: <TbBrandSlack className='w-6 h-6' /> }, // Slack
            { name: 'Product Management', icon: <FaProjectDiagram className='w-6 h-6' /> },
            { name: 'Project Management', icon: <FaProjectDiagram className="w-6 h-6" /> },
            { name: 'Event Management', icon: <MdOutlineEventAvailable className='w-6 h-6' /> },
            { name: 'Stakeholder Management', icon: <BiUserCheck className='w-6 h-6' /> }

        ]

    };

    const projects = [
        {
            title: 'BidBot Auction Platform',
            description: 'Full-stack auction platform with real-time bidding',
            tech: 'React.js, Node.js, MongoDB, Express.js',
            links: {
                github: 'https://github.com/hriday-sehgal/BidBot-Online-Auction-System-Project-Frontend',
                live: 'https://bidbotauctionsystem.onrender.com/'
            }
        },
        {
            title: 'RAG Chatbot',
            description: 'A context-aware chatbot using Retrieval-Augmented Generation (RAG) architecture. It integrates MongoDB Atlas Vector search for document retrieval and Google’s Gemma-2b-it model for natural language response generation. ',
            tech: 'AngularJS, Python, Fast API, MongoDB',
            links: {
                github: 'https://github.com/hriday-sehgal/RAG-Chatbot',
                live: '#'
            }
        },
        {
            title: 'Next.js Blog Website',
            description: 'A modern Next.js blog website with Premium membership, Sanity CMS, Supabase auth, and Razorpay payments. ',
            tech: 'Next.js, Supabase, Tailwind CSS',
            links: {
                github: 'https://github.com/hriday-sehgal/decodewithhriday-blog',
                live: 'https://decodewithhriday.vercel.app/'
            }

        },
    ];

    const testimonials = [
        {
            name: 'Sanjay Kumar Prajapati',
            role: 'GM - Software Development, KareXpert',
            text: "I’m thrilled to see the value you gained from working on such an exciting project with us! Your passion, dedication, and creativity truly elevated the team's efforts. You brought an analytical and solution-oriented mindset, which was crucial in tackling new challenges and adapting swiftly. Your contribution has been nothing short of impressive."
        },
        {
            name: 'Gaurav Hasija',
            role: 'CEO, dau Agency',
            text: "You are learning, slowly and steadily and doing a very good job. Your pace is fine, attitude towards work is good and you are keen on learning which is a good thing and not many people have that. I would want more people like you to join us."
        },
        {
            name: 'Shashank Gupta',
            role: 'Frontend Developer, dau Agency',
            text: "As a Project Manager in the tech department, you have been proactive and collaborative. Over the last three months, your contributions to project coordination and team communication have been valuable. Your willingness to learn and adapt has been a positive aspect of your work."
        },
        {
            name: 'Amartya Dev',
            role: 'Senior UI/UX Designer, dau Agency',
            text: "Your assistance over the past two months has been invaluable, whether it’s finding content or making minor tweaks—you never say no. I truly admire your work ethic and commitment- towards learning, towards growing. I see you go above & beyond your duties when you feel you can help others out. "
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    return (
        <div className="">
            {/* Hero Section */}
            <section
                className="py-24 px-4 md:px-8 lg:px-16  relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    >
                        Hi, I&apos;m Hriday
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mb-6 text-xl md:text-2xl font-medium"
                    >
                        <TypeAnimation
                            sequence={[
                                'A Technical Project Manager',
                                1500,
                                'A Software Developer',
                                1500,
                                'A Product Manager',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
                    >
                        I bridge the gap between vision and execution, crafting exceptional digital experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <Link href="#contact">
                            <Button className="mr-4">
                                Contact Me <FiArrowRight className='ml-2' />
                            </Button>
                        </Link>
                        <Button variant="outline" asChild>
                            <a href="https://drive.google.com/file/d/1ZzSDnKf3DNbndhiFDt3ocjrOnQLybDXh/view?usp=sharing" target='_blank' download>
                                Download Resume <FiDownload className="ml-2" />
                            </a>
                        </Button>
                    </motion.div>
                </div>

            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 md:px-8 lg:px-16">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
                    <Tabs defaultValue="technical" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                            <TabsTrigger value="management">Management Skills</TabsTrigger>
                        </TabsList>
                        <TabsContent value="technical">
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileInView={{ opacity: 1, y: 0 }} // Add whileInView
                                transition={{ duration: 0.5, delay: 0.2 }} // Add delay
                            >
                                {skills.technical.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-black/5 transition-colors">
                                        {skill.icon}
                                        <span className="text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="management">
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileInView={{ opacity: 1, y: 0 }} // Add whileInView
                                transition={{ duration: 0.5, delay: 0.2 }} // Add delay
                            >
                                {skills.management.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-black/5 transition-colors">
                                        {skill.icon}
                                        <span className="text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </section>

            {/* Experience Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center">
                        <FiBriefcase className="w-6 h-6" /> Professional Experience
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-l-2 pl-4 border-primary"
                            >
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-muted-foreground">{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4 md:px-8 lg:px-16">                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.title}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{project.tech}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" asChild>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">                                            <FiGithub className="mr-2" /> GitHub
                                    </a>
                                </Button>
                                {project.links.live && (
                                    <Button asChild>
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">                                                <FiExternalLink className="mr-2" /> Live Demo
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">

                    <Link href="/projects">
                        <Button>View All Projects</Button>
                    </Link>

                </div>
            </motion.div>

            </section>

            {/* Blogs Section */}
            <section id="blogs" className="py-16 px-4 md:px-8 lg:px-16">                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestBlogs.map((blog: Blog) => ( // Use the Blog type here

                        <Card key={blog.id} className="h-full flex flex-col">
                            <Link href="https://decodewithhriday.vercel.app/blogs" target="_blank" rel="noopener noreferrer">
                                <CardHeader>
                                    <CardTitle>{blog.title}</CardTitle>
                                    <CardDescription>
                                        {blog.date} • {blog.author}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="relative w-full h-48 mb-4">
                                        <Image
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                                            className="rounded-md"
                                        />
                                    </div>
                                    <p>{blog.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag: string) => ( // Explicitly type tag
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                   <Link href="https://decodewithhriday.vercel.app/" target="_blank" rel="noopener noreferrer">
                       <Button>View All Blogs</Button>
                   </Link>
                   </div>
            </motion.div>

            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 px-4 md:px-8 lg:px-16">                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center" // Keep max-w-4xl for overall section
            >
                <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
                <div className="relative w-full mx-auto overflow-hidden"> {/* Remove max-w-xl here */}
                    {/* Testimonial Content */}
                    <motion.div
                        className="px-8 py-6 bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out" // Increase padding
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            display: 'block',
                            width: '80%', // Adjust width as needed
                            maxWidth: '800px', // Add a max-width
                            margin: '0 auto' // Center horizontally
                        }}
                    >
                        <p className="text-gray-600 italic text-base md:text-lg">&quot;{testimonials[currentIndex].text}&quot;</p> {/* Adjust text size */}
                        <h3 className="text-black text-lg font-semibold mt-4">{testimonials[currentIndex].name}</h3>
                        <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                    </motion.div>
                </div>
            </motion.div>
            </section>

            <div id="contact" className="py-16">
                <ContactForm />
            </div>


        </div>

    );

}
