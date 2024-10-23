import React from 'react';
import Header from '../Header'; // 判別組件
import Footer from '../Footer'; // 頁尾組件
import '../../App.css'; // 引入樣式

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div> {/* 主內容區域 */}
      <Footer /> {/* 頁尾 */}
    </div>
  );
};

export default Wrapper;
