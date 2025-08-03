import React from 'react';
import './Resume.css';
import { useScrollAnimation } from './useScrollAnimation';

const workExperience = [
  {
    company: 'Virginia Tech',
    position: 'Quantum Computing Research Internship',
    duration: 'June 2024 - December 2024',
    responsibilities: [
      'I completed complex quantum computing problems',
      'I authored a comprehensive paper demonstrating my understanding and newly acquired knowledge of this emerging technology'
    ]
  },
  {
    company: 'Virginia Tech',
    position: 'Undergraduate Teaching Assistant',
    duration: 'August 2023 - December 2024',
    responsibilities: [
      'Assist in helping students get an overview of the computer science major and discipline',
      'Leveraged my personal experiences to mentor and guide 35 students in computer science, providing valuable pointers and insights',
      'I encouraged an interactive learning experience'
    ]
  }
];

function Resume() {
  // Use the scroll animation hook
  useScrollAnimation('resume');

  return (
    <section id="resume">
      <h3>Work Experience</h3>
      <div className="timeline">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-date">{job.duration}</div>
              <h4 className="timeline-title">{job.position}</h4>
              <h5 className="timeline-subtitle">{job.company}</h5>
              <ul className="timeline-responsibilities">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;