import React, { useState, useEffect } from 'react';
import {
  Menu, X, Home, User,BookOpenText, Lightbulb, Briefcase, Mail, Github, Linkedin, Twitter,
  Code, Palette, Database, GitBranch, Figma, ExternalLink, MessageSquareText
} from 'lucide-react';

import profilePic from './assets/profile.jpeg';
// Helper component for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education','skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Offset for better detection

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: BookOpenText },
    { id: 'skills', label: 'Skills', icon: Lightbulb },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const skillsData = [
    { category: 'Frontend', icons: [
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Code },
      { name: 'React', icon: Code },
      { name: 'Tailwind CSS', icon: Palette },
    ]},
    { category: 'Backend', icons: [
      { name: 'Node.js', icon: Code },
      { name: 'Express.js', icon: Code },
      { name: 'Python', icon: Code },
      { name: 'SQL', icon: Database },
    ]},
    { category: 'Tools & Others', icons: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Figma', icon: Figma },
      { name: 'REST APIs', icon: Code },
    ]},
  ];

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.',
      image: 'https://placehold.co/600x400/E0E7FF/4F46E5?text=E-commerce',
      demoLink: '#',
      githubLink: '#',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Expenses Tracker App',
      description: 'A responsive task management application allowing users to create, update, and delete tasks with drag-and-drop features.',
      image: 'https://placehold.co/600x400/D1FAE5/065F46?text=Expenses+Tracker+App',
      demoLink: '#',
      githubLink: '#',
      tags: ['React', 'Firebase', 'Redux', 'CSS Modules']
    },
    {
      id: 3,
      title: 'Movie Blog Site',
      description: 'A simple blog platform where users can read articles, view comments, and manage their movie posts through an admin panel.',
      image: 'https://placehold.co/600x400/FEF2F2/EF4444?text=Movie+Blog+Site',
      demoLink: '#',
      githubLink: '#',
      tags: ['Next.js', 'Strapi CMS', 'GraphQL', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Lineup Larry',
      description: 'An interactive weather application that fetches real-time weather data based on user location or search queries.',
      image: 'https://placehold.co/600x400/DBEAFE/1D4ED8?text=Lineup+Larry',
      demoLink: '#',
      githubLink: '#',
      tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API']
    },
  ];

  const educationData = [
    {
      qualification: 'Bachelor of Engineering in Computer and Electronics with minor in Data Science',
      institution: 'Padre Conceicao College of Engineering',
      years: '2021 - 2025',
      description: 'Completed my B.E. in Computer Engineering, covering core subjects such as Computer Networks, Web Development, and Operating Systems. Additionally pursued a minor in Data Science, which included foundational training in Artificial Intelligence and Machine Learning (AI/ML).',
    },
    {
      qualification: 'High Secondary School Certificate',
      institution: 'Rosary Higher Secondary School',
      years: '2019 - 2021',
      description: 'I specialized in the science stream during my academic studies, focusing on subjects like Physics, Chemistry, Mathematics, and Computer Science. I successfully completed the program with an overall score of 75%, demonstrating consistent performance across all core subjects. It was through Computer Science that my coding journey began, sparking my interest in technology and software development.',
    },
    {
      qualification: 'High School Certificate',
      institution: 'Our Lady of Health High School',
      years: '2009 - 2019',
      description: 'I secured 2nd place in my school by scoring 86% in the high school board examinations. This achievement reflected my dedication and strong academic performance. It also motivated me to continue striving for excellence in my further studies.',
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors">
            RITVIZ DCOSTA
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  activeSection === item.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  activeSection === item.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20"> {/* Padding top to account for fixed navbar */}
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 md:py-32 flex items-center min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/CCCCCC/333333?text=Error"; }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
              Hi, I'm <span className="text-yellow-300">Ritviz</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
              A passionate <span className="font-semibold">Software Developer</span> building engaging web experiences.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 ease-in-out transform animate-bounce-in"
            >
              View My Work
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                Hello! I'm Ritviz D'Costa, a dedicated software developer with a knack for creating
                clean, efficient, and user-friendly web applications. My journey into programming
                started with a fascination for how digital products come to life, and it has since
                evolved into a passion for crafting impactful solutions.
              </p>
              <p>
                I specialize in front-end development, bringing designs to life with technologies like
                React, JavaScript, and Tailwind CSS. I also have experience with back-end development
                using Node.js and various databases, allowing me to build full-stack applications from
                concept to deployment.
              </p>
              <p>
                I thrive on learning new technologies and solving complex problems. When I'm not coding,
                you can find me exploring new hiking trails, reading sci-fi novels, or experimenting
                with new recipes in the kitchen. I'm always looking for opportunities to grow and
                contribute to exciting projects.
              </p>
              <p>
                Feel free to explore my work below and don't hesitate to reach out if you'd like to
                collaborate or just say hello!
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Education
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line for timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full hidden md:block"></div>

              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`flex items-center w-full mb-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 p-4 md:px-8">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-indigo-700 mb-1">{edu.degree}</h3>
                      <p className="text-lg text-gray-800 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-600 mb-3">{edu.years}</p>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>

                  {/* Dot on timeline (hidden on small screens) */}
                  <div className="hidden md:block w-1/12 flex justify-center">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-lg border-2 border-white"></div>
                  </div>

                  {/* Empty div for spacing on the other side (hidden on small screens) */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {skillsData.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.icons.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 text-gray-700">
                        <skill.icon size={20} className="text-indigo-500" />
                        <span className="text-lg">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <div key={project.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Error"; }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-start space-x-4 mt-auto">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                      >
                        <ExternalLink size={18} className="mr-2" /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors shadow-md"
                      >
                        <Github size={18} className="mr-2" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 text-center mb-6">
                Have a question or want to work together? Feel free to send me a message!
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <MessageSquareText size={20} className="mr-2" /> Send Message
                </button>
              </form>
              <div className="mt-8 text-center space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Github size={32} className="inline-block" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin size={32} className="inline-block" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Twitter size={32} className="inline-block" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;