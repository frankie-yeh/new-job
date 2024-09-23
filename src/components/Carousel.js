import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000); // 每隔3秒切換一張圖片

    return () => clearInterval(interval); // 清除定時器
  }, [slides.length]);

  return (
    <div className="carousel">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
}

export default Carousel;