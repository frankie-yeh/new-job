import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <div className="nav-container">
      {/* Logo 在左邊 */}
      <div className="nav-logo">
        <Link to="/">
          <img
            src="/assets/images/car-logo.png"
            alt="Logo"
            className="desktop-logo"
          />
        </Link>
      </div>

      {/* 選單項目在右邊 */}
      <div className="nav-menu">
        <Link to="/" className="menu-item">
          回首頁
        </Link>
        <Link to="/api" className="menu-item">
          抓API
        </Link>
        <div
          className="menu-item"
          onMouseOver={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
        >
          待辦事項 {isDropdownOpen ? '▲' : '▼'}
          {isDropdownOpen && (
            <div className="dropdown">
              <Link to="/TodoList" className="menu-item">
                待辦事項1 ( local-Storage )
              </Link>
              <Link to="/TodoListRedux" className="menu-item">
                待辦事項2 ( Redux )
              </Link>
              <Link to="/TodoApi" className="menu-item">
                待辦事項3 ( HookAPI )
              </Link>
            </div>
          )}
        </div>
        <Link to="/AboutUs" className="menu-item">
          自我介紹
        </Link>
        <Link to="/TodoList" className="menu-item">
          待辦事項
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
