import Section from '../Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PostcardProps {
  location: string;
  country?: string;
  isHighlight?: boolean;
  rotation: number;
  delay: number;
  badge?: string;
}

const Postcard = ({ location, country, isHighlight = false, rotation, delay, badge }: PostcardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={inView ? { opacity: 1, y: 0, rotate: rotation } : { opacity: 0, y: 50, rotate: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`relative group ${isHighlight ? 'md:col-span-2 lg:col-span-3' : ''}`}
      style={{ transformOrigin: 'center center' }}
    >
      <motion.div
        whileHover={{
          y: -8,
          rotate: 0,
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        }}
        transition={{ duration: 0.3 }}
        className={`bg-white p-2 shadow-lg cursor-pointer relative ${
          isHighlight ? 'pb-16' : 'pb-12'
        }`}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* Postcard stamp decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-dashed opacity-30 rounded-sm"
          style={{ borderColor: 'var(--color-travel)' }}
        />

        {/* Badge for highlight */}
        {badge && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={inView ? { scale: 1, rotate: -12 } : { scale: 0, rotate: -45 }}
            transition={{ delay: delay + 0.5, duration: 0.5, type: 'spring' }}
            className="absolute -top-3 -right-3 z-10"
          >
            <div
              className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
              style={{
                backgroundColor: 'var(--color-accomplishments)',
                fontFamily: 'var(--font-family-montserrat)',
                transform: 'rotate(-12deg)'
              }}
            >
              {badge}
            </div>
          </motion.div>
        )}

        {/* Image placeholder */}
        <div
          className={`w-full bg-gradient-to-br from-travel/20 to-travel/40 flex items-center justify-center ${
            isHighlight ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <p
            className="handwritten text-2xl text-center px-4"
            style={{ color: 'var(--color-travel)', opacity: 0.5 }}
          >
            Photo from<br />{location}
          </p>
        </div>

        {/* Postcard details */}
        <div className="absolute bottom-2 left-2 right-2 bg-white py-2 px-3">
          <div className="flex items-center justify-between">
            <div>
              <h3
                className="font-bold text-lg"
                style={{
                  fontFamily: 'var(--font-family-playfair)',
                  color: 'var(--color-travel)'
                }}
              >
                {location}
              </h3>
              {country && (
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-family-montserrat)',
                    color: 'var(--color-warm-brown)',
                    opacity: 0.7
                  }}
                >
                  {country}
                </p>
              )}
            </div>

            {/* Decorative postage lines */}
            <div className="flex flex-col gap-1">
              <div className="w-12 h-px bg-travel/30" />
              <div className="w-12 h-px bg-travel/30" />
              <div className="w-12 h-px bg-travel/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TravelSection = () => {
  const destinations = [
    { location: 'Machu Picchu', country: 'Peru', isHighlight: true, rotation: 0, badge: 'New World Wonder! ✨' },
    { location: 'Michigan', rotation: -2 },
    { location: 'New York', rotation: 3 },
    { location: 'Oregon', rotation: -3 },
    { location: 'Utah', rotation: 2 },
    { location: 'Gatlinburg', country: 'Tennessee', rotation: -2 },
    { location: 'Washington DC', rotation: 3 },
    { location: 'New Orleans', country: 'Louisiana', rotation: -3 },
  ];

  return (
    <Section
      id="travel"
      sectionNumber="01"
      title="Miles & Memories"
      subtitle="Where 2025 took me"
      accentColor="#6B9AC4"
    >
      {/* Decorative dotted travel path - desktop only */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none hidden lg:block"
        style={{ width: '100%', height: '100%' }}
      >
        <motion.path
          d="M 100 100 Q 300 150, 500 100 T 900 150 Q 1100 100, 1300 200"
          stroke="var(--color-travel)"
          strokeWidth="2"
          strokeDasharray="5,10"
          fill="none"
          opacity="0.3"
        />
      </motion.svg>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {destinations.map((dest, index) => (
          <Postcard
            key={dest.location}
            location={dest.location}
            country={dest.country}
            isHighlight={dest.isHighlight}
            rotation={dest.rotation}
            delay={index * 0.1}
            badge={dest.badge}
          />
        ))}
      </div>

      {/* Travel stats footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap justify-center gap-8 text-center"
      >
        <div className="flex flex-col items-center">
          <div
            className="text-4xl font-bold mb-1"
            style={{
              fontFamily: 'var(--font-family-playfair)',
              color: 'var(--color-travel)'
            }}
          >
            8
          </div>
          <div
            className="text-sm uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.7
            }}
          >
            Destinations
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="text-4xl font-bold mb-1"
            style={{
              fontFamily: 'var(--font-family-playfair)',
              color: 'var(--color-travel)'
            }}
          >
            6
          </div>
          <div
            className="text-sm uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.7
            }}
          >
            States
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="text-4xl font-bold mb-1"
            style={{
              fontFamily: 'var(--font-family-playfair)',
              color: 'var(--color-travel)'
            }}
          >
            1
          </div>
          <div
            className="text-sm uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.7
            }}
          >
            Wonder of the World
          </div>
        </div>
      </motion.div>

      {/* Handwritten note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p
          className="handwritten text-2xl md:text-3xl"
          style={{ color: 'var(--color-travel)' }}
        >
          From ancient ruins to city lights, what a year of wandering! ✈️
        </p>
      </motion.div>
    </Section>
  );
};

export default TravelSection;
