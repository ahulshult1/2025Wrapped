import Section from '../Section';

const EventsMissedSection = () => {
  return (
    <Section
      id="events-missed"
      sectionNumber="04"
      title="The FOMO Chronicles"
      subtitle="Events I couldn't make"
      accentColor="#A0A0A0"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Placeholder for missed events */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white/70 p-6 rounded-lg border border-eventsGray/30 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-eventsGray/20 flex items-center justify-center flex-shrink-0">
              <span className="font-caveat text-2xl text-eventsGray">✗</span>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-eventsGray">
                Event Name {item}
              </h3>
              <p className="font-inter text-sm text-warmBrown/60">
                Reason for missing
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EventsMissedSection;
