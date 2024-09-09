import React from 'react';
import './About.css';
import headshot from './Images/trevorj04@vt.edu-f59d652a copy.jpg';

function About() {
  return (
    <section id="about">
      <h2>  space </h2>
      <h4>Introduction</h4>
      <div className="about-container">
        <img src={headshot} alt="Headshot" className="circle-image" />
        <p>
          I am a Senior studying computer science at Virginia Tech. I'm also <br />
          a Quantum Computing Undergraduate Research Assistant. My goals are to
          <br /> expand my knowledge of the quantum computing industry and push the limits
          <br /> of this revolutionary technology.
        </p>
      </div>

      <div className="tech-skills">
        <h4>Technical Skills</h4>
        <div className="skills-grid">
          <div className="skill-category">
            <h5>Languages</h5>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h5>Frameworks</h5>
            <ul>
              <li>React</li>
              <li>Django</li>
              <li>JUnit</li>
              <li>SwiftUI</li>
            </ul>
          </div>
          <div className="skill-category">
            <h5>Libraries</h5>
            <ul>
              <li>TensorFlow</li>
              <li>Posix spawn</li>
            </ul>
          </div>
          <div className="skill-category">
            <h5>Cloud Platforms</h5>
            <ul>
              <li>AWS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h5>DataBases</h5>
            <ul>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
      <h2>  space </h2>
    </section>
  );
}

export default About;

