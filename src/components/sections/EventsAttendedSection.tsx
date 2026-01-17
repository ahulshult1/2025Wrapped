import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const EventsAttendedSection = () => {
  const events = useMemo(
    () => [
      {
        id: 'dancing-with-stars',
        name: 'Dancing with the Stars',
        date: 'NOV 25 ',
        caption: 'Glittery outfits, questionable moves, zero shame.',
        memory: 'We cheered so loud they probably heard us on stage.',
        sticker: '✨',
        doodle: '💃',
        accent: '#FF6B6B',
        photo: '/photos/events/dancing with the stars.jpeg',
        entryX: -60,
        offsetX: -10,
        offsetY: 0,
        rotate: -2,
      },
      {
        id: 'game-night',
        name: 'Game Night',
        date: 'Multiple!',
        caption: 'Competitive chaos, snack mountain, no mercy.',
        memory: 'We laughed until we cried and argued over rules.',
        sticker: '🎮',
        doodle: '🎲',
        accent: '#FF4D96',
        photo: '/photos/events/game night.jpg',
        entryX: 60,
        offsetX: 8,
        offsetY: 12,
        rotate: 2,
      },
      {
        id: 'random-fun',
        name: 'Random Fun',
        date: 'Random Day',
        caption: 'No plan, all vibes, best kind of day.',
        memory: 'Sometimes the best memories are totally unplanned.',
        sticker: '🎉',
        doodle: '🎊',
        accent: '#FF9F1C',
        photo: '/photos/events/random fun.jpg',
        entryX: -60,
        offsetX: -4,
        offsetY: -10,
        rotate: 1,
      },
      {
        id: 'taco-tuesday',
        name: 'Taco Tuesday',
        date: 'Dont Remember',
        caption: 'Too many tacos, zero regrets, pure happiness.',
        memory: 'We made it a feast and called ourselves geniuses.',
        sticker: '🌮',
        doodle: '🎏',
        accent: '#FF7A00',
        photo: '/photos/events/taco tuesday.jpg',
        entryX: 60,
        offsetX: 12,
        offsetY: -6,
        rotate: -1,
      },
      {
        id: 'secret-santa',
        name: 'Secret Santa',
        date: 'DEC 18',
        caption: 'Gift wrapping fail, laughs on point, nailed it.',
        memory: 'We guessed wrong every time and loved every second.',
        sticker: '🎁',
        doodle: '🎅',
        accent: '#FF4D96',
        photo: '/photos/events/secret santa.heic',
        entryX: -60,
        offsetX: -8,
        offsetY: 8,
        rotate: 2,
      },
      {
        id: 'nyc',
        name: 'NYC Adventure',
        date: 'DEC 05',
        caption: 'City lights, late nights, best crew ever.',
        memory: 'We got lost on purpose and found the best spot.',
        sticker: '🗽',
        doodle: '🏙️',
        accent: '#FFD93D',
        photo: '/photos/events/NYC.heic',
        entryX: 60,
        offsetX: 10,
        offsetY: -8,
        rotate: -2,
      },
      {
        id: 'coffee-times',
        name: 'Coffee Times',
        date: 'Occasionally ... ',
        caption: 'Lattes, life updates, endless refills.',
        memory: 'We solved the world over way too much caffeine.',
        sticker: '☕',
        doodle: '💬',
        accent: '#FF9F1C',
        photo: '/photos/events/coffee.heic',
        entryX: -60,
        offsetX: -6,
        offsetY: 4,
        rotate: 1,
      },
      {
        id: 'birthday',
        name: 'Birthday Celebration',
        date: 'DEC 13',
        caption: 'Cake face, party mode, year older and wiser.',
        memory: 'We sang off-key and made the best wishes.',
        sticker: '🎂',
        doodle: '🎈',
        accent: '#FF6B6B',
        photo: '/photos/events/birthday.heic',
        entryX: 60,
        offsetX: 8,
        offsetY: -4,
        rotate: -1,
      },
      {
        id: 'taskmaster',
        name: 'Taskmaster Challenge',
        date: 'DEC 13',
        caption: 'Ridiculous tasks, competitive energy, pure chaos.',
        memory: 'We took it way too seriously and loved it.',
        sticker: '🏆',
        doodle: '📋',
        accent: '#6BCB77',
        photo: '/photos/events/task master.heic',
        entryX: -60,
        offsetX: -10,
        offsetY: -6,
        rotate: 3,
      },
    ],
    [],
  );

  const confettiPieces = useMemo(() => {
    const colors = ['#FF6B6B', '#FFD93D', '#FF9F1C', '#FF4D96', '#6BCB77'];

    return Array.from({ length: 36 }, (_, index) => {
      const size = 6 + (index % 5) * 2 + Math.round(Math.random() * 4);
      const shape = index % 3;

      return {
        id: `confetti-${index}`,
        left: `${Math.random() * 100}%`,
        size,
        delay: Math.random() * 0.6,
        duration: 2.6 + Math.random() * 1.6,
        color: colors[index % colors.length],
        rotate: Math.random() * 180 - 90,
        shape,
      };
    });
  }, []);

  const burstPieces = useMemo(() => {
    const colors = ['#FF6B6B', '#FFD93D', '#FF9F1C', '#FF4D96'];

    return Array.from({ length: 14 }, (_, index) => ({
      id: `burst-${index}`,
      left: `${40 + Math.random() * 20}%`,
      size: 6 + Math.round(Math.random() * 6),
      delay: Math.random() * 0.2,
      duration: 0.9 + Math.random() * 0.6,
      color: colors[index % colors.length],
      rotate: Math.random() * 180 - 90,
    }));
  }, []);

  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>(
    {},
  );
  const [seenCards, setSeenCards] = useState<Record<string, boolean>>({});

  const totalScore = events.length;
  const currentScore = Object.keys(seenCards).length;
  const progress = Math.round((currentScore / totalScore) * 100);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const markSeen = (id: string) => {
    setSeenCards((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  return (
    <Section
      id="events-attended"
      sectionNumber="06"
      title="I Showed Up! 🎉"
      subtitle={
        <span className="font-semibold text-[#2b1515]">
          See! I'm not THAT bad at friendships
        </span>
      }
      accentColor="#FF6B6B"
      className="relative overflow-hidden bg-[#fff5e6] text-[#2b1515]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(255,107,107,0.35), transparent 45%), radial-gradient(circle at 90% 10%, rgba(255,217,61,0.35), transparent 45%), radial-gradient(circle at 50% 90%, rgba(255,77,150,0.3), transparent 50%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,107,107,0.4) 0.6px, transparent 0.6px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-3"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #FF6B6B, #FFD93D, #FF4D96, #FF9F1C, #FF6B6B)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #FF4D96, #FF9F1C, #FFD93D, #FF6B6B, #FF4D96)',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {confettiPieces.map((piece, index) => (
          <motion.span
            key={piece.id}
            className={`absolute top-0 ${index % 2 === 0 ? '' : 'hidden sm:block'}`}
            style={{
              left: piece.left,
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              borderRadius: piece.shape === 1 ? '999px' : '2px',
              clipPath:
                piece.shape === 2
                  ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                  : undefined,
              rotate: piece.rotate,
            }}
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 520, opacity: 1 }}
            transition={{ duration: piece.duration, delay: piece.delay }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        {burstPieces.map((piece) => (
          <motion.span
            key={piece.id}
            className="absolute bottom-0"
            style={{
              left: piece.left,
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              borderRadius: '2px',
              rotate: piece.rotate,
            }}
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -160, opacity: 1 }}
            transition={{ duration: piece.duration, delay: piece.delay }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <motion.div
              className="absolute -top-10 left-0 right-0 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.35em] text-[#FF4D96]"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={`banner-${index}`}>
                    Streamers on. Volume up. Friendships secured.
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <div className="mt-8 flex flex-col gap-4 text-[#2b1515]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF4D96]">
                  🎉 *POP*
                </span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#FF6B6B]">
                  👏 Crowd goes wild
                </span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#FF9F1C]">
                  🎊 Yay!
                </span>
              </div>
              <p className="text-sm text-[#4a2a2a]">
                Redemption arc activated. This is my victory lap.
              </p>
            </div>

            <div className="absolute right-0 top-0 hidden w-56 flex-col gap-2 rounded-2xl bg-white/70 p-4 shadow-lg shadow-[#FF6B6B]/20 backdrop-blur md:flex">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF4D96]">
                Friendship Score
              </div>
              <div className="flex items-center justify-between text-lg font-bold text-[#2b1515]">
                <span>
                  {currentScore}/{totalScore}
                </span>
                <span className="text-sm text-[#FF6B6B]">{progress}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#FFE3D1]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#FF4D96]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative"
                initial={{ opacity: 0, x: event.entryX, y: 20 }}
                whileInView={{
                  opacity: 1,
                  x: event.offsetX,
                  y: event.offsetY,
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                onViewportEnter={() => markSeen(event.id)}
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -6, 0] }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{
                    duration: 4 + index * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFlip(event.id)}
                    className="group block w-full text-left"
                    style={{ perspective: '1200px' }}
                  >
                    <div
                      className="relative min-h-[340px] rounded-3xl shadow-xl transition-transform duration-700"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: flippedCards[event.id]
                          ? 'rotateY(180deg)'
                          : 'rotateY(0deg)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-3xl border-4 bg-white p-6 shadow-2xl"
                        style={{
                          borderColor: event.accent,
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        <div
                          className="absolute -top-4 left-6 h-8 w-28 rounded-full"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(90deg, #FFD93D 0px, #FFD93D 12px, #FF6B6B 12px, #FF6B6B 24px)',
                          }}
                        />
                        <div className="absolute -right-4 top-6 text-3xl">
                          {event.doodle}
                        </div>
                        <div className="flex items-start justify-between">
                          <h3 className="font-montserrat text-xl font-bold text-[#2b1515]">
                            {event.name}
                          </h3>
                          <span className="text-2xl">{event.sticker}</span>
                        </div>
                        <motion.span
                          className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-dashed px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#FF4D96]"
                          initial={{ scale: 0.7, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          ✓ ATTENDED · {event.date}
                        </motion.span>
                        <div className="mt-4 h-36 w-full overflow-hidden rounded-2xl border-2 border-white/70 shadow-inner">
                          <img
                            src={event.photo}
                            alt={event.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mt-4 font-caveat text-xl text-[#4a2a2a]">
                          {event.caption}
                        </p>
                        <div className="absolute -bottom-5 left-6 rounded-full bg-[#FFD93D] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#2b1515] shadow-md">
                          BEST TIME!
                        </div>
                        <div className="pointer-events-none absolute -top-6 right-8 opacity-0 transition-all duration-200 group-hover:opacity-100">
                          <div className="flex items-center gap-2 text-lg">
                            <span>✨</span>
                            <span>🎊</span>
                            <span>✨</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-3xl border-4 bg-[#fff0f6] p-6 text-[#2b1515]"
                        style={{
                          borderColor: event.accent,
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF4D96]">
                          Memory Replay
                        </p>
                        <p className="mt-4 font-caveat text-2xl">
                          “{event.memory}”
                        </p>
                        <p className="mt-6 text-sm text-[#4a2a2a]">
                          Friendship points earned: <strong>+10</strong>
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF6B6B]">
                          Actually Showed Up Award
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-4">
            {[
              'Redemption Arc Complete',
              'Friend of the Year?',
              'Actually Showed Up Award',
            ].map((badge) => (
              <div
                key={badge}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4D96] shadow-lg shadow-[#FF6B6B]/20"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventsAttendedSection;
