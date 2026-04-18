import React, { useState } from 'react';
import { ExternalLink, Code, Eye, Heart, Star, TrendingUp, Award } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured e-commerce platform with AI recommendations and real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    liveLink: '#',
    github: '#',
    featured: true,
    metrics: { sales: '+150%', users: '50K+' }
  },
  {
    title: 'Healthcare App',
    category: 'Mobile App',
    description: 'Patient management system with telemedicine features and AI diagnostics',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    tech: ['React Native', 'Firebase', 'TensorFlow'],
    liveLink: '#',
    github: '#',
    metrics: { patients: '10K+', satisfaction: '98%' }
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Analytics',
    description: 'Real-time business intelligence dashboard with predictive analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    tech: ['Python', 'Django', 'D3.js', 'Pandas'],
    liveLink: '#',
    github: '#',
    featured: true,
    metrics: { insights: '1M+', speed: '+200%' }
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Enterprise cloud migration and optimization reducing costs by 40%',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    liveLink: '#',
    github: '#',
    metrics: { savings: '40%', uptime: '99.99%' }
  },
  {
    title: 'AI Chatbot',
    category: 'AI Integration',
    description: 'Intelligent customer support chatbot handling 80% of queries automatically',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600',
    tech: ['Python', 'OpenAI', 'FastAPI', 'LangChain'],
    liveLink: '#',
    github: '#',
    featured: true,
    metrics: { resolution: '80%', response: '<2s' }
  },
  {
    title: 'Fintech Platform',
    category: 'Software Development',
    description: 'Secure financial management platform with real-time transactions',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    liveLink: '#',
    github: '#',
    metrics: { transactions: '1M+', security: 'ISO 27001' }
  },
];

const categories = ['All', 'Web Development', 'Mobile App', 'Data Analytics', 'Cloud Solutions', 'AI Integration', 'Software Development'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState({});
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const handleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
            <Star className="h-4 w-4 mr-1" />
            Our Best Work
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects that have helped businesses achieve their goals
          </p>
        </div>

        {/* View Toggle and Stats */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-lg p-2 transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`rounded-lg p-2 transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Category Filters with Animation */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Projects Banner */}
        {activeCategory === 'All' && (
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-6 w-6" />
                  <span className="font-semibold">Featured Projects</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Our Most Successful Work</h3>
                <p className="text-white/80">Discover our award-winning solutions that made a difference</p>
              </div>
              <div className="flex space-x-4">
                {featuredProjects.slice(0, 3).map((project, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold">{project.metrics?.sales || project.metrics?.patients || project.metrics?.resolution}</div>
                    <div className="text-sm text-white/80">Impact</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid/List */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-96 h-64 md:h-auto' : 'h-64'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    <a
                      href={project.liveLink}
                      className="transform rounded-full bg-white p-2.5 text-gray-900 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      className="transform rounded-full bg-white p-2.5 text-gray-900 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code size={18} />
                    </a>
                    <button
                      onClick={() => handleLike(idx)}
                      className="transform rounded-full bg-white p-2.5 text-gray-900 transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110"
                    >
                      <Heart className={`h-4 w-4 ${likedProjects[idx] ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                {project.metrics && (
                  <div className="mb-4 flex flex-wrap gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-1 text-sm">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="font-semibold text-gray-900">{value}</span>
                        <span className="text-gray-500">{key}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <button className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/btn">
                  View Project Details
                  <Eye className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length < projects.length && (
          <div className="mt-12 text-center">
            <button className="group inline-flex items-center rounded-full border-2 border-blue-600 bg-transparent px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">
              Load More Projects
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;