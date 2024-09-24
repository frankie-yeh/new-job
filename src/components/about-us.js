import React from 'react';
import Carousel from './Carousel'; // 確保已經有 Carousel 組件

function AboutUs() {
  return (
    <div>
      <Carousel />
      <div className="about-section">
        <h2>關於我們</h2>
        <p>12345678910</p> {/* 這裡是你的介紹文字 */}
      </div>
    </div>
  );
}

export default AboutUs;
