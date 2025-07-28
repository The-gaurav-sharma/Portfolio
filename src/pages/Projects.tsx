import { useState } from 'react';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import ProjectModal from '../components/ProjectModal';
import project1Image from '../assets/project-1.jpg';
import project2Image from '../assets/project-2.jpg';
import project3Image from '../assets/project-3.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  duration: string;
  role: string;
  teamSize: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'FinTech Dashboard',
      description: 'A comprehensive financial management platform with real-time analytics, portfolio tracking, and AI-powered insights.',
      fullDescription: 'Revolutionary fintech platform that transforms how users manage their finances. Built with cutting-edge technology to provide real-time market data, advanced portfolio analytics, and personalized financial insights powered by machine learning algorithms.',
      image: project1Image,
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'WebSocket'],
      category: 'Web App',
      liveUrl: 'https://fintech-demo.com',
      githubUrl: 'https://github.com/alexjohnson/fintech-dashboard',
      duration: '6 months',
      role: 'Lead Full-Stack Developer',
      teamSize: '5 developers',
      features: [
        // 'Real-time market data integration',
        // 'Advanced portfolio analytics and visualization',
        // 'AI-powered investment recommendations',
        // 'Multi-currency support with live exchange rates',
        // 'Secure authentication with 2FA',
        // 'Mobile-responsive design with PWA capabilities'


        'THESE ARE DUMMY PROJECTS - REAL ONES TO BE UPDATED SOON'
      ]
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced search, personalized recommendations, and seamless payment integration.',
      fullDescription: 'Next-generation e-commerce platform designed for scalability and performance. Features include intelligent product recommendations, advanced search capabilities, and a seamless checkout experience that converts browsers into buyers.',
      image: project2Image,
      technologies: ['Next.js', 'Prisma', 'Stripe', 'Algolia', 'Vercel', 'Tailwind CSS'],
      category: 'E-Commerce',
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      duration: '4 months',
      role: 'Full-Stack Developer',
      teamSize: '3 developers',
      features: [
        'Advanced product search and filtering',
        'Personalized product recommendations',
        'One-click checkout with multiple payment options',
        'Inventory management system',
        'Customer reviews and ratings',
        'Admin dashboard with analytics'
      ]
    },
    {
      id: '3',
      title: 'SaaS Analytics Tool',
      description: 'Powerful analytics platform for SaaS businesses with custom dashboards, automated reporting, and predictive insights.',
      fullDescription: 'Comprehensive analytics solution that helps SaaS businesses understand their customers, track key metrics, and make data-driven decisions. Features advanced visualization, automated reporting, and predictive analytics.',
      image: project3Image,
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Docker', 'GCP', 'D3.js'],
      category: 'SaaS',
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/alexjohnson/saas-analytics',
      duration: '8 months',
      role: 'Technical Lead',
      teamSize: '7 developers',
      features: [
        'Custom dashboard builder',
        'Real-time data visualization',
        'Automated report generation',
        'Predictive analytics and forecasting',
        'API for third-party integrations',
        'White-label solution for enterprise clients'
      ]
    }
  ];

  const categories = ['All', 'Web App', 'E-Commerce', 'SaaS', 'Mobile App'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Layout>
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <h1 className="text-hero text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                MY
                <br />
                <span className="text-gradient">PROJECTS</span>
              </h1>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              </p>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full animate-float" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-reveal flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-muted-foreground" />
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground glow-primary'
                        : 'glass-subtle glow-hover'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="scroll-reveal glass rounded-2xl overflow-hidden glow-hover group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="glass-subtle p-2 rounded-full glow-hover"
                        aria-label="View live project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="glass-subtle p-2 rounded-full glow-hover"
                        aria-label="View source code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                
                
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No projects found</p>
              <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </Layout>
  );
};

export default Projects;