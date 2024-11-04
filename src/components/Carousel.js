import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

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
    <Box maxW="99.1%" p={0} m={0}>
      <Image
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
}

export default Carousel;
