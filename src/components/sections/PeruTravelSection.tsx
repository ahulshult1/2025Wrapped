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
  photo?: string;
  caption?: string;
}

const Postcard = ({ location, country, isHighlight = false, rotation, delay, badge, photo, caption }: PostcardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
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

        {/* Image */}
        <div
          className={`w-full overflow-hidden ${
            isHighlight ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          {photo ? (
            <img
              src={photo}
              alt={location}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-travel/20 to-travel/40 flex items-center justify-center">
              <p
                className="handwritten text-2xl text-center px-4"
                style={{ color: 'var(--color-travel)', opacity: 0.5 }}
              >
                Photo from<br />{location}
              </p>
            </div>
          )}
        </div>

        {/* Postcard details */}
        <div className="absolute bottom-2 left-2 right-2 bg-white py-2 px-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
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
              {caption && (
                <p
                  className="text-xs mt-1 italic"
                  style={{
                    fontFamily: 'var(--font-family-montserrat)',
                    color: 'var(--color-warm-brown)',
                    opacity: 0.6
                  }}
                >
                  {caption}
                </p>
              )}
            </div>

            {/* Decorative postage lines */}
            <div className="flex flex-col gap-1 ml-2">
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

const PeruTravelSection = () => {
  const destinations = [
    {
      location: 'Machu Picchu',
      country: 'Peru',
      isHighlight: true,
      rotation: 0,
      badge: 'Wonder of the World! ✨',
      photo: '/photos/accomplishments/macchu pichu.jpg',
      caption: 'Standing at 7,972 feet, living the dream'
    },
    {
      location: 'Huayna Picchu Summit',
      country: 'Peru',
      rotation: -2,
      photo: '/photos/travel/Huayna Picchu.jpg',
      caption: 'Conquered the steep climb, worth every step'
    },
    {
      location: 'Huayna Picchu Views',
      country: 'Peru',
      rotation: 2,
      photo: '/photos/travel/Huayna Picchu2.jpg',
      caption: 'The view from the top was unreal'
    },
    {
      location: 'Huayna Picchu Peak',
      country: 'Peru',
      rotation: -1,
      photo: '/photos/travel/Huayna picchu3.jpg',
      caption: 'Made it to the peak, feeling on top of the world'
    },
    {
      location: 'Cusco Streets',
      country: 'Peru',
      rotation: 3,
      photo: '/photos/travel/Cusco Peru.jpg',
      caption: 'Ancient Incan capital vibes'
    },
    {
      location: 'Cusco Culture',
      country: 'Peru',
      rotation: -2,
      photo: '/photos/travel/Cusco Peru 2.jpg',
      caption: 'Getting lost in the colorful streets'
    },
    {
      location: 'Beautiful Inca Trail',
      country: 'Peru',
      rotation: -3,
      photo: '/photos/travel/beautifl inca trail.jpg',
      caption: 'Four days of epic hiking and views'
    },
    {
      location: 'Inca Trail Day 3',
      country: 'Peru',
      rotation: 2,
      photo: '/photos/travel/inca trail 3.jpg',
      caption: 'Halfway there, spirits high'
    },
    {
      location: 'Inca Trail Day 4',
      country: 'Peru',
      rotation: -1,
      photo: '/photos/travel/inca trail 4.jpg',
      caption: 'Almost at Machu Picchu!'
    },
    {
      location: 'Inca Trail Vista',
      country: 'Peru',
      rotation: 3,
      photo: '/photos/travel/incan trail 5.jpg',
      caption: 'Mountain views for days'
    },
    {
      location: 'Inca Trail Trek',
      country: 'Peru',
      rotation: -2,
      photo: '/photos/travel/inca trail 7.jpg',
      caption: 'One foot in front of the other'
    },
    {
      location: 'Inca Trail Path',
      country: 'Peru',
      rotation: 1,
      photo: '/photos/travel/inca trail 8.jpg',
      caption: 'Following ancient footsteps'
    },
    {
      location: 'Inca Trail Journey',
      country: 'Peru',
      rotation: -3,
      photo: '/photos/travel/inca trail 9.jpg',
      caption: 'Every step was worth it'
    },
    {
      location: 'Inca Trail Final Day',
      country: 'Peru',
      rotation: 2,
      photo: '/photos/travel/inca trail 10.jpg',
      caption: 'The last stretch before the wonder'
    },
    {
      location: 'Trail with Jacob',
      country: 'Peru',
      rotation: 3,
      photo: '/photos/travel/incan trail me and jacob.jpg',
      caption: 'Best hiking buddy on the best trail'
    },
    {
      location: 'Amazon Jungle',
      country: 'Peru',
      rotation: -1,
      photo: '/photos/travel/peru-landscape.jpg',
      caption: 'Deep in the rainforest, wild and wonderful'
    },
    {
      location: 'Peru Adventures',
      country: 'Peru',
      rotation: 2,
      photo: '/photos/travel/peru1.jpg',
      caption: 'Making memories in South America'
    },
    {
      location: 'Peru with Jacob',
      country: 'Peru',
      rotation: -2,
      photo: '/photos/travel/peru_me_jacob.jpeg',
      caption: 'Two weeks of pure adventure'
    },
    {
      location: 'Inca Ruins',
      country: 'Peru',
      rotation: 1,
      photo: '/photos/travel/inca ruins.jpg',
      caption: 'History everywhere you look'
    },
    {
      location: 'Ancient Incan Site',
      country: 'Peru',
      rotation: -3,
      photo: '/photos/travel/incan ruins.jpg',
      caption: 'Walking through centuries of history'
    },
    {
      location: 'Machu Picchu Overlook',
      country: 'Peru',
      rotation: 2,
      photo: '/photos/travel/machu-picchu-main.jpg',
      caption: 'The iconic view everyone dreams of'
    },
    {
      location: 'Machu Picchu Morning',
      country: 'Peru',
      rotation: -1,
      photo: '/photos/travel/machu-picchu-morning.jpg',
      caption: 'Sunrise over the ruins, pure magic'
    },
    {
      location: 'Machu Picchu Ruins',
      country: 'Peru',
      rotation: 3,
      photo: '/photos/travel/machu-picchu-ruins.jpg',
      caption: 'Exploring every corner of this wonder'
    },
  ];

  return (
    <Section
      id="peru-travel"
      sectionNumber="01"
      title="Peru Adventures"
      subtitle="Two weeks in the land of the Incas"
      accentColor="#6B9AC4"
      className="relative justify-start"
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
            photo={dest.photo}
            caption={dest.caption}
          />
        ))}
      </div>

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
          From ancient ruins to mountain peaks, Peru stole my heart! 🇵🇪
        </p>
      </motion.div>
    </Section>
  );
};

export default PeruTravelSection;
