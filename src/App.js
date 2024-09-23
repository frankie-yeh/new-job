import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import FourDivs from './components/FourDivs';
import ApiComponent from './components/ApiComponent';

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
          {/* API 頁面 */}
          <Route path="/api" element={<ApiComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;