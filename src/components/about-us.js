import React from 'react';
import '../App.css';
import Carousel from './Carousel'; // 確保已經有 Carousel 組件
import Footer from './footer'; // 確保已經有 Footer 組件

function AboutUs() {
  return (
    <div>
      <Carousel />
      <div className="about-section">
        <div className="about-me-left">
        <h2>關於我們</h2>
        <img src='../assets/images/subaru-logo.png'></img>
        <p>12345678910</p> {/* 這裡是你的介紹文字 */}
        <h2>學歷</h2>
        <p>12345678910</p> {/* 這裡是你的介紹文字 */}
        </div>
        <div className="about-me-right">
        <h2>經歷</h2>
        <p>12345678910</p> {/* 這裡是你的介紹文字 */}
        <h2>專案作品</h2>
        <p>12345678910</p> {/* 這裡是你的介紹文字 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
