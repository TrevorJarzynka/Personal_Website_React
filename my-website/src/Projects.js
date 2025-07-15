import React, { useState } from 'react';
import './Projects.css';
import quantumPdf from './assets/Quantum_Computing_Paper.pdf';
import aiStudyImage from './assets/AI_Study_Assistant_Image.jpg';
import imageClassificationImage from './assets/Image_Classification.jpg';
import fileSystemOrganizerImage from './assets/File_system_organizer_image.jpg';
import quantumComputerImage from './assets/Quantum_Computer_Image.jpeg';

const projects = [
  {
    name: 'AI Study Assistant',
    image: aiStudyImage,  
    description: 'Currently developing a study assistant that features natural language processing for personalized learning assistance.',
  },
  {
    name: 'Image Classification',
    image: imageClassificationImage,
    description: 'Designed and implemented a Convolutional Neural Network (CNN) model for image classification',
  },
  {
    name: 'File System Organizer',
    image: fileSystemOrganizerImage,
    description: 'Developed a Python-based personalized file system organizer that automatically sorts and categorizes files by keywords, efficiently organizing them into the appropriate directories.',
  },
  {
    name: 'Quantum Computing Paper',
    image: quantumComputerImage,
    description: 'A focused analysis capturing my understanding BCQ and QHE encryption techniques. These are two essential protocols for enabling secure quantum computing.',
    link: quantumPdf,
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
              <h3 className="project-name">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
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