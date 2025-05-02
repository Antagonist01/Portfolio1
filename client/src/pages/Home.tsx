import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';
import SkillCard, { SkillCardProps } from '@/components/SkillCard';
import ExperienceItem, { ExperienceProps } from '@/components/ExperienceItem';
import { useToast } from '@/hooks/use-toast';
import { CodeIcon, LayoutIcon, BarChartIcon, GlobeIcon, CloudIcon, AwardIcon } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

export default function Home() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard("johnwick@example.com");
    if (success) {
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard.",
      });
    } else {
      toast({
        title: "Copy failed",
        description: "Failed to copy email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const downloadResume = () => {
    toast({
      title: "Resume download",
      description: "Your resume download has started.",
    });
    // In a real implementation, this would link to an actual resume file
  };

  const projects: ProjectProps[] = [
    {
      title: "Carbon Footprint Calculator",
      description: "A comprehensive tool that helps users calculate and track their carbon footprint based on daily activities, with recommendations for reducing environmental impact.",
      imageSrc: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      imageAlt: "Carbon Footprint Calculator Project",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "SEO Tag Inspector",
      description: "A browser extension that analyzes webpage SEO elements in real-time, providing actionable insights and recommendations for optimization.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      imageAlt: "SEO Tag Inspector Project",
      technologies: ["JavaScript", "Chrome API", "HTML/CSS", "API Integration"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Interactive To-Do List",
      description: "A feature-rich task management application with drag-and-drop functionality, priority levels, and advanced filtering options.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      imageAlt: "Interactive To-Do List Project",
      technologies: ["React", "React DnD", "Firebase", "TailwindCSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Modern Chair Product Page",
      description: "An immersive e-commerce product page with 3D model visualization, color customization, and seamless checkout experience.",
      imageSrc: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      imageAlt: "Modern Chair Product Page Project",
      technologies: ["Three.js", "React", "Framer Motion", "Stripe API"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const skills: SkillCardProps[] = [
    {
      title: "Programming & Database",
      icon: <CodeIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "JavaScript/TypeScript", percentage: 90 },
        { name: "Python", percentage: 85 },
        { name: "SQL", percentage: 80 },
        { name: "NoSQL", percentage: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <LayoutIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "React", percentage: 95 },
        { name: "HTML5/CSS3", percentage: 90 },
        { name: "TailwindCSS", percentage: 85 },
        { name: "UI/UX Design", percentage: 80 }
      ]
    },
    {
      title: "Data Analysis",
      icon: <BarChartIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "Data Visualization", percentage: 90 },
        { name: "Statistical Analysis", percentage: 85 },
        { name: "Pandas/NumPy", percentage: 80 },
        { name: "Tableau/Power BI", percentage: 75 }
      ]
    },
    {
      title: "AI Tools",
      icon: <GlobeIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "Machine Learning", percentage: 75 },
        { name: "Natural Language Processing", percentage: 70 },
        { name: "TensorFlow/PyTorch", percentage: 65 },
        { name: "Computer Vision", percentage: 60 }
      ]
    },
    {
      title: "Sustainability",
      icon: <CloudIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "Carbon Footprint Analysis", percentage: 85 },
        { name: "Sustainable Development", percentage: 80 },
        { name: "Environmental Impact Assessment", percentage: 75 },
        { name: "Green Technology", percentage: 70 }
      ]
    },
    {
      title: "Certifications",
      icon: <AwardIcon className="h-8 w-8 text-white" />,
      skills: [
        { name: "Google Data Analytics", percentage: 100 },
        { name: "AWS Certified Developer", percentage: 100 },
        { name: "Microsoft Azure Fundamentals", percentage: 100 },
        { name: "React Certification", percentage: 100 }
      ]
    }
  ];

  const experiences: ExperienceProps[] = [
    {
      title: "Senior Data Analyst",
      company: "Eco Tech Solutions",
      date: "2020 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead data analysis initiatives for sustainable technology solutions",
        "Develop dashboard visualizations to track carbon footprint metrics",
        "Collaborate with cross-functional teams to implement data-driven strategies",
        "Mentor junior analysts and provide technical guidance"
      ],
      technologies: ["Python", "Tableau", "SQL", "R"],
      current: true,
      position: "right"
    },
    {
      title: "Frontend Developer",
      company: "Web Innovations Inc.",
      date: "2018 - 2020",
      location: "Austin, TX",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Implemented complex UI components with animation and interaction",
        "Optimized application performance and loading times",
        "Collaborated with designers to create pixel-perfect implementations"
      ],
      technologies: ["React", "TypeScript", "SCSS", "Redux"],
      position: "left"
    },
    {
      title: "Junior Software Engineer",
      company: "DataFlow Systems",
      date: "2016 - 2018",
      location: "Boston, MA",
      description: [
        "Developed data processing pipelines for client datasets",
        "Created internal tools to streamline workflow processes",
        "Contributed to backend services using Node.js and Express",
        "Assisted in database design and optimization"
      ],
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "Express"],
      position: "right"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-grid-pattern">
        <ParticleBackground />
        
        {/* Background decoration elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 pt-24 md:pt-0 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="w-full md:w-1/2 md:pl-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-medium mb-2 text-primary">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">John Wick</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-700 dark:text-gray-300">
                Programmer & Data Analyst
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Creating sustainable solutions through code and data analysis. I build intuitive interfaces and extract meaningful insights from complex datasets.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={downloadResume}
                  className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Download Resume
                </button>
                <a 
                  href="#contact" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://twitter.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                {/* Decorative code window effect */}
                <div className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gray-800 dark:bg-gray-700 px-4 py-2 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4 font-mono text-sm text-green-400">
                    <div className="mb-1">
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                    </div>
                    <div className="mb-1 pl-4">
                      <span className="text-yellow-400">name:</span> <span className="text-green-400">'John Wick'</span>,
                    </div>
                    <div className="mb-1 pl-4">
                      <span className="text-yellow-400">skills:</span> [<span className="text-green-400">'Web Dev'</span>, <span className="text-green-400">'Data Analysis'</span>],
                    </div>
                    <div className="mb-1 pl-4">
                      <span className="text-yellow-400">passion:</span> <span className="text-green-400">'Building solutions'</span>,
                    </div>
                    <div className="mb-1">
                      {'};'}
                    </div>
                    <div className="mt-3">
                      <span className="text-purple-400">function</span> <span className="text-blue-400">createAwesomeStuff</span>() {'{'}
                    </div>
                    <div className="mb-1 pl-4">
                      <span className="text-orange-400">return</span> developer.skills.map(
                    </div>
                    <div className="mb-1 pl-8">
                      <span className="text-blue-400">skill</span> {'=>'} <span className="text-green-400">'Amazing ' + skill</span>
                    </div>
                    <div className="mb-1 pl-4">
                      );
                    </div>
                    <div className="mb-1">
                      {'}'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ y: 5 }}
          >
            <p className="mb-2">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="About Me" />
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-xl transform hover:scale-[1.01] transition-all duration-500">
                  <img 
                    src="https://i.imgur.com/9Nn5Vtm.png" 
                    alt="John Wick Ghibli-style portrait" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Programmer & Data Analyst</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate developer and data analyst with a strong focus on creating sustainable, user-centered solutions. With expertise in both frontend development and data analysis, I bring a unique perspective to projects that require technical excellence and analytical thinking.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                My journey in tech began with a fascination for how data can drive meaningful decisions. This led me to develop skills across the full stack while maintaining a specialization in data visualization and analysis. I enjoy tackling complex problems and transforming them into elegant, efficient solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">20+</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">Projects Completed</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">5+</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">Years Experience</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">15+</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">Technologies</p>
                </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">React</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">TypeScript</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">Node.js</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">Python</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">Data Analysis</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">SQL</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">Data Visualization</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">TailwindCSS</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white">UI/UX</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 mb-12">
        <div className="container mx-auto px-4">
          <SectionHeading title="My Skills" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="My Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                technologies={project.technologies}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="My Experience" />
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-primary z-0"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot with larger hit area */}
                  <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary z-10">
                    <div className="absolute inset-[-4px] rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                  
                  <ExperienceItem
                    title={experience.title}
                    company={experience.company}
                    date={experience.date}
                    location={experience.location}
                    description={experience.description}
                    technologies={experience.technologies}
                    current={experience.current}
                    position={experience.position}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Get In Touch" />
          
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">johnwick@example.com</p>
                      <button 
                        className="text-primary text-sm hover:underline"
                        onClick={handleCopyEmail}
                      >
                        Copy email address
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Social Profiles</h4>
                      <div className="flex gap-4 mt-2">
                        <a href="https://github.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="GitHub">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="https://linkedin.com/in/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://twitter.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-10 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 transition-colors"
                      placeholder="Your Name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 transition-colors"
                      placeholder="your@email.com"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 transition-colors"
                      placeholder="Subject"
                      required
                      value={contactForm.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 transition-colors resize-none"
                      placeholder="Your message here..."
                      required
                      value={contactForm.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-primary text-white py-3 rounded-md font-medium hover:shadow-lg transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#hero" className="text-2xl font-bold text-gradient-secondary">
                John Wick
              </a>
              <p className="text-gray-400 mt-2 max-w-md">
                Creating sustainable solutions through code and data analysis. Building a better digital world, one project at a time.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com/johnwick" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  &copy; 2023 John Wick. All rights reserved.
                </p>
              </div>
              
              <div className="flex gap-6">
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}>Home</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}>About</a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}>Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}>Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
