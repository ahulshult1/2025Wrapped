import Section from '../Section';
import { motion } from 'framer-motion';

interface PostcardProps {
  location: string;
  state?: string;
  isHighlight?: boolean;
  rotation: number;
  delay: number;
  badge?: string;
  photo: string;
  caption?: string;
}

const Postcard = ({ location, state, isHighlight = false, rotation, delay, badge, photo, caption }: PostcardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={`relative group ${isHighlight ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <motion.div
        whileHover={{
          y: -8,
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
        {/* Desert-themed stamp decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-dashed opacity-30 rounded-sm"
          style={{ borderColor: '#D97757' }}
        />

        {/* Badge for highlight */}
        {badge && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: -12 }}
            transition={{ delay: delay + 0.5, duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="absolute -top-3 -right-3 z-10"
          >
            <div
              className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
              style={{
                backgroundColor: '#C65D3B',
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
          <img
            src={photo}
            alt={location}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Postcard details */}
        <div className="absolute bottom-2 left-2 right-2 bg-white py-2 px-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3
                className="font-bold text-lg"
                style={{
                  fontFamily: 'var(--font-family-playfair)',
                  color: '#D97757'
                }}
              >
                {location}
              </h3>
              {state && (
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-family-montserrat)',
                    color: '#8B5A3C',
                    opacity: 0.7
                  }}
                >
                  {state}
                </p>
              )}
              {caption && (
                <p
                  className="text-xs mt-1 italic"
                  style={{
                    fontFamily: 'var(--font-family-montserrat)',
                    color: '#8B5A3C',
                    opacity: 0.6
                  }}
                >
                  {caption}
                </p>
              )}
            </div>

            {/* Decorative postage lines */}
            <div className="flex flex-col gap-1 ml-2">
              <div className="w-12 h-px" style={{ backgroundColor: '#D97757', opacity: 0.3 }} />
              <div className="w-12 h-px" style={{ backgroundColor: '#D97757', opacity: 0.3 }} />
              <div className="w-12 h-px" style={{ backgroundColor: '#D97757', opacity: 0.3 }} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ColoradoUtahSection = () => {
  const destinations = [
    {
      location: 'Colorado Fall Colors',
      state: 'Colorado',
      rotation: -2,
      photo: '/photos/travel/colorado fall.jpg',
      caption: 'Autumn vibes in the Rockies'
    },
    {
      location: 'Colorado Waterfall',
      state: 'Colorado',
      rotation: 2,
      photo: '/photos/travel/colorado waterfall.jpg',
      caption: 'Hidden gems around every corner'
    },
    {
      location: 'Colorado Mountains',
      state: 'Colorado',
      rotation: -1,
      photo: '/photos/travel/colorado.jpg',
      caption: 'Starting the road trip right'
    },
    {
      location: 'Dinosaur National Monument',
      state: 'Colorado/Utah',
      isHighlight: true,
      rotation: 0,
      badge: 'Prehistoric! 🦕',
      photo: '/photos/travel/Dinosaur National Monument.jpg',
      caption: 'Walking among ancient giants'
    },
    {
      location: 'Dino Monument Views',
      state: 'Utah',
      rotation: 3,
      photo: '/photos/travel/dino national monument 2.jpg',
      caption: 'Incredible landscapes and fossils'
    },
    {
      location: 'Utah Desert',
      state: 'Utah',
      rotation: -2,
      photo: '/photos/travel/Utah.jpg',
      caption: 'Red rocks and endless skies'
    },
    {
      location: 'Utah Adventure 1',
      state: 'Utah',
      rotation: 1,
      photo: '/photos/travel/utah 1.jpg',
      caption: 'Exploring the desert landscapes'
    },
    {
      location: 'Utah Adventure 2',
      state: 'Utah',
      rotation: -3,
      photo: '/photos/travel/utah 2.jpg',
      caption: 'Every view was breathtaking'
    },
    {
      location: 'Utah Adventure 3',
      state: 'Utah',
      rotation: 2,
      photo: '/photos/travel/utah 3.jpg',
      caption: 'Park City bound'
    },
    {
      location: 'Utah Adventure 4',
      state: 'Utah',
      rotation: -1,
      photo: '/photos/travel/utah 4.jpg',
      caption: 'Two weeks of pure exploration'
    },
    {
      location: 'Utah Adventure 5',
      state: 'Utah',
      rotation: 3,
      photo: '/photos/travel/utah 5.jpg',
      caption: 'Living the mountain life'
    },
    {
      location: 'Utah Adventure 6',
      state: 'Utah',
      rotation: -2,
      photo: '/photos/travel/utah 6.jpg',
      caption: 'Memories made in the high desert'
    },
  ];

  return (
    <Section
      id="colorado-utah"
      sectionNumber="02"
      title="Colorado to Utah"
      subtitle="Two weeks of desert adventures & mountain views"
      accentColor="#D97757"
      className="relative justify-start"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <Postcard
            key={dest.location}
            location={dest.location}
            state={dest.state}
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
          style={{ color: '#D97757' }}
        >
          From red rocks to dinosaur fossils, what a wild ride! 🏜️
        </p>
      </motion.div>
    </Section>
  );
};

export default ColoradoUtahSection;
