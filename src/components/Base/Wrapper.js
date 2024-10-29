import React from 'react';
import Header from '../Header/Header'; // 判別組件
import Footer from '../Footer';
import PropTypes from 'prop-types'; // 增加 PropTypes
import '../../App.css';

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div> {/* 主內容區域 */}
      <Footer /> {/* 頁尾 */}
    </div>
  );
};
// 設定 PropTypes 驗證
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
