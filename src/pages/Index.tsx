import React from 'react';
import GlassNavbar from '@/components/GlassNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <title>Khant Nyi Hlaing - Software Engineer & CS Student</title>
        <meta name="description" content="UCLA Computer Science student and Software Engineer with experience at Uber, Caltech, and Break Through Tech AI. Passionate about solving real-world problems through technology." />
      </header>
      
      <GlassNavbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
