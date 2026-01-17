import Section from '../Section';
import { motion } from 'framer-motion';

const accomplishments = [
  {
    title: 'Moved in with Jacob',
    date: 'February 2025',
    dek: 'A new household, a shared keychain, and an upgraded daily routine.',
    photoHint: 'Add photo: moving boxes / first night in',
  },
  {
    title: 'Got a Promotion',
    date: 'March 2025',
    dek: 'A raise, a new title, and a bigger seat at the table.',
    photoHint: 'Add photo: desk glow-up / celebratory coffee',
  },
  {
    title: 'Won First Volleyball Tournament (AA Coed)',
    date: 'March 2025',
    dek: 'First tourney, first win, and a shared podium moment.',
    photoHint: 'Add photo: team photo / medal shot',
  },
  {
    title: 'Quit My Job',
    date: 'June 2025',
    dek: 'A bold exit, a deep breath, and a clear next move.',
    photoHint: 'Add photo: desk goodbye / exit email',
  },
  {
    title: 'Hiked Machu Picchu',
    date: 'June 2025',
    dek: 'A New World Wonder checked off with sore legs and huge views.',
    photoHint: 'Add photo: summit shot / trail moment',
  },
  {
    title: 'Started a New Job',
    date: 'July 2025',
    dek: 'A fresh badge, a new team, and a new routine.',
    photoHint: 'Add photo: welcome sign / laptop glow-up',
  },
  {
    title: 'Broke My 5K PR',
    date: 'November 2025',
    dek: 'A faster time and a stronger finish line photo.',
    photoHint: 'Add photo: race bib / stopwatch screenshot',
  },
  {
    title: 'Turned 30',
    date: 'December 2025',
    dek: 'Thirty arrives with confidence, clarity, and cake.',
    photoHint: 'Add photo: birthday candles / party snap',
  },
];

const AccomplishmentsNewsSection = () => {
  return (
    <Section
      id="accomplishments-news"
      sectionNumber="02B"
      title="The 2025 Times"
      subtitle="Breaking news, but make it personal"
      accentColor="#B91C1C"
      className="relative bg-[#f7f4ef] text-[#1b1b1b]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 border-y-2 border-[#1b1b1b] py-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">
            The 2025 Times • Special Edition • Vol. 30
          </p>
          <h2
            className="mt-3 text-4xl md:text-6xl font-bold"
            style={{ fontFamily: 'var(--font-family-playfair)' }}
          >
            Year in Review: Headline Moments
          </h2>
          <p
            className="mt-2 text-sm uppercase tracking-[0.3em] text-[#B91C1C]"
            style={{ fontFamily: 'var(--font-family-montserrat)' }}
          >
            Breaking News • Lifestyle • Awards
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-b border-[#1b1b1b] pb-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
                Lead Story
              </p>
              <h3
                className="mt-3 text-3xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-family-playfair)' }}
              >
                I Showed Up, I Leveled Up, I Climbed a Wonder
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#3b3b3b]">
                From career pivots to mountain peaks, 2025 delivered a full-page
                spread of growth. The theme: big moves, bigger heart.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 border border-[#1b1b1b] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#1b1b1b]">
                📰 Breaking • Awards Desk
              </div>
            </motion.div>

            <div className="border border-[#1b1b1b] bg-white">
              <div className="flex items-center justify-between border-b border-[#1b1b1b] px-6 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
                  Checklist Edition
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B91C1C]">
                  ✅ Verified Wins
                </span>
              </div>
              <div className="divide-y divide-[#1b1b1b]/20">
                {accomplishments.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid gap-4 px-6 py-5 md:grid-cols-[auto_1fr] md:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1b1b1b] text-sm">
                        ✓
                      </span>
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#B91C1C]">
                        {item.date}
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                      <div>
                        <h4
                          className="text-xl font-semibold"
                          style={{ fontFamily: 'var(--font-family-playfair)' }}
                        >
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-[#4a4a4a]">
                          {item.dek}
                        </p>
                      </div>
                      <div className="rounded-md border border-dashed border-[#1b1b1b]/50 bg-[#f3efe9] px-3 py-4 text-xs uppercase tracking-[0.2em] text-[#6b6b6b]">
                        {item.photoHint}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[#1b1b1b] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
                Awards Desk
              </p>
              <h4
                className="mt-3 text-2xl font-bold"
                style={{ fontFamily: 'var(--font-family-playfair)' }}
              >
                2025 Personal Honors
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#4a4a4a]">
                <li>🏆 Promotion Spotlight</li>
                <li>🏐 AA Coed Volleyball Champs</li>
                <li>🥇 New World Wonder Trek</li>
                <li>🎖️ Fastest 5K Finish</li>
                <li>🏠 Domestic Bliss Citation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-[#1b1b1b] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
                Opinion
              </p>
              <h4
                className="mt-3 text-2xl font-bold"
                style={{ fontFamily: 'var(--font-family-playfair)' }}
              >
                Turning 30: The Plot Twist
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">
                Thirty is not a slowdown. It is a headline-worthy pivot toward
                knowing what matters and showing up for it.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#B91C1C]">
                Editorial Board
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-[#1b1b1b] bg-[#1b1b1b] p-6 text-white"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#f6d6d6]">
                Markets
              </p>
              <h4
                className="mt-3 text-2xl font-bold"
                style={{ fontFamily: 'var(--font-family-playfair)' }}
              >
                Friendship Index: Surging
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#f0f0f0]">
                Attendance rates climbed, celebrations landed, and the outlook is
                bright for next year&apos;s social calendar.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                <span className="h-2 w-12 bg-[#B91C1C]" />
                Bullish
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AccomplishmentsNewsSection;
