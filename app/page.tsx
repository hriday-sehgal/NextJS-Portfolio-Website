// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  SiReact,
  SiPython,
  SiJira,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNextdotjs,
  SiGoogleanalytics,
  SiPostman,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiSupabase,
  SiFastapi,
} from "react-icons/si";
import {
  FiDownload,
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiBriefcase,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaBrain, FaProjectDiagram } from "react-icons/fa"; // Leadership, Project Mgmt, Communication
import { BsGraphUp, BsClipboardData } from "react-icons/bs"; // Strategy, Product Management
import { MdOutlineEventAvailable } from "react-icons/md"; //Event Management
import { BiUserCheck } from "react-icons/bi"; //Stakeholder Management
import { TbBrandFigma, TbBrandSlack } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ui/contact-form";
import Script from "next/script";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "RegisterKaro, Gurgaon",
    duration: "Apr 2025 – Present",
    points: [
      "Developed and optimized responsive website pages using Next.js and SCSS, improving UI consistency and cross-device user experience.",
      "Implemented technical SEO strategies including state-wise sitemaps, canonical tags, and meta tags, resulting in a 20% improvement in search engine visibility and crawlability.",
      "Designed and launched a high-converting ads landing page that resulted in a 10% increase in leads and revenue.",
      "Developed a custom Node.js crawler to identify and resolve broken links and SEO issues, improving website performance and site health.",
    ],
  },
  {
    role: "Technical Project Manager Intern",
    company: "dau Agency, Gurgaon",
    duration: "Nov 2024 – March 2025",
    points: [
      "Managed 15+ technical projects across multiple clients, including 360 Strategy, CDSL, and Pizza Express, ensuring timely delivery and alignment with business goals.",
      "Led end-to-end execution of 5+ website projects, overseeing UI/UX reviews in Figma and coordinating development using WordPress & Elementor.",
      "Optimized project workflows using ClickUp & Jira, increasing task tracking accuracy by 75% and reducing project delays by 20%.",
      "Performed UI/UX and functional testing, identifying and resolving 85+ frontend issues, ensuring high-quality deployment.",
    ],
  },
  {
    role: "Software Intern",
    company: "KareXpert Technologies Pvt. Ltd.",
    duration: "Aug 2024 – Oct 2024",
    points: [
      "Developed a RAG (Retrieval-Augmented Generation) based chatbot using MongoDB Atlas Vector Search and Google Gemma LLM Model, improving user query response accuracy by 30%.",
      "Optimized document retrieval by generating vector embeddings with Sentence Transformer GTE model, resulting in reduced response time by 20%.",
      "Built and optimized API endpoints using FastAPI to manage training, embedding creation, and response generation, reducing latency in user interactions by 10%.",
    ],
  },
  {
    role: "MERN Full Stack Intern",
    company: "Ethnus Consultancy Services",
    duration: "Aug 2023 - Nov 2023",
    points: [
      "Gained experience in MERN stack technologies, building and deploying scalable web applications.",
      "Created over 10 mini-projects like a Word Counter, Calculator, and Portfolio, strengthening skills in HTML, CSS, JavaScript, and React.js through hands-on development.",
      "Collaborated with a team of 5 to develop a full-stack web application, integrating both frontend and backend features. Received recognition from the mentor for delivering a well-structured final project.",
    ],
  },
];
// Mock Blog Data
interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  tags: string[];
  content?: string;
}

const allBlogs: Blog[] = [
  {
    id: 1,
    title: "Building a Modern Blog with Next.js and Sanity CMS",
    description:
      "A comprehensive guide on creating a full-stack blog application with Next.js, Sanity CMS, and Supabase authentication.",
    imageUrl: "/ai.jpg",
    date: "2024-03-15",
    author: "Hriday Sehgal",
    tags: ["Next.js", "Sanity CMS", "Supabase", "Web Development"],
  },
  {
    id: 2,
    title: "Product Management 101: A Beginner's Guide to Understanding PM",
    description:
      "Learn the fundamentals of product management, from ideation to execution, and how to become an effective product manager.",
    imageUrl: "/Intro to PM-min.jpg",
    date: "2024-02-20",
    author: "Hriday Sehgal",
    tags: ["Product Management", "Career Development", "Leadership"],
  },
  {
    id: 3,
    title: "Will AI Replace Software Engineers? The Future of Coding with AI",
    description:
      "Explore the impact of AI on software development, the evolving role of developers, and how to prepare for the future of coding.",
    imageUrl: "/ai.jpg",
    date: "2025-06-15",
    author: "Hriday Sehgal",
    tags: ["AI", "Software Development", "Future of Coding"],
  },
];

// Add this before the main component
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hriday Sehgal",
  url: "https://hridaysehgal.vercel.app",
  jobTitle: [
    "Software Developer",
    "Technical Project Manager",
    "Product Manager",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Technical SEO",
    "Web Development",
    "Product Management",
    "Project Management",
  ],
  description:
    "Software Developer, Technical Project Manager, and Product Manager with expertise in full-stack development, project management, and technical SEO.",
  sameAs: [
    "https://www.linkedin.com/in/hriday-sehgal/",
    "https://github.com/hriday-sehgal",
  ],
  knowsAbout: [
    "Software Development",
    "Technical Project Management",
    "Product Management",
    "Full-stack Development",
    "Technical SEO",
    "Web Development",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML5/CSS3",
    "JavaScript (ES6+)",
    "SCSS",
    "Sanity CMS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Supabase",
    "Authentication",
    "Git/GitHub",
    "SEO Optimization",
    "ClickUp",
    "JIRA",
    "Figma",
    "Postman",
    "Google Analytics",
    "Google Tag Manager",
  ],
};

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setLatestBlogs(allBlogs);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovering]);

  const skills = {
    technical: [
      {
        category: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5/CSS3",
          "JavaScript (ES6+)",
          "Technical SEO",
          "SCSS",
          "Sanity CMS",
        ],
      },
      {
        category: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "REST APIs",
          "Supabase",
          "Authentication",
        ],
      },
      {
        category: "Tools & Others",
        items: [
          "Git/GitHub",
          "ClickUp",
          "JIRA",
          "Figma",
          "Postman",
          "Google Analytics",
          "Google Tag Manager",
        ],
      },
    ],
    management: [
      {
        category: "Project Management",
        items: [
          "Agile/Scrum",
          "JIRA",
          "Technical Documentation",
          "Team Leadership",
          "Risk Management",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Problem Solving",
          "Communication",
          "Time Management",
          "Critical Thinking",
        ],
      },
    ],
  };

  const projects = [
    {
      title: "Next.js Blog Website",
      description:
        "A full-stack blogging platform with premium subscriptions, real-time content updates, and SEO optimization.",
      tech: "Next.js, Supabase, Sanity CMS, Tailwind CSS, Razorpay",
      points: [
        "Implemented secure authentication with Google OAuth and integrated Razorpay for premium subscriptions",
        "Enabled real-time content updates via Sanity Webhooks and enhanced UX with Framer Motion",
        "Configured Google Analytics and deployed on Vercel with optimized SEO, increasing reach by 30%",
      ],
      links: {
        github: "https://github.com/hriday-sehgal/decodewithhriday-blog",
        live: "https://decodewithhriday.vercel.app/",
      },
    },
    {
      title: "Online Bidding Platform",
      description:
        "A real-time auction platform with automated bidding and timed closures.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      points: [
        "Implemented CRUD operations to manage 10+ product listings and facilitate 90+ user bids",
        "Built RESTful APIs for real-time bidding and auction management",
        "Integrated Google Analytics to track user behavior and gather insights from 20+ users",
      ],
      links: {
        github:
          "https://github.com/hriday-sehgal/BidBot-Online-Auction-System-Project-Frontend",
        live: "https://bidbotauctionsystem.onrender.com/",
      },
    },
    {
      title: "RAG Chatbot",
      description:
        "A context-aware chatbot using RAG architecture and vector search.",
      tech: "Python, FastAPI, MongoDB Atlas, Google Gemma LLM",
      points: [
        "Developed RAG architecture using MongoDB Atlas Vector Search and Google Gemma LLM",
        "Optimized document retrieval with Sentence Transformer GTE model",
        "Built and optimized API endpoints using FastAPI, reducing latency by 10%",
      ],
      links: {
        github: "https://github.com/hriday-sehgal/RAG-Chatbot",
      },
    },
  ];

  const testimonials = [
    {
      name: "Sanjay Kumar Prajapati",
      role: "GM - Software Development, KareXpert",
      text: "I'm thrilled to see the value you gained from working on such an exciting project with us! Your passion, dedication, and creativity truly elevated the team's efforts. You brought an analytical and solution-oriented mindset, which was crucial in tackling new challenges and adapting swiftly. Your contribution has been nothing short of impressive.",
    },
    {
      name: "Gaurav Hasija",
      role: "CEO, dau Agency",
      text: "You are learning, slowly and steadily and doing a very good job. Your pace is fine, attitude towards work is good and you are keen on learning which is a good thing and not many people have that. I would want more people like you to join us.",
    },
    {
      name: "Shashank Gupta",
      role: "Frontend Developer, dau Agency",
      text: "As a Project Manager in the tech department, you have been proactive and collaborative. Over the last three months, your contributions to project coordination and team communication have been valuable. Your willingness to learn and adapt has been a positive aspect of your work.",
    },
    {
      name: "Amartya Dev",
      role: "Senior UI/UX Designer, dau Agency",
      text: "Your assistance over the past two months has been invaluable, whether it's finding content or making minor tweaks—you never say no. I truly admire your work ethic and commitment- towards learning, towards growing. I see you go above & beyond your duties when you feel you can help others out. ",
    },
  ];

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Hi, I'm Hriday
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mb-6 text-xl md:text-2xl font-medium text-gray-700"
              >
                <TypeAnimation
                  sequence={[
                    "A Software Developer",
                    1500,
                    "A Technical Project Manager",
                    1500,
                    "A Full Stack Developer",
                    1500,
                    "A Product Manager",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-blue-600"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              >
                Passionate about building innovative solutions and leading
                technical projects.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1lExlkrHWi6G2_emKSkZ0AWfmpVv0rW3U/view?usp=sharing"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Download Resume
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                I am a passionate software developer with a strong focus on
                creating innovative solutions. With experience in both
                development and project management, I bring a unique perspective
                to every project I work on. My expertise spans from full-stack
                development to technical project management, allowing me to
                bridge the gap between technical and business requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Skills
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive overview of my technical and management
                capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Technical Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.technical.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-800 mb-3">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Management Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-6">
                  Management Skills
                </h3>
                <div className="space-y-6">
                  {skills.management.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-800 mb-3">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 px-4 md:px-8 lg:px-16 bg-white relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A journey of growth and learning through various roles and
                responsibilities.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <span className="text-sm text-gray-500">
                          {exp.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A showcase of my best work and technical capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
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

            <div className="text-center mt-12">
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View All Projects <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blog"
          className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Latest Blog Posts
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Insights and thoughts on technology, development, and project
                management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {latestBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-blue-100 group">
                    <CardHeader className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                      <CardTitle className="text-xl font-bold text-blue-600 relative z-10">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{blog.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`https://decodewithhriday.vercel.app/blogs`}
                        className="w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full">
                          Read More <FiArrowRight className="ml-2" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                What People Say
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Feedback from colleagues and clients about my work and
                collaboration.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto px-4 md:px-0">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Card className="p-4 md:p-8 bg-white/80 backdrop-blur-sm border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 w-3 md:w-4"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>

            <div className="max-w-2xl mx-auto">
              <ContactForm />
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
                      href="#contact"
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
                <ul className="space-y-2 text-gray-600">
                  <a href="mailto:hriday.career@gmail.com" target="_blank">
                    <li className="flex items-center">
                      <FiMail className="mr-2" /> hriday.career@gmail.com
                    </li>
                  </a>
                  <li className="flex items-center">
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
    </>
  );
}
