import React from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Database, Brain, Smartphone, MapPin, Heart } from 'lucide-react';

const AboutSection = () => {
  // const skills = [
  //   { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'] },
  //   { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
  //   { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
  //   { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'] },
  //   { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Postman'] },
  // ];

  const roadtripPhotos = [
    { src: "../assets/IMG_2754 2.JPG", alt: "Mountain adventure with friends", location: "Yosemite National Park" },
    { src: "../assets/IMG_1079.jpg", alt: "Sunset moments", location: "La Jolla Cove" },
    { src: "../assets/clubRush.JPG", alt: "City exploration", location: "PI Day Celebration" },
    { src: "../assets/clubActivity.JPG", alt: "Canyon", location: "Coding Workshop" },
  ];

  const interests = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Exploring machine learning and AI applications in real-world solutions'
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a junior Computer Science student at UCLA. I love building high-impact tools for people.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass-strong p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">My Story</h3>
              </div>
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  Hey there! 👋 
                  <br></br>I'm a Computer Science student at UCLA.
                </p>
                <p>
                  I am first-gen student & immigrant, originally from Myanmar (Burma).
                  I speak three languages : Burmese, Jinghpaw (tribal language of minority ethnic group in Northern Myanmar), and English.
                  <br></br>I love dogs, oceans, waves, travelling, making friends, and living life to its fullest.
                </p>
              </div>
            </Card>
          </div>
          {/* Photo Gallery */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Adventures</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {roadtripPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      {photo.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h4>
              <div className="grid gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <interest.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">{interest.title}</h5>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;