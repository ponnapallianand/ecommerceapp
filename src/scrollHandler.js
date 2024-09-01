// scrollHandler.js or within your App component
import { useEffect } from 'react';

const useScrollHandler = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      const scrollPosition = window.scrollY;
      const slider = document.querySelector('.ImageSlider1');
      if (slider) {
        slider.style.transform = `translateY(-${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollHandler;
