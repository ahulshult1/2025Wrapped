import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const EventsMissedSection = () => {
  const tickets = useMemo(
    () => [
      {
        id: 'wedding',
        name: "Friend's Wedding",
        date: 'APR 06',
        excuse: 'Reason: Already in Peru',
        backstory:
          'I was hiking Machu Picchu. Worth it? Yes. Do I feel bad? Also yes.',
        rotation: -8,
        top: '4%',
        left: '2%',
        z: 3,
      },
      {
        id: 'birthday-1',
        name: 'Birthday Party #1',
        date: 'MAY 02',
        excuse: 'Reason: Working',
        backstory:
          'A last-minute deadline ate my calendar. I sent a meme. It was not enough.',
        rotation: 6,
        top: '8%',
        left: '62%',
        z: 2,
      },
      {
        id: 'game-night',
        name: 'Game Night',
        date: 'MAY 18',
        excuse: 'Reason: Lost in a puzzle',
        backstory:
          'I started a 2-hour board game tutorial and woke up six hours later.',
        rotation: -4,
        top: '28%',
        left: '18%',
        z: 4,
      },
      {
        id: 'dinner-party',
        name: 'Dinner Party',
        date: 'JUN 03',
        excuse: 'Reason: Baking spiral',
        backstory:
          'I committed to sourdough. It needed me. The friendship loaf won.',
        rotation: 9,
        top: '36%',
        left: '70%',
        z: 1,
      },
      {
        id: 'concert',
        name: 'Concert',
        date: 'JUL 11',
        excuse: 'Reason: Thought it was tomorrow',
        backstory:
          'I arrived a full day late with snacks and confidence. The stage was gone.',
        rotation: -12,
        top: '58%',
        left: '8%',
        z: 2,
      },
      {
        id: 'baby-shower',
        name: 'Baby Shower',
        date: 'AUG 19',
        excuse: 'Reason: Flight delayed',
        backstory:
          'Airport floor nap. woke up to a group photo I was not in.',
        rotation: 5,
        top: '52%',
        left: '42%',
        z: 3,
      },
      {
        id: 'housewarming',
        name: 'Housewarming',
        date: 'SEP 01',
        excuse: 'Reason: “Just five more minutes”',
        backstory:
          'Five minutes became five episodes. I sent a plant as an apology.',
        rotation: -6,
        top: '74%',
        left: '68%',
        z: 2,
      },
    ],
    [],
  );

  const [flippedTickets, setFlippedTickets] = useState<Record<string, boolean>>(
    {},
  );

  const toggleFlip = (id: string) => {
    setFlippedTickets((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Section
      id="events-missed"
      sectionNumber="05"
      title="The FOMO Chronicles 😢"
      subtitle={
        <span className="italic text-eventsGray/90">
          Where was I? <span className="font-semibold">probably baking</span>
        </span>
      }
      accentColor="#A0A0A0"
      className="relative overflow-hidden bg-[#f1efef] text-eventsGray"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(160,160,160,0.25) 0%, rgba(160,160,160,0.05) 45%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(160,160,160,0.15) 0px, rgba(160,160,160,0.15) 1px, transparent 1px, transparent 12px)',
        }}
      />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 text-eventsGray/80">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.2em] text-eventsGray/70">
                7 invitations. 7 regrets. 100% guilt.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="handwritten text-lg text-eventsGray/70">
                This pile of regret
              </span>
              <span className="text-eventsGray/60">Friendship score: 3/10</span>
              <span className="text-eventsGray/60">
                They still love me... I think.
              </span>
            </div>
          </div>

          <div className="relative mt-10 min-h-[42rem] md:min-h-[48rem]">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                className="ticket-wrapper md:absolute"
                style={
                  {
                    '--ticket-rotate': `${ticket.rotation}deg`,
                    top: ticket.top,
                    left: ticket.left,
                    zIndex: ticket.z,
                  } as React.CSSProperties
                }
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => toggleFlip(ticket.id)}
                  className={`ticket-stub ${flippedTickets[ticket.id] ? 'is-flipped' : ''}`}
                >
                  <div className="ticket-inner">
                    <div className="ticket-face ticket-front">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-eventsGray/70">
                        <span>Admit One</span>
                        <span>{ticket.date}</span>
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-montserrat text-lg font-semibold text-eventsGray">
                            {ticket.name}
                          </h3>
                          <p className="text-xs text-eventsGray/70">
                            {ticket.excuse}
                          </p>
                        </div>
                        <span className="text-xl">💧</span>
                      </div>
                      <div className="mt-4 h-20 rounded-md bg-eventsGray/20 grayscale" />
                      <div className="ticket-watermark">NOT USED</div>
                      <div className="ticket-barcode mt-4 h-6 w-full" />
                      <p className="mt-2 text-[0.65rem] text-eventsGray/60">
                        Tear here for maximum regret.
                      </p>
                    </div>
                    <div className="ticket-face ticket-back">
                      <p className="text-xs uppercase tracking-[0.2em] text-eventsGray/60">
                        Back of ticket
                      </p>
                      <p className="mt-3 text-sm text-eventsGray/80">
                        {ticket.backstory}
                      </p>
                      <p className="mt-4 text-xs text-eventsGray/60">
                        Promise to show up next time (pending calendar chaos).
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex w-full flex-col items-center gap-2 text-eventsGray">
            <span className="text-3xl font-bold tracking-wide">
              Days since I last missed an event: 0
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventsMissedSection;
