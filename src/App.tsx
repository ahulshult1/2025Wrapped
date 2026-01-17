import PaperTexture from './components/PaperTexture';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import HeroSection from './components/sections/HeroSection';
import TravelSection from './components/sections/TravelSection';
import AccomplishmentsSection from './components/sections/AccomplishmentsSection';
import BakingSection from './components/sections/BakingSection';
import EventsMissedSection from './components/sections/EventsMissedSection';
import EventsAttendedSection from './components/sections/EventsAttendedSection';
import NumbersSection from './components/sections/NumbersSection';
import LessonsSection from './components/sections/LessonsSection';
import GoalsSection from './components/sections/GoalsSection';

function App() {
  return (
    <div className="relative scroll-snap-y">
      {/* Paper texture overlay */}
      <PaperTexture />

      {/* Scroll navigation indicator */}
      <ScrollProgressIndicator />

      {/* All sections */}
      <main>
        <HeroSection />
        <TravelSection />
        <AccomplishmentsSection />
        <BakingSection />
        <EventsMissedSection />
        <EventsAttendedSection />
        <NumbersSection />
        <LessonsSection />
        <GoalsSection />
      </main>
    </div>
  );
}

export default App;
