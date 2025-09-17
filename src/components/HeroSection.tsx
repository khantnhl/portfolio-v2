import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Youtube, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterText = [
    "Software Engineer",
    "CS Student at UCLA", 
    "AI/ML Enthusiast"  
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hi, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                Khant
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                <TypewriterEffect texts={typewriterText} />
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Computer Science student at UCLA. 
              <br></br>Prev @ Uber fellow, Caltech, Break Through Tech AI. 
              <br></br>Passionate about software systems and building high-impact tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 animate-glow"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com/khantnhl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/khant-hlaing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@lordnuu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://drive.google.com/file/d/1VmDylApE9CdRKNbLYkPYXjegKKiLtrlU/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`lg:justify-self-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-6" />
              <img
                src={professionalHeadshot}
                alt="Khant Hlaing - Software Engineer"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl glass-strong"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Typewriter effect component
const TypewriterEffect = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default HeroSection;