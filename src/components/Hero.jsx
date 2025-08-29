import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import GooeyNav from './GooeyNav';
import RotatingText from './RotatingText'
import TextType from './TextType';
import { FaGithub } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from "framer-motion";
import avatar from '../assets/image.jpg';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Menu, 
  X, 
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
  Figma,
  ArrowRight,
  Download,
  Sparkles
} from 'lucide-react';

const handleAnimationComplete = () => {
  console.log('Letter animation completed');
};

// Enhanced animations
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const flyIn = {
  hidden: { opacity: 0, y: -40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: ( i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay : i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent. I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML5', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    { name: 'CSS3', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    { name: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'Vue.js', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    { name: 'Tailwind CSS', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
    { name: 'SASS', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
    { name: 'Git', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
    { name: 'Figma', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A modern admin dashboard with real-time analytics, built with React and Chart.js.',
      image: '/mockup.jpeg',
      technologies: ['React', 'Tailwind', 'Chart.js'],
      liveDemo: 'vortex-clothing-frontend.vercel.app',
      github: 'https://github.com/Dushan23340/vortex-ecommerce.git'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop functionality and team features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Vue.js', 'TypeScript', 'Vuetify'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts and animated weather icons.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      technologies: ['JavaScript', 'SASS', 'Weather API'],
      liveDemo: '#',
      github: '#'
    }
  ];

  const timeline = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2023 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      description: 'Built responsive web applications using Vue.js and Tailwind CSS, collaborated with design teams to implement pixel-perfect UIs.',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'WebStudio Agency',
      period: '2021 - 2022',
      description: 'Developed client websites using HTML, CSS, and JavaScript. Learned modern frameworks and best practices in web development.',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Computer Science Degree',
      company: 'University of Technology',
      period: '2018 - 2021',
      description: 'Bachelor\'s degree in Computer Science with focus on web technologies and software engineering principles.',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-yellow-500'
    }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  // Floating skill icons for hero section
  const floatingSkills = [
    { icon: <FaReact />, color: 'text-cyan-400', delay: 0 },
    { icon: <FaJs />, color: 'text-yellow-400', delay: 1 },
    { icon: <SiTailwindcss />, color: 'text-teal-400', delay: 2 },
    { icon: <FaNodeJs />, color: 'text-green-400', delay: 3 },
    { icon: <FaHtml5 />, color: 'text-orange-500', delay: 4 },
    { icon: <FaCss3Alt />, color: 'text-blue-500', delay: 5 },
    { icon: <SiMongodb />, color: 'text-green-600', delay: 6 },
    { icon: <SiExpress />, color: 'text-gray-400', delay: 7 },
    { icon: <FaGitAlt />, color: 'text-red-500', delay: 8 },
    { icon: <Figma />, color: 'text-purple-500', delay: 9 },
  ];

  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Dushan Chamuditha
            </div>

            <div className="hidden md:block relative h-10">
              <GooeyNav
                items={navItems}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                onItemClick={(id) => scrollToSection(id)} 
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 px-2 rounded hover:bg-gray-800 transition-colors ${
                      activeSection === item.id ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-950 via-purple-900 to-gray-950 relative overflow-hidden pt-24"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rounded-full"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 border border-purple-500/30 rounded-lg"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-12 h-12 border border-cyan-500/30"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Additional geometric shapes */}
          <motion.div
            className="absolute top-60 left-1/4 w-8 h-8 border border-green-500/30 rotate-45"
            animate={{
              x: [0, 25, 0],
              y: [0, -25, 0],
              rotate: [45, 225, 405],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute top-32 right-1/3 w-14 h-14 border border-pink-500/30 rounded-full"
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-60 right-1/4 w-10 h-10 border border-yellow-500/30"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              rotate: [0, 270, 540],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/6 w-6 h-6 border border-indigo-500/30 rounded-full"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-12 h-12 border border-orange-500/30 rotate-45"
            animate={{
              x: [0, 18, 0],
              y: [0, -18, 0],
              rotate: [45, 315, 585],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Triangle shapes */}
          <motion.div
            className="absolute top-1/4 left-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-emerald-500/30"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
              rotate: [0, 120, 240],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-violet-500/30"
            animate={{
              x: [0, -12, 0],
              y: [0, 12, 0],
              rotate: [0, -120, -240],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Additional geometric elements */}
          <motion.div
            className="absolute top-1/3 left-1/5 w-16 h-16 border-2 border-blue-400/20 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-8 h-8 border-2 border-purple-400/20 rotate-45"
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
              rotate: [45, 405, 765],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute top-2/3 right-1/4 w-12 h-12 border-2 border-cyan-400/20"
            animate={{
              x: [0, 25, 0],
              y: [0, -25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Hexagon shape */}
          <motion.div
            className="absolute top-1/2 right-1/6 w-10 h-10 border-2 border-green-400/20"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{
              x: [0, -18, 0],
              y: [0, 18, 0],
              rotate: [0, 120, 240],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Diamond shape */}
          <motion.div
            className="absolute bottom-1/2 left-1/4 w-14 h-14 border-2 border-pink-400/20 rotate-45"
            animate={{
              x: [0, 22, 0],
              y: [0, -22, 0],
              rotate: [45, 225, 405],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating Skill Icons */}
        {floatingSkills.map((skill, index) => (
          <motion.div
            key={index}
            className={`absolute text-3xl ${skill.color} opacity-40 hover:opacity-80 transition-opacity duration-300`}
            style={{
              top: `${10 + (index % 3) * 25}%`,
              left: `${15 + (index % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: skill.delay * 0.5,
            }}
            whileHover={{
              scale: 1.3,
              opacity: 0.8,
            }}
          >
            {skill.icon}
          </motion.div>
        ))}

        <div className="max-w-7xl w-full grid lg:grid-cols-2 items-center gap-12 z-10">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerStagger}
          >
          

            {/* Enhanced Main Heading */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-extrabold leading-tight"
              variants={letterAnimation}
            >
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Dushan Chamuditha
              </span>
            </motion.h1>

            {/* Enhanced Typing Animation */}
            <motion.div 
              className="text-2xl lg:text-3xl text-gray-300 min-h-[2.5rem]"
              variants={letterAnimation}
            >
              <TextType
                text={["Full-Stack Developer", "MERN & React Expert", "Creative Problem Solver", "Happy Coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="font-semibold"
              />
            </motion.div>

            {/* Enhanced Description */}
            <motion.p 
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
              variants={letterAnimation}
            >
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code, user experience, and bringing creative ideas to life.
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={letterAnimation}
            >
            <motion.button
  onClick={() => window.open("https://github.com/Dushan23340", "_blank")}
  className="group bg-gradient-to-r from-gray-800 to-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-white"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>GitHub</span>
  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
</motion.button>
              
              <motion.a
                href="/Dushan-Chamuditha-CV.pdf"
                download
                className="group border border-gray-600 px-8 py-4 rounded-xl font-semibold hover:bg-from-blue-500 to-purple-600 transition-all duration-300 text-center inline-flex items-center gap-2 hover:border-gray-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="flex gap-8 pt-4"
              variants={letterAnimation}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Card */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ProfileCard
              name="Dushan Chamuditha"
              title="Software Engineer"
              handle="dushan_chamu"
              status="Online"
              contactText="Contact Me"
              avatarUrl={avatar}
              iconUrl={avatar}
              grainUrl={avatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </motion.div>
        </div>

        
      </section>

      {/* About Section */}
<section
  id="about"
  className="py-24 bg-gray-950 text-white scroll-mt-20"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Title */}
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount:0.3 }}
      variants={fadeInUp}
      custom={0}
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>
 <p className="text-gray-400 max-w-2xl mx-auto text-lg flex flex-wrap items-center justify-center gap-1">
  I'm a passionate Full-Stack developer with 3+ years of experience crafting responsive, accessible, and Creative&nbsp;
<RotatingText
    texts={['Thinking', 'Coding', 'Components']}
    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-600 text-xl font-bold text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"    staggerFrom="last"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-120%" }}
    staggerDuration={0.035}
    splitLevelClassName="overflow-hidden"
    transition={{ type: "spring", damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
</p>


    </motion.div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Journey */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount:0.3 }}
        custom={1}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">My Journey</h3>
        <p className="text-gray-400 mb-5 leading-relaxed">
          I began as a designer intrigued by the web, then discovered the joy of coding.
          Today I bridge the gap between design and development by building engaging,
          accessible, and responsive UI/UX experiences.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Outside of coding, I enjoy exploring new technologies, contributing to open source,
          and sharing knowledge with the dev community.
        </p>
      </motion.div>

      {/* Skills */}
    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  variants={containerStagger}
>
  <h3 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h3>
  <motion.div
    className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center"
    variants={containerStagger}
  >
    {[
      { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
      { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
      { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
      { icon: <FaReact />, label: "React", color: "text-cyan-400" },
      { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, label: "Express", color: "text-gray-400" },
      { icon: <SiMongodb />, label: "MongoDB", color: "text-green-600" },
      { icon: <SiTailwindcss />, label: "Tailwind", color: "text-teal-400" },
      { icon: <Figma />, label: "Figma", color: "text-teal-400"},
    ].map((skill, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
        variants={flyIn}
      >
        <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
        <span className="text-sm text-gray-300">{skill.label}</span>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills and creativity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience & Timeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My journey in web development and key milestones along the way.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'} mb-4 md:mb-0`}>
                    <div className="bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 rounded-lg ml-8 md:ml-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-blue-400 mb-2">{item.company} • {item.period}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-gray-800`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                  <p className="text-gray-400 mb-6">
                    Feel free to reach out through any of these channels. 
                    I typically respond within 24 hours.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">dasanayakadushan@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-400">https://github.com/Dushan23340</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-400">linkedin.com/in/Dushan Chamuditha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Dushan Chamuditha. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Dushan23340" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/dushan-chamuditha-1769021b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/dushcham?s=21" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;