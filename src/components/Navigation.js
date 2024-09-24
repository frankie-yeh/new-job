import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 使用 Link 進行路由切換

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-div">
      <Link to="/" className="menu-item">回首頁</Link>
      <Link to="/api" className="menu-item">抓API</Link> {/* 路由到API頁面 */}
      <div 
        className="menu-item" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={toggleDropdown}
      >
        選項3 {isDropdownOpen ? '▲' : '▼'}
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="dropdown-item">子選項1</div>
            <div className="dropdown-item">子選項2</div>
            <div className="dropdown-item">子選項3</div>
          </div>
        )}
      </div>
      <Link to="/about-us" className="menu-item">自我介紹</Link>
      <div className="menu-item">選項5</div>
    </div>
  );
}

export default Navigation;
