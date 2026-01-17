import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle?: ReactNode;
  accentColor: string;
  children: ReactNode;
  className?: string;
}

const Section = ({
  id,
  sectionNumber,
  title,
  subtitle,
  accentColor,
  children,
  className = '',
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen w-full px-6 py-20 md:px-12 lg:px-24 flex flex-col justify-center scroll-snap-start ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Section Number */}
        <div
          className="section-number mb-4"
          style={{ color: accentColor }}
        >
          {sectionNumber}
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ color: accentColor }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-lg md:text-xl mb-12"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.8,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Content */}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
};

export default Section;
