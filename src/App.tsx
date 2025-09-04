import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MridulaProfile from './components/MridulaProfile';
import Services from './components/Services';
import Impact from './components/Impact';
import MediaSection from './components/MediaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MridulaProfile />
      <Services />
      <Impact />
      <MediaSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;