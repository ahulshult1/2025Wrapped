import Section from '../Section';

const NumbersSection = () => {
  return (
    <Section
      id="numbers"
      sectionNumber="06"
      title="By The Digits"
      subtitle="2025 quantified"
      accentColor="#2C5F6F"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Placeholder stats */}
        {[
          { value: '12', label: 'Cities visited' },
          { value: '87', label: 'Books read' },
          { value: '365', label: 'Coffee cups' },
          { value: '24', label: 'New recipes' },
          { value: '1,000+', label: 'Photos taken' },
          { value: '15', label: 'Projects completed' },
          { value: '50+', label: 'New connections' },
          { value: '∞', label: 'Memories made' },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white/50 rounded-lg border-2 border-numbers/20"
          >
            <div className="font-playfair text-5xl font-bold text-numbers mb-2">
              {stat.value}
            </div>
            <div className="font-montserrat text-sm text-warmBrown/70 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default NumbersSection;
