import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 引入 axios
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
  // 定義狀態來儲存 API 數據
  const [data, setData] = useState([]);

  // 使用 useEffect 在組件掛載時執行 API 請求
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

// 另一種舊寫法一樣是異步處理API
// axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
// // 定義狀態來儲存 API 數據
// const [data, setData] = useState([]);


// // 使用 useEffect 在組件掛載時執行 API 請求
// useEffect(() => {
//   // 使用 fetch 從 API 獲取數據
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => setData(data))
//     .catch(error => console.error('Error fetching data:', error));
// }, []);

  return (
    <div className="api-section">
      <h2>API Call Example</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
