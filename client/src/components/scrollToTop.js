import { useState, useEffect } from 'react';

export const ScrollToTop= () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if(window.pageYOffset < 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false); 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const upArrowButton = <i className={isVisible ? 'fa-solid fa-circle-arrow-up opacity0' : 'fa-solid fa-circle-arrow-up opacity100' }></i>


  return (
    <div className='scroll-to-top-button'> 
      <button type='button' onClick={scrollToTop} className="up-arrow-button">
        {upArrowButton}
      </button>
    </div>
  );
};

export default ScrollToTop;
