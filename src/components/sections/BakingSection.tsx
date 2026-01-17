import Section from '../Section';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BakingPhoto {
  name: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  rotation: number;
}

const BakingSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const sourdoughJourney = [
    { caption: 'Attempt #1 (RIP) 🪦', emoji: '😅' },
    { caption: 'Getting warmer...', emoji: '🤔' },
    { caption: 'Success! 🎉', emoji: '😊' },
    { caption: "Now I'm unstoppable!", emoji: '🚀' },
  ];

  const bakingPhotos: BakingPhoto[] = [
    { name: 'Sourdough Boule', aspectRatio: 'square', rotation: -2 },
    { name: 'Chocolate Chip Cookies', aspectRatio: 'landscape', rotation: 3 },
    { name: 'Cinnamon Rolls', aspectRatio: 'portrait', rotation: -3 },
    { name: 'Birthday Cake', aspectRatio: 'square', rotation: 2 },
    { name: 'Focaccia', aspectRatio: 'landscape', rotation: -2 },
    { name: 'Banana Bread', aspectRatio: 'portrait', rotation: 3 },
    { name: 'Croissants', aspectRatio: 'square', rotation: -3 },
    { name: 'Apple Pie', aspectRatio: 'landscape', rotation: 2 },
    { name: 'Bagels', aspectRatio: 'portrait', rotation: -2 },
    { name: 'Brownies', aspectRatio: 'square', rotation: 3 },
    { name: 'Dinner Rolls', aspectRatio: 'landscape', rotation: -3 },
    { name: 'Blueberry Muffins', aspectRatio: 'portrait', rotation: 2 },
  ];

  const openLightbox = (photoName: string) => {
    setSelectedPhoto(photoName);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <Section
      id="baking"
      sectionNumber="03"
      title="Proof & Rise"
      subtitle="A Baker's Gallery"
      accentColor="#F4A460"
      className="!min-h-0 py-32"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Floating flour particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Header with doodles */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Rolling pin doodle */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-baking)" strokeWidth="2">
              <path d="M8 20 L32 20 M8 18 L8 22 M32 18 L32 22" strokeLinecap="round" />
            </svg>

            <p
              className="handwritten text-2xl md:text-3xl"
              style={{ color: 'var(--color-baking)' }}
            >
              This year I baked {bakingPhotos.length} things and learned to speak sourdough 🍞
            </p>

            {/* Whisk doodle */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-baking)" strokeWidth="2">
              <path d="M20 10 L20 30 M15 25 Q20 30 25 25 M17 22 Q20 26 23 22" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Sourdough Journey Filmstrip */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-black/90 p-6 rounded-lg border-4 border-black relative overflow-hidden"
        >
          {/* Filmstrip perforations */}
          <div className="absolute top-0 left-0 right-0 h-full flex justify-between pointer-events-none">
            <div className="w-4 flex flex-col justify-around py-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-cream rounded-sm" />
              ))}
            </div>
            <div className="w-4 flex flex-col justify-around py-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-cream rounded-sm" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 justify-center">
            <span className="text-2xl">🍞</span>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-family-playfair)' }}
            >
              My Sourdough Journey
            </h3>
            <span className="text-2xl">🍞</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
            {sourdoughJourney.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-3 rounded"
              >
                <div
                  className="aspect-square bg-gradient-to-br from-baking/20 to-baking/40 rounded flex items-center justify-center mb-2"
                >
                  <span className="text-4xl">{step.emoji}</span>
                </div>
                <p
                  className="handwritten text-sm text-center"
                  style={{ color: 'var(--color-baking)' }}
                >
                  {step.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {bakingPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="break-inside-avoid mb-6"
            >
              <motion.div
                whileHover={{
                  rotate: 0,
                  y: -8,
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2)'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-3 pb-12 shadow-lg cursor-pointer group relative"
                style={{ transform: `rotate(${photo.rotation}deg)` }}
                onClick={() => openLightbox(photo.name)}
              >
                {/* Washi tape accent */}
                <div
                  className="absolute -top-2 right-8 w-16 h-6 opacity-70"
                  style={{
                    background: 'repeating-linear-gradient(45deg, var(--color-baking), var(--color-baking) 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)',
                    transform: 'rotate(-10deg)'
                  }}
                />

                {/* Photo */}
                <div
                  className={`w-full rounded flex items-center justify-center ${
                    photo.aspectRatio === 'square' ? 'aspect-square' :
                    photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                    'aspect-[4/3]'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 164, 96, 0.15) 0%, rgba(244, 164, 96, 0.3) 100%)'
                  }}
                >
                  <p
                    className="handwritten text-xl text-center px-4"
                    style={{ color: 'var(--color-baking)', opacity: 0.5 }}
                  >
                    {photo.name}
                  </p>
                </div>

                {/* Caption - fades in on hover */}
                <div className="absolute bottom-3 left-3 right-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p
                    className="handwritten text-lg"
                    style={{ color: 'var(--color-warm-brown)' }}
                  >
                    {photo.name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className="handwritten text-3xl md:text-4xl"
            style={{ color: 'var(--color-baking)' }}
          >
            Made with love, butter & a little bit of chaos 🧈✨
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] bg-white p-8 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image placeholder */}
            <div className="aspect-square max-h-[70vh] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(244, 164, 96, 0.2) 0%, rgba(244, 164, 96, 0.4) 100%)'
              }}
            >
              <p
                className="handwritten text-4xl"
                style={{ color: 'var(--color-baking)' }}
              >
                {selectedPhoto}
              </p>
            </div>

            <p
              className="text-center mt-6 text-xl"
              style={{
                fontFamily: 'var(--font-family-playfair)',
                color: 'var(--color-baking)'
              }}
            >
              {selectedPhoto}
            </p>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
};

export default BakingSection;
