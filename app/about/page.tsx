'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiBook, FiBriefcase, FiAward, FiMusic } from 'react-icons/fi';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import ContactForm from '@/components/ui/contact-form';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import { useState,useEffect } from 'react';
import Image from 'next/image';


// Define a type for your blog objects
interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  content: string;
  imageUrl: string;
}

export default function AboutPage() {


const education = [
    {
      year: '2019',
      title: 'Class X - 92.2%',
      institution: 'Delhi Public School, Sec-45, Gurgaon',
      description: 'Completed 10th standard with CBSE curriculum'
    },
    {
      year: '2021',
      title: 'Class XII - 92%',
      institution: 'Delhi Public School, Sec-45, Gurgaon',
      description: 'Completed 12th standard in the Science Stream'
    },
    {
      year: '2021-2025',
      title: 'B.Tech Computer Science Engineering',
      institution: 'VIT Bhopal University',
      description: 'Currently in final year, specializing in Healthcare Technology'
    }
  ];

  const allBlogs: Blog[] = [ // Use the Blog type here
    {
    id: 1,
    title: 'Building Scalable Applications',
    date: '2024-03-15',
    author: 'Hriday Sehgal',
    description: 'Learn the principles of building applications that can handle increasing workloads.',
    tags: ['Technology', 'Architecture'],
    content: '',        imageUrl: '/placeholder-image.jpg',     },     {       id: 2,       title: 'Product Management 101',       date: '2024-02-20',       author: 'Hriday Sehgal',       description: 'A beginner friendly introduction to the world of product management.',       tags: ['Product Management', 'Beginner'],       content: '',
    imageUrl: '/placeholder-image.jpg',
    },
    {
    id: 3,
    title: 'Cloud Computing Fundamentals',
    date: '2024-01-10',
    author: 'Hriday Sehgal',
    description: 'Explore the concepts of cloud and important best practices.',
    tags: ['Management', 'Guide'],
    content: ``,
    imageUrl: '/placeholder-image.jpg',
    },
    
    ];

    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]); // Specify Blog[] type

    useEffect(() => {
    
    //Sort blogs by latest.
    const sortedBlogs = [...allBlogs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    
     setLatestBlogs(sortedBlogs.slice(0,3))
    
    }, [])

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

  const extracurricular = {
    role: 'Core Member in the Event Management Team',
    organization: 'Health-o-Tech University Club',
    duration: 'Jul 2023 - Aug 2024',
    points: [
      'Planned and Executed 10+ healthcare events for the club',
      "Managed the club's flagship event PULSE 1.0 healthcare summit with over 500 participants",
      'Received positive feedback for event organization'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Journey Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">My Journey</h1>
          <p className="text-lg text-muted-foreground mb-8">
            From academic excellence in school to becoming a tech enthusiast in college, 
            my journey has been fueled by curiosity and passion for solving real-world 
            problems through technology. Here is a glimpse into my educational and 
            professional evolution.
          </p>
        </motion.div>
      </section>

      {/* Education Timeline */}
<section className="py-16 bg-secondary/10">
  <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center">
      <FiBook className="w-6 h-6" /> Education
    </h2>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-primary/20 -translate-x-1/2" />
      
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative mb-12"
        >
          {/* Timeline dot */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 w-6 h-6 bg-primary rounded-full z-10" />
          
          <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-wrap items-center gap-8`}>
            {/* Date display */}
            <div className="w-full md:w-auto md:flex-1 text-center md:text-left">
              <span className="text-lg font-semibold bg-background px-4 py-2 rounded-lg">
                {edu.year}
              </span>
            </div>

            {/* Content card */}
            <Card className="p-6 md:w-[45%] relative z-20 shadow-lg">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-muted-foreground mt-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
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

      {/* Extracurricular Section */}
      <section className="py-16 bg-secondary/10">
        <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center gap-2 justify-center">
            <FiAward className="w-6 h-6" /> Leadership & Activities
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-background p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FiAward className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{extracurricular.role}</h3>
                <p className="text-muted-foreground">{extracurricular.organization}</p>
                <p className="text-sm text-muted-foreground">{extracurricular.duration}</p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {extracurricular.points.map((point, i) => (
                <li key={i} className="text-muted-foreground">{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center gap-2 justify-center">
            <FiMusic className="w-6 h-6" /> Hobbies & Interests
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Beatboxing</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Have performed at 5+ college events</li>
                <li>Participated in national beatbox competitions</li>
                <li>Received awards and certificates for my performances</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Writing Technical Articles</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Have written 10+ articles on Medium</li>
                <li>I write on a variety of topics like Product Management, Software Development, Healthcare, AI, etc.</li>
                <li>Received 100+ views on my technical articles</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
  <section id="blogs" className="py-16 px-4 md:px-8 lg:px-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBlogs.map((blog: Blog) => (

           <Card key={blog.id} className="h-full flex flex-col">
           <Link href="#">
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
                {blog.tags.map((tag: string) => (
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
        <Link href="/blogs">
        <Button>View All Blogs</Button> 
        </Link>      
        </div>
    </motion.div>
  </section>

     <NewsletterSignup />
       <div id="contact" className="py-16">
                <ContactForm />
      </div>
    </div>
  );
}
