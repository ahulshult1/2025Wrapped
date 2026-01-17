import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 scroll-snap-start relative overflow-hidden"
    >
      {/* Decorative corner doodles */}
      {/* Top Left Corner */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
        className="absolute top-8 left-8 w-20 h-20 md:w-32 md:h-32"
        viewBox="0 0 100 100"
        style={{ stroke: 'var(--color-warm-brown)', strokeWidth: 2, fill: 'none' }}
      >
        <motion.path d="M 10 10 Q 30 30 10 50" />
        <motion.path d="M 10 10 Q 30 20 50 10" />
        <motion.circle cx="15" cy="15" r="3" fill="var(--color-accomplishments)" />
        <motion.circle cx="45" cy="15" r="2" fill="var(--color-travel)" />
        <motion.circle cx="15" cy="45" r="2" fill="var(--color-baking)" />
      </motion.svg>

      {/* Top Right Corner */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 1.7, ease: 'easeInOut' }}
        className="absolute top-8 right-8 w-20 h-20 md:w-32 md:h-32"
        viewBox="0 0 100 100"
        style={{ stroke: 'var(--color-warm-brown)', strokeWidth: 2, fill: 'none' }}
      >
        <motion.path d="M 90 10 Q 70 30 90 50" />
        <motion.path d="M 90 10 Q 70 20 50 10" />
        <motion.path d="M 85 25 L 95 35 M 95 25 L 85 35" strokeWidth="1.5" />
      </motion.svg>

      {/* Bottom Left Polaroid - Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -12 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
        className="absolute bottom-12 left-8 hidden md:block"
      >
        <div className="polaroid w-40 lg:w-48">
          <div
            className="aspect-square rounded flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--color-soft-tan) 0%, rgba(139, 115, 85, 0.2) 100%)'
            }}
          >
            <p className="handwritten text-xl" style={{ color: 'var(--color-warm-brown)', opacity: 0.5 }}>
              Photo of me
            </p>
          </div>
          <div className="polaroid-caption text-sm">
            Ready for 2025! ✨
          </div>
        </div>
      </motion.div>

      {/* Bottom Right Decorative Stars */}
      <motion.svg
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 2.2, ease: 'easeOut' }}
        className="absolute bottom-12 right-8 w-16 h-16 md:w-24 md:h-24 hidden lg:block"
        viewBox="0 0 100 100"
        style={{ fill: 'var(--color-accomplishments)' }}
      >
        <path d="M 50 10 L 55 40 L 85 45 L 60 60 L 70 90 L 50 75 L 30 90 L 40 60 L 15 45 L 45 40 Z" opacity="0.6" />
        <circle cx="20" cy="20" r="3" fill="var(--color-travel)" />
        <circle cx="80" cy="25" r="2" fill="var(--color-baking)" />
      </motion.svg>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10"
      >
        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block mb-8"
        >
          <span
            className="text-sm tracking-[0.3em] uppercase px-6 py-2 rounded-full"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.6,
              backgroundColor: 'var(--color-soft-tan)'
            }}
          >
            Twenty Twenty-Five
          </span>
        </motion.div>

        {/* Main Title - Handwritten Style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight px-4"
          style={{ color: 'var(--color-warm-brown)' }}
        >
          2025: A Year <br />
          <span className="handwritten text-6xl md:text-8xl lg:text-9xl" style={{ color: 'var(--color-warm-brown)' }}>
            in Review
          </span>
        </motion.h1>

        {/* Decorative hand-drawn underline */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
          className="w-64 md:w-96 h-4 mx-auto mb-8"
          viewBox="0 0 400 20"
          style={{ stroke: 'var(--color-warm-brown)', strokeWidth: 3, fill: 'none' }}
        >
          <motion.path d="M 10 10 Q 100 15 200 8 T 390 12" strokeLinecap="round" />
        </motion.svg>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-family-montserrat)', color: 'var(--color-warm-brown)', opacity: 0.7 }}>
            A scrapbook by
          </p>
          <p className="handwritten text-4xl md:text-5xl" style={{ color: 'var(--color-warm-brown)' }}>
            Abigail Hulshult
          </p>
        </motion.div>

        {/* Decorative tape accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="w-32 h-1 mx-auto mb-8 relative"
          style={{ backgroundColor: 'var(--color-baking)', opacity: 0.3 }}
        >
          <div className="absolute inset-0 washi-tape" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span
              className="text-xs tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-family-montserrat)',
                color: 'var(--color-warm-brown)',
                opacity: 0.6
              }}
            >
              Scroll to explore
            </span>

            {/* Animated down arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'var(--color-warm-brown)', opacity: 0.6 }}
            >
              <motion.path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating subtle sparkles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 text-2xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/4 text-xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3.5,
          delay: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 left-1/3 text-lg hidden md:block"
      >
        ✨
      </motion.div>
    </section>
  );
};

export default HeroSection;
