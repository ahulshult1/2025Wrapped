import Section from '../Section';

const GoalsSection = () => {
  return (
    <Section
      id="goals"
      sectionNumber="08"
      title="Coming Soon..."
      subtitle="2026 aspirations"
      accentColor="#9B7EBD"
    >
      <div className="max-w-5xl mx-auto">
        {/* Placeholder for goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { category: 'Personal', icon: '✨' },
            { category: 'Professional', icon: '🚀' },
            { category: 'Creative', icon: '🎨' },
            { category: 'Wellness', icon: '💚' },
          ].map((goal, index) => (
            <div
              key={index}
              className="bg-goals/10 p-8 rounded-lg border-2 border-goals/30"
            >
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="font-playfair text-2xl text-goals mb-4">
                {goal.category} Goals
              </h3>
              <ul className="space-y-2 font-inter text-warmBrown/70">
                <li>• Goal item 1</li>
                <li>• Goal item 2</li>
                <li>• Goal item 3</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="text-center mt-16">
          <p className="handwritten text-3xl text-goals mb-4">
            Here's to another year of growth & adventure!
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-goals/30 to-transparent max-w-md mx-auto" />
        </div>
      </div>
    </Section>
  );
};

export default GoalsSection;
