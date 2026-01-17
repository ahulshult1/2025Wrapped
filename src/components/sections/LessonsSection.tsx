import Section from '../Section';

const LessonsSection = () => {
  return (
    <Section
      id="lessons"
      sectionNumber="07"
      title="Dear 2025..."
      subtitle="What you taught me"
      accentColor="#8B9D83"
    >
      <div className="max-w-4xl mx-auto">
        {/* Placeholder for lessons - letter format */}
        <div className="bg-white/80 p-12 rounded-lg shadow-xl border border-lessons/20">
          <div className="handwritten text-2xl text-lessons mb-8">
            Things I learned this year:
          </div>

          <div className="space-y-6 font-inter text-warmBrown/80 leading-relaxed">
            <p className="pl-6 border-l-2 border-lessons/40">
              Lesson 1: Write your important life lessons here
            </p>
            <p className="pl-6 border-l-2 border-lessons/40">
              Lesson 2: Reflections on growth and change
            </p>
            <p className="pl-6 border-l-2 border-lessons/40">
              Lesson 3: Wisdom gained through experience
            </p>
            <p className="pl-6 border-l-2 border-lessons/40">
              Lesson 4: Gratitude and acknowledgments
            </p>
          </div>

          <div className="mt-12 text-right">
            <p className="handwritten text-3xl text-lessons">
              With love, <br />
              Abigail Hulshult
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LessonsSection;
