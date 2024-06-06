import React from 'react';
import './AboutSection.css';

const teamMembers = [
  {
    name: 'Jean Paul Elisa NIYOKWIZERWA',
    linkedIn: 'https://www.linkedin.com/in/jean-paul-elisa/',
    github: 'https://github.com/Ndevu12',
    twitter: 'https://twitter.com/@elion55698906'
  },
  {
    name: 'SKHETHA Robson',
    linkedIn: 'https://linkedin.com/in/member2',
    github: 'https://github.com/Skhetha22',
    twitter: 'https://twitter.com/member2'
  }
];

const AboutSection = () => {
  console.log('Rendering AboutSection with team members:', teamMembers);  // Debug log
  return (
    <section id="about">
      <div className="about-container">
        <h1>About the Project</h1>
        <p>
          AccommodationFinder was inspired by the personal challenge of finding suitable accommodations easily and efficiently. Our journey began in 2023, aiming to simplify this process for everyone. This project is also part of our portfolio for the ALX School.
        </p>
        <h3>Meet the Team</h3>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h4>{member.name}</h4>
              <p>
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
          ))}
        </div>
        <a href="https://github.com/Ndevu12/accomodation-finder-frontend" className="github-link" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
      </div>
    </section>
  );
};

export default AboutSection;
