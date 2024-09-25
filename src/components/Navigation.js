import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-container">
      {/* Logo 在左邊 */}
      <div className="nav-logo">
        <img src="../assets/images/bmw-logo.png" alt="Logo" className="desktop-logo" />
      </div>

      {/* 選單項目在右邊 */}
      <div className="nav-menu">
        <Link to="/" className="menu-item">回首頁</Link>
        <Link to="/api" className="menu-item">抓API</Link>
        <div className="menu-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
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
    </div>
  );
}

export default Navigation;
