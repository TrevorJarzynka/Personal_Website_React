import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    // Parallax effect for home section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('#home');
      const speed = scrolled * 0.5;
      
      if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home">
      <h1>Trevor Jarzynka</h1>
      <ul className="social-links">
        <li><a href="mailto:trevorjar3245@gmail.com?subject=Contact%20from%20Website" className="email-button"><i className="fas fa-envelope"></i></a></li>
        <li><a href="https://www.linkedin.com/in/trevor-jarzynka-739b18279/" target="_blank" rel="noopener noreferrer" className="linkedin-link"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/TrevorJarzynka" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github"></i></a></li>
      </ul>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}

export default Home;