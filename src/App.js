import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import FourDivs from './components/FourDivs';
import ApiComponent from './components/ApiComponent';
import AboutUs from './components/about-us';



function App() {
  return (
    <Router>
      <div className="outer-div">
        <Navigation />
        <Routes>
          {/* 預設頁面顯示輪播圖和四個區塊 */}
          <Route
            path="/"
            element={
              <>
                <div className="carousel-div">
                  <Carousel />
                </div>
                <FourDivs />
              </>
            }
          />
          <Route path="/api" element={<ApiComponent />} /> {/* API 頁面 */}
          <Route path="/about-us" element={<AboutUs />} /> {/* 關於我們頁面路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;