import { useEffect } from 'react';

export const useScrollAnimation = (sectionId, animationClass = 'reveal') => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    
    if (!section) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    }, observerOptions);

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [sectionId, animationClass]);
};