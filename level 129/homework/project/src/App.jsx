import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <TeamSection />
    </div>
  );
}

export default App;