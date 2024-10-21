import React from 'react';
import Carousel from '../../components/Carousel'; // 輪播組件
import Footer from '../../components/Footer'; // 頁尾組件
import '../../App.css'; // 引入樣式

const Wrapper = ({ children }) => {
  return (
    <div>
      <Carousel /> {/* 輪播 */}
      <div className="content">{children}</div> {/* 主內容區域 */}
      <Footer /> {/* 頁尾 */}
    </div>
  );
};

export default Wrapper;
