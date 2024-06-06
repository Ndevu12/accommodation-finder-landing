import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <FeatureSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
