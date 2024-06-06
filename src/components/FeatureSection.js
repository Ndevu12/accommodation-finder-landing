import React from 'react';
import './FeatureSection.css';
import any from '../assets/images/any.jpeg';
import lens from '../assets/images/lens.png';
import booking from '../assets/images/booking.jpeg';

const features = [
  {
    imgSrc: lens,
    name: 'Search Accommodation',
    description: 'Search for accommodation you want, anywhere.'
  },
  {
    imgSrc: any,
    name: 'Any Kind of House',
    description: 'You can find any kind of house you want here. Are you a landlord? You can make your house visible.'
  },
  {
    imgSrc: booking,
    name: 'Reserve and Pay Directly',
    description: 'Reserve and pay directly. No more running Searching for house to move in, choose and pay for a rent on one tap.'
  }
];

const FeatureSection = () => {
  console.log('Rendering FeatureSection with features:', features); 
  return (
    <section id="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.imgSrc} alt={feature.name} />
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
