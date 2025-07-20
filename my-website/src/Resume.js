import React from 'react';
import './Resume.css';

const workExperience = [
  {
    company: 'Virginia Tech',
    position: 'Quantum Computing Undergraduate Research Assistant',
    duration: 'June 2024 - August 2024',
    responsibilities: [
      'Collaborated with Professor Mantri to work through complex quantum computing problems',
      'Authored a comprehensive paper demonstrating my understanding and newly acquired knowledge of this emerging technology'
    ]
  },
  {
    company: 'Virginia Tech',
    position: 'Undegraduate Teaching Assistant',
    duration: 'August 2023 - December 2024',
    responsibilities: [
      'Assist in helping students get an overview of the computer science major and discipline',
      'Leveraged my personal experiences to mentor and guide 35 students in computer science, providing valuable pointers and insights',
      'Encouraged an interactive learning experience'
    ]
  }
];

function Resume() {
  return (
    <section id="resume">
      <h3>Work Experience</h3>
      <div className="timeline">
        {workExperience.map((job, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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