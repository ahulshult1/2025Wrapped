import Section from '../Section';

const EventsAttendedSection = () => {
  return (
    <Section
      id="events-attended"
      sectionNumber="05"
      title="I Showed Up!"
      subtitle="Events that made the calendar"
      accentColor="#FF6B6B"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for attended events */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="washi-tape bg-eventsCoral/20 rounded-lg p-6 border-2 border-eventsCoral/40"
          >
            <h3 className="font-montserrat font-bold text-eventsCoral mb-2">
              Event {item}
            </h3>
            <p className="font-inter text-sm text-warmBrown/70 mb-3">
              Date & location
            </p>
            <p className="font-caveat text-lg text-warmBrown/80">
              Memorable moment or quote
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EventsAttendedSection;
