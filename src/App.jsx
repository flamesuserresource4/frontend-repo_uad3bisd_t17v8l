import { useState } from 'react';
import Hero from './components/Hero.jsx';
import VoiceForm from './components/VoiceForm.jsx';
import Calendar from './components/Calendar.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [spec, setSpec] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <main className="mx-auto max-w-7xl">
        <VoiceForm onGenerate={setSpec} />
        <Calendar spec={spec} />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
