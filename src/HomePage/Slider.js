import React, { useState, useEffect } from 'react';
import posImage7 from '../images/123.png';
import posImage8 from '../images/SOD-BUILDING.png';
import posImage10 from '../images/campus.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage7} alt=''/>,
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage8} alt=''/>,
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage10} alt=''/>,
    
    
    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index in a cyclic manner
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
        data-mdb-interval="false" // Disable automatic sliding
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              {typeof slide === 'string' ? (
                // <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
                <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />

              ) : (
                slide
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;






