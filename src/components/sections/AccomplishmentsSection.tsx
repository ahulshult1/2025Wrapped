import Section from '../Section';
import { motion } from 'framer-motion';

interface MilestoneProps {
  title: string;
  date: string;
  icon: string;
  index: number;
  style?: 'default' | 'news' | 'birthday' | 'adventure' | 'award';
  footnote?: string;
}

const Milestone = ({ title, date, icon, index, style = 'default', footnote }: MilestoneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Connecting line (except for first item) */}
      {index > 0 && (
        <div
          className="absolute left-1/2 -top-8 w-0.5 h-8 -translate-x-1/2"
          style={{ backgroundColor: 'var(--color-accomplishments)', opacity: 0.3 }}
        />
      )}

      {/* Milestone card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`
          max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden
          ${style === 'news' ? 'border-4 border-dashed' : ''}
          ${style === 'award' ? 'border-4 border-double' : ''}
          ${style === 'birthday' ? 'border-4 border-double' : ''}
          ${style === 'adventure' ? 'border-4' : ''}
        `}
        style={{
          borderColor: style !== 'default' ? 'var(--color-accomplishments)' : undefined
        }}
      >
        {/* Breaking News Banner */}
        {style === 'news' && (
          <div
            className="w-full py-2 px-6 text-center"
            style={{ backgroundColor: 'var(--color-accomplishments)' }}
          >
            <span
              className="text-sm font-bold uppercase tracking-widest text-white"
              style={{ fontFamily: 'var(--font-family-montserrat)' }}
            >
              🗞️ Breaking News
            </span>
          </div>
        )}

        {/* Awards ribbon */}
        {style === 'award' && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg"
            style={{ backgroundColor: 'var(--color-accomplishments)' }}
          >
            🏆 Award Spotlight
          </div>
        )}

        {/* Birthday decorations */}
        {style === 'birthday' && (
          <>
            <div className="absolute top-2 left-2 text-3xl">🎉</div>
            <div className="absolute top-2 right-2 text-3xl">🎂</div>
            <div className="absolute bottom-2 left-2 text-3xl">✨</div>
            <div className="absolute bottom-2 right-2 text-3xl">🎈</div>
          </>
        )}

        {/* Adventure boot */}
        {style === 'adventure' && (
          <div className="absolute top-4 left-4 text-4xl opacity-20">🥾</div>
        )}

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left side - Icon and date */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
              {/* Icon badge */}
              <div
                className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-4xl"
                style={{ backgroundColor: 'var(--color-accomplishments)' }}
              >
                {icon}
              </div>

              {/* Date */}
              <div
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: 'var(--color-accomplishments)',
                  color: 'white',
                  fontFamily: 'var(--font-family-montserrat)'
                }}
              >
                {date}
              </div>
              {style === 'news' && (
                <div
                  className="px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em]"
                  style={{
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    color: 'var(--color-accomplishments)',
                    fontFamily: 'var(--font-family-montserrat)'
                  }}
                >
                  LIVE UPDATE
                </div>
              )}
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              {/* Title */}
              <h3
                className={`font-bold mb-4 ${
                  style === 'news' ? 'text-3xl md:text-4xl uppercase' : 'text-3xl md:text-5xl'
                }`}
                style={{
                  fontFamily: style === 'news' ? 'var(--font-family-montserrat)' : 'var(--font-family-playfair)',
                  color: 'var(--color-accomplishments)',
                  lineHeight: 1.2
                }}
              >
                {title}
              </h3>

              {/* Decorative line for news */}
              {style === 'news' && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-accomplishments)', opacity: 0.3 }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accomplishments)' }} />
                  <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-accomplishments)', opacity: 0.3 }} />
                </div>
              )}

              {/* Photo placeholder */}
              <div
                className="w-full aspect-video rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.25) 100%)'
                }}
              >
                <p
                  className="handwritten text-2xl"
                  style={{ color: 'var(--color-accomplishments)', opacity: 0.4 }}
                >
                  Headline photo goes here
                </p>
              </div>

              {/* Caption space for news items */}
              {style === 'news' && (
                <p
                  className="text-sm italic"
                  style={{
                    fontFamily: 'var(--font-family-inter)',
                    color: 'var(--color-warm-brown)',
                    opacity: 0.7
                  }}
                >
                  Caption: Breaking details to remember...
                </p>
              )}

              {/* Footnote */}
              {footnote && (
                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-accomplishments)', opacity: 0.2 }}>
                  <p
                    className="handwritten text-xl"
                    style={{ color: 'var(--color-accomplishments)', opacity: 0.7 }}
                  >
                    {footnote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AccomplishmentsSection = () => {
  const milestones = [
    {
      title: 'Moved in with Jacob',
      date: 'February 2025',
      icon: '🏡',
      style: 'news' as const,
      footnote: 'Home base upgraded. Cohabitation: complete.'
    },
    {
      title: 'Got a Promotion',
      date: 'March 2025',
      icon: '📈',
      style: 'award' as const,
      footnote: 'Recognized for the grind. Trophy vibes.'
    },
    {
      title: 'Won First Volleyball Tournament (AA Coed)',
      date: 'March 2025',
      icon: '🏐',
      style: 'award' as const,
      footnote: 'First tournament, first win. Team Jacob + me.'
    },
    {
      title: 'Quit My Job',
      date: 'June 2025',
      icon: '📝',
      style: 'news' as const,
      footnote: 'Plot twist: the best promotion was the exit door.'
    },
    {
      title: 'Hiked Machu Picchu',
      date: 'June 2025',
      icon: '⛰️',
      style: 'award' as const,
      footnote: 'New World Wonder: officially conquered.'
    },
    {
      title: 'Started New Job',
      date: 'July 2025',
      icon: '💼',
      style: 'news' as const,
      footnote: 'New desk, new team, new routine.'
    },
    {
      title: 'Broke My 5K PR',
      date: 'November 2025',
      icon: '🏃‍♀️',
      style: 'award' as const,
      footnote: 'Personal record and a victory lap.'
    },
    {
      title: 'Turned 30',
      date: 'December 2025',
      icon: '🎂',
      style: 'birthday' as const,
      footnote: 'Thirty, flirty, and headline-worthy.'
    },
  ];

  return (
    <Section
      id="accomplishments"
      sectionNumber="02"
      title="Breaking News: 2025 Wins"
      subtitle="Awards, headlines, and a few mic-drop moments"
      accentColor="#D4AF37"
      className="!min-h-0 py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Newspaper-style header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 border-t-4 border-b-4 py-8"
          style={{ borderColor: 'var(--color-accomplishments)' }}
        >
          <div
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.6
            }}
          >
            The Scrapbook Chronicle • Special Edition
          </div>
          <div
            className="inline-block px-12 py-6 rounded-lg shadow-xl mb-3"
            style={{ backgroundColor: 'var(--color-accomplishments)' }}
          >
            <span
              className="text-6xl md:text-7xl font-bold text-white"
              style={{ fontFamily: 'var(--font-family-playfair)' }}
            >
              Headlines + Honors
            </span>
          </div>
          <div
            className="text-sm uppercase tracking-[0.2em]"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.6
            }}
          >
            Awards Night Meets Breaking News
          </div>
        </motion.div>

        {/* Vertical timeline of milestones */}
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <Milestone
              key={index}
              {...milestone}
              index={index}
            />
          ))}
        </div>

        {/* Editorial footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          {/* Decorative divider */}
          <div className="flex items-center gap-6 max-w-3xl mx-auto mb-10">
            <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-accomplishments)', opacity: 0.3 }} />
            <div className="text-3xl">✦</div>
            <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-accomplishments)', opacity: 0.3 }} />
          </div>

          {/* Achievement badge */}
          <div
            className="inline-block px-10 py-6 rounded-lg border-4 border-dashed shadow-xl mb-8"
            style={{
              backgroundColor: 'white',
              borderColor: 'var(--color-accomplishments)'
            }}
          >
            <div
              className="text-sm uppercase tracking-wider mb-3"
              style={{
                fontFamily: 'var(--font-family-montserrat)',
                color: 'var(--color-accomplishments)'
              }}
            >
              🏆 Achievement Unlocked
            </div>
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: 'var(--font-family-playfair)',
                color: 'var(--color-accomplishments)'
              }}
            >
              Year 30: Complete
            </div>
          </div>

          {/* Handwritten editorial note */}
          <p
            className="handwritten text-3xl md:text-4xl max-w-3xl mx-auto mb-6"
            style={{ color: 'var(--color-accomplishments)', opacity: 0.8 }}
          >
            What a year of bold moves, big celebrations & bigger mountains! ✨
          </p>

          {/* Newspaper byline */}
          <div
            className="text-xs uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-family-montserrat)',
              color: 'var(--color-warm-brown)',
              opacity: 0.5
            }}
          >
            — The Scrapbook Chronicle, Vol. 30, No. 1 —
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AccomplishmentsSection;
