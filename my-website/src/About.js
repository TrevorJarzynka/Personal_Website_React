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
          I am a recent Computer Science graduate from Virginia Tech with experience as <br />
          a Quantum Computing Undergraduate Research Assistant. Currently, I'm seeking <br />
          opportunities in the tech industry while continuing to work on personal quantum <br />
          computing projects. My goals are to expand my knowledge of the quantum computing <br />
          field and contribute to pushing the limits of this revolutionary technology through <br />
          both professional work and independent research.
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
            </ul>
          </div>
          <div className="skill-category">
            <h5>Libraries</h5>
            <ul>
              <li>TensorFlow</li>
              <li>Posix spawn</li>
              <li>Qiskit</li>
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
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <h2>  space </h2>
    </section>
  );
}

export default About;