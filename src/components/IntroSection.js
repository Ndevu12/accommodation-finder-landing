// src/components/IntroSection.js
import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        <h1 className="finderHeader">Accommodation Finder</h1>
        <p className="finderPara">Your ultimate solution to find the perfect place to stay.</p>
        <a href="#app" className="btn">Explore Now</a>
      </div>
    </section>
  );
};

export default IntroSection;
