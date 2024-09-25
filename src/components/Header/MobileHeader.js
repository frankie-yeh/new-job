import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MobileHeader.css'; // 確保引入了 CSS 文件


function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mobile-nav-div">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>回首頁</Link>
          <Link to="/api" className="mobile-menu-item" onClick={toggleMenu}>抓API</Link>
          <div 
            className="mobile-menu-item" 
            onClick={toggleDropdown}
          >
            選項3 {isDropdownOpen ? '▲' : '▼'}
            {isDropdownOpen && (
              <div className="mobile-dropdown">
                <div className="mobile-dropdown-item" onClick={toggleMenu}>子選項1</div>
                <div className="mobile-dropdown-item" onClick={toggleMenu}>子選項2</div>
                <div className="mobile-dropdown-item" onClick={toggleMenu}>子選項3</div>
              </div>
            )}
          </div>
          <Link to="/about-us" className="mobile-menu-item" onClick={toggleMenu}>自我介紹</Link>
          <div className="mobile-menu-item" onClick={toggleMenu}>選項5</div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
