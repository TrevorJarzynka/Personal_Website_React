import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul id="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.linkedin.com/in/trevor-jarzynka-739b18279/" target="_blank" rel="noopener noreferrer" className="linkedin-link"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/TrevorJarzynka" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github"></i></a></li>
          <li><a href="mailto:trevorjar3245@gmail.com?subject=Contact%20from%20Website" className="email-button"><i className="fas fa-envelope"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
