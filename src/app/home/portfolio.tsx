import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
//import { useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

export const Portfolio = () => {
  //const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  //const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const viewportHeight = window.innerHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

          const visibilityRatio = visibleHeight / rect.height;

          if (visibilityRatio >= 0.5) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className='fixed inset-0 z-0'>
        <div className='from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br via-transparent' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' />
      </div>
      <main className='relative z-10'>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};
