import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Uber',
      role: 'Software Engineering Fellow',
      period: 'Mar 2025- Aug 2025',
      location: 'Remote',
      description: 'Participated in Uber\'s prestigious engineering fellowship program and received close mentorship from Senior Engineers.',
      skills: ['Data Structures & Algorithms', 'Software Engineering', 'Mentorship'],
      type: 'Industry'
    },
    {
      company: 'Caltech',
      role: 'Software Development Intern',
      period: 'June 2025 - August 2025',
      location: 'Pasadena, CA',
      description: 'Developing machine learning models and AI applications, focusing on recommendation systems and data-driven solutions for real-world problems.',
      skills: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
      type: 'Research'
    },
    {
      company: 'Break Through Tech AI',
      role: 'AI/ML Intern',
      period: 'May 2024 - May 2025',
      location: 'UCLA',
      description: 'Developing machine learning models and AI applications, focusing on recommendation systems and data-driven solutions for real-world problems.',
      skills: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
      type: 'Research'
    },
    {
      company: 'Caltech',
      role: 'Visiting Undergraduate Researcher',
      period: 'Jan 2024 - May 2025',
      location: 'Pasadena, CA',
      description: 'Worked on Binary Star Classification Model under PI Professor Gregg Hallinan and advisor/mentor Dr. Rocio Kiman.',
      skills: ['Research', 'Python', 'Scikit-learn', 'Machine Learning'],
      type: 'Research'
    },
    {
      company: 'Pasadena City College',
      role: 'Math & CS Tutor @ MESA Program',
      period: 'Aug 2022 - May 2025',
      location: 'Pasadena, CA',
      description: 'Tutored mathematics and computer science concepts to first-gen, low-income students, developing curriculum materials and providing one-on-one mentoring.',
      skills: ['Tutoring', 'Mentoring', 'Communication', 'Problem Solving'],
      type: 'Education'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Industry': return 'bg-primary/20 text-primary';
      case 'Research': return 'bg-accent/20 text-accent';
      case 'Education': return 'bg-secondary/20 text-secondary-foreground';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey to become the first Software Engineer in my family.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative lg:grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <Card className={`glass-strong p-8 hover:bg-accent/5 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:justify-self-end' : 'lg:col-start-2'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className={`mb-2 ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-gradient mb-1">{exp.role}</h3>
                      <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                </div>

                {/* Experience number */}
                <div className={`hidden lg:block text-8xl font-bold text-primary/10 ${
                  index % 2 === 0 ? 'text-right lg:col-start-2' : 'text-left'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="glass-strong p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing new opportunities and innovative projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Let's Connect
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;