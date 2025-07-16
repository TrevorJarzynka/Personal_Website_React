import React, { useState } from 'react';
import './Projects.css';
import quantumPdf from './assets/Quantum_Computing_Paper.pdf';
import imageClassificationImage from './assets/Image_Classification.jpg';
import fileSystemOrganizerImage from './assets/File_system_organizer_image.jpg';
import quantumComputerImage from './assets/Quantum_Computer_Image.png';
import quantumSimulatorImage from './assets/Quantum_Simulator_Image.png';
import TopographyPredictionImage from './assets/3D_Topography_Image.png';

const projects = [
  {
    name: 'Quantum Simulator',
    image: quantumSimulatorImage,
    description: 'Developing an interactive quantum circuit simulator, enabling real-time visualization of circuit behavior and quantum state evolution. ',
    link: 'https://github.com/TrevorJarzynka/Quantum_Simulator',
  },
  {
    name: 'Quantum Computing Paper',
    image: quantumComputerImage,
    description: 'A focused analysis capturing my understanding BCQ and QHE encryption techniques. These are two essential protocols for enabling secure quantum computing.',
    link: quantumPdf,
  },
  {
    name: '3D Printing Topography Prediction',
    image: TopographyPredictionImage, 
    description: 'Led team of four to develop a web app using Dr. Mahmood\u2019s machine learning models to predict metal 3D printing topography with 94\u201399% accuracy, reducing costs for the technology',
    link: 'https://amsurfaces.cs.vt.edu'
  },
  {
    name: 'Image Classification',
    image: imageClassificationImage,
    description: 'Designed and implemented a Convolutional Neural Network (CNN) model for image classification',
    link: 'https://github.com/TrevorJarzynka/Image-Classification',
  },
  {
    name: 'File System Organizer',
    image: fileSystemOrganizerImage,
    description: 'Developed a Python-based personalized file system organizer that automatically sorts and categorizes files by keywords, efficiently organizing them into the appropriate directories.',
    link: 'https://github.com/TrevorJarzynka/File_Manager',
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