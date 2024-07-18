import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    image: './test.jpg',  
    description: 'Detailed description for project 1.',
    link: 'http://example.com/project1'  // Replace with the actual link
  },
  {
    name: 'Project 2',
    image: 'path-to-image2.jpg',  // Replace with actual path to your image
    description: 'Detailed description for project 2.',
    link: 'http://example.com/project2'  // Replace with the actual link
  },
  {
    name: 'Project 3',
    image: 'path-to-image3.jpg',  // Replace with actual path to your image
    description: 'Detailed description for project 3.',
    link: 'http://example.com/project3'  // Replace with the actual link
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-content">
              <h3 className="project-name">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              </h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
