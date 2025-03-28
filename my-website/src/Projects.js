import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'AI Study Assistant',
    image: './AI_Study_Assistant_Image.jpg',
    description: 'Currently developing a study assistant that features natural language processing for personalized learning assistance.',
  },
  {
    name: 'Image Classification',
    image: './Image_Classification.jpg',
    description: 'Designed and implemented a Convolutional Neural Network (CNN) model for image classification',
  },
  {
    name: 'File System Organizer',
    image: './File_system_organizer_image.jpg',
    description: 'Developed a Python-based personalized file system organizer that automatically sorts and categorizes files by keywords, efficiently organizing them into the appropriate directories.',
  },
  {
    name: 'Quantum Computing Paper',
    image: './Quantum_Computer_Image.jpeg',
    description: 'A focused analysis capturing my understanding BCQ and QHE encryption techniques. These are two essential protocols for enabling secure quantum computing.'
  }
 
  
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div 
            className="project-box" 
            key={index} 
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`project-content ${hoveredProject === index ? 'expanded' : ''}`}>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;