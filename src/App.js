import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="outer-div">
      <div className="inner-div">
        <div className="left-content">電話: 123-456-7890</div>
        <div className="right-content">地址: 某某路123號</div>
      </div>
      <div className="nav-div">
        <div className="menu-item">選項1</div>
        <div className="menu-item">選項2</div>
        <div className="menu-item" onClick={toggleDropdown}>
          選項3 {isDropdownOpen ? '▲' : '▼'}
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-item">子選項1</div>
              <div className="dropdown-item">子選項2</div>
              <div className="dropdown-item">子選項3</div>
            </div>
          )}
        </div>
        <div className="menu-item">選項4</div>
        <div className="menu-item">選項5</div>
      </div>
      <div className="carousel-div">
        <Carousel />
      </div>
      <div className="four-divs">
        <div className="div1">Div 1</div>
        <div className="div2">Div 2</div>
        <div className="div3">Div 3</div>
        <div className="div4">Div 4</div>
      </div>
      {/* 將 API 組件放置在這裡 */}
      <ApiComponent />
    </div>
  );
}

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>Next Slide</button>
    </div>
  );
}

function ApiComponent() {
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const callApi = () => {
    // 使用你自己的 API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // 這裡可以替換為實際的 API URL

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // 將響應轉為 JSON
      })
      .then(data => {
        setApiResponse(JSON.stringify(data.slice(0, 3), null, 2));  // 只顯示前3筆資料
        setError(null);
      })
      .catch(error => {
        setError('Error: ' + error.message);
        setApiResponse(null);
      });
  };

  return (
    <div className="api-section">
      <h2>API Call Example</h2>
      <button onClick={callApi}>Call API</button>
      <div className="api-response">
        {apiResponse && <pre>{apiResponse}</pre>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
