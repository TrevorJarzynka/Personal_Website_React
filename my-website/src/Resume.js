import React from 'react';
import './Resume.css';

const workExperience = [
  {
    company: 'Company A',
    position: 'Position A',
    duration: 'January 2020 - Present',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3'
    ]
  },
  {
    company: 'Company B',
    position: 'Position B',
    duration: 'June 2018 - December 2019',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3'
    ]
  }
];

const education = [
  {
    institution: 'University A',
    degree: 'Degree A',
    duration: '2014 - 2018'
  },
  {
    institution: 'University B',
    degree: 'Degree B',
    duration: '2010 - 2014'
  }
];

function Resume() {
  return (
    <section id="resume">
      <h3>Resume</h3>
      <div className="work-experience">
        <h4>Work Experience</h4>
        {workExperience.map((job, index) => (
          <div key={index} className="job">
            <div className="job-left">
              <h5>{job.company}</h5>
              <p>{job.duration}</p>
            </div>
            <div className="job-right">
              <p><strong>{job.position}</strong></p>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="education">
        <h4>Education</h4>
        {education.map((school, index) => (
          <div key={index} className="school">
            <div className="school-left">
              <h5>{school.institution}</h5>
              <p>{school.duration}</p>
            </div>
            <div className="school-right">
              <p><strong>{school.degree}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
