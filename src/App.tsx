import PaperTexture from './components/PaperTexture';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import HeroSection from './components/sections/HeroSection';
import PeruTravelSection from './components/sections/PeruTravelSection';
import ColoradoUtahSection from './components/sections/ColoradoUtahSection';
import AccomplishmentsSection from './components/sections/AccomplishmentsSection';
import AccomplishmentsNewsSection from './components/sections/AccomplishmentsNewsSection';
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
        <PeruTravelSection />
        <ColoradoUtahSection />
        <AccomplishmentsSection />
        <AccomplishmentsNewsSection />
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
