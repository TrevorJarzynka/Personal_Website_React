import React from 'react';
import './About.css';
import headshot from './Images/trevorj04@vt.edu-f59d652a copy.jpg';

function About() {
  return (
    <section id="about">
      <h3>About</h3>
      <h4>Introduction</h4>
      <div className="about-container">
        <img src={headshot} alt="Headshot" className="circle-image" />
        <p>
          I am a Junior studying computer science at Virginia Tech. I'm also <br />
          a Quantum Computing Undergraduate Research Assistant. My goals are to
          <br /> expand my knowledge of the quantum computing industry and push the limits
          <br /> of this revolutionary technology.
        </p>
      </div>
    </section>
  );
}

export default About;
