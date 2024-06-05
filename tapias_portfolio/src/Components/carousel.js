import React, { useState } from 'react';
import '../pages/carousel2.css'; // Make sure this CSS file contains the above CSS

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        <div className="tile-content-button">Prev</div>
        <div className="tile-number">1</div>
      </button>
      <img src={images[currentIndex]} alt="carousel slide" />
      <button className="next" onClick={nextSlide}>
        <div className="tile-content-button">Next</div>
        <div className="tile-number">2</div>
      </button>
    </div>
  );
};

export default Carousel;


