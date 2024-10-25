import React from 'react';
import Header from '../Header/Header'; // 判別組件
import Footer from '../Footer'; // 頁尾組件
import PropTypes from 'prop-types'; // 添加 PropTypes
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
// 定义 PropTypes 验证
Wrapper.propTypes = {
  children: PropTypes.node.isRequired, // 验证 children 属性
};

export default Wrapper;
