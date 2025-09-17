import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'QuakeMap',
      description: 'An AI-Powered Multimodal Earthquake Assessment Platform for Data-Scarce Regions',
      image: 'src/assets/quakeMap.png',
      technologies: ['React', 'Python', 'RAG', 'LangGraph', 'Gemini API', 'PineCone'],
      githubUrl: 'https://github.com/khantnhl/Quakemap',
      liveUrl: 'https://quakemap-client-376k.onrender.com/',
      featured: true,
      stats: { stars: 3, forks: 1 }
    },
    {
      title: 'JourneyAI',
      description: 'One-click AI trip planner powered by Google Gemini. Creates personalized travel itineraries based on preferences, budget, and time constraints.',
      image: 'src/assets/journeyAI.png',
      technologies: ['React', 'Gemini API', 'Maps API', 'Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/khantnhl/JourneyAI-v1',
      liveUrl: 'https://journey-ai-v1.vercel.app/',
      featured: true,
      stats: { stars: 3, forks: 1 }
    },
    {
      title: 'Live Coding Platform',
      description: 'Multiplayer rooms to compete solving leetcode problems with friends.',
      image: 'src/assets/livecodingplatform.png',
      technologies: ['React', 'Typescript', 'Socket.io', 'Postgresql', 'Tailwind CSS'],
      githubUrl: 'https://github.com/khantnhl/Live-Coding-Platform',
      liveUrl: '',
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My recent works in software development, AI/ML, and system design. 
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="glass-strong overflow-hidden group hover:bg-accent/5 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground mb-2">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gradient group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline" 
                    size="sm"
                    asChild
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm"
                      asChild
                      className="bg-primary hover:bg-primary/90"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Call to action */}
        <div className="text-center">
          <Card className="glass-strong p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
            >
              <a href="https://github.com/khantnhl" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                All Projects
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
