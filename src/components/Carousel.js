import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '../assets/images/audi-rs-green.jpg',
    '../assets/images/evo-white.jpg',
    '../assets/images/wrx-orange.jpg',
    '../assets/images/bmw-m3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000); // 每隔3秒切換圖片

    return () => clearInterval(interval); // 清除定時器
  }, [slides.length]);

  return (
    <div className="carousel">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
}

export default Carousel;
