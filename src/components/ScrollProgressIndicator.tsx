import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
  color: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Start', color: '#8B7355' },
  { id: 'peru-travel', label: 'Peru', color: '#6B9AC4' },
  { id: 'colorado-utah', label: 'Colorado/Utah', color: '#D97757' },
  { id: 'accomplishments', label: 'Accomplishments', color: '#D4AF37' },
  { id: 'accomplishments-news', label: 'Accomplishments NYT', color: '#B91C1C' },
  { id: 'baking', label: 'Baking', color: '#F4A460' },
  { id: 'events-missed', label: 'Missed', color: '#A0A0A0' },
  { id: 'events-attended', label: 'Attended', color: '#FF6B6B' },
  { id: 'numbers', label: 'Numbers', color: '#2C5F6F' },
  { id: 'lessons', label: 'Lessons', color: '#8B9D83' },
  { id: 'goals', label: 'Goals', color: '#9B7EBD' },
];

const ScrollProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.2, 0.5, 1.0],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${section.label}`}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive ? 'scale-125' : 'scale-100'
              }`}
              style={{
                backgroundColor: isActive ? section.color : 'transparent',
                borderColor: section.color,
              }}
            />

            {/* Tooltip */}
            <span
              className="absolute right-6 bg-warmBrown text-cream text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-montserrat"
            >
              {section.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default ScrollProgressIndicator;
