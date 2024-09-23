import React from 'react';
import Navigation from './Navigation'; // 引入選單組件
import Carousel from './Carousel'; // 引入輪播圖組件

function SelfIntroduction() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <div className="intro-section">
        <h2>自我介紹</h2>
        <p>12345678910</p> {/* 這裡是你的自我介紹文字 */}
      </div>
    </div>
  );
} 


export default SelfIntroduction;
