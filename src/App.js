import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/LaptopHeader';
import MobileHeader from './components/Header/MobileHeader'; // 確保引入了正確的路徑
import Carousel from './components/Carousel';
import FourDivs from './components/FourDivs';
import ApiComponent from './components/ApiComponent';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Bgvideo from './components/BgVideo'; // 導入 Bgvideo 組件
import TodoList from './components/Todo/TodoList'; // 導入 TodoList 組件

function App() {
  return (
    <Router>
      <div className="outer-div">
        <div className="desktop-header">
          <Navigation />
        </div>
        <div className="mobile-header">
          <MobileHeader />
        </div>
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
                <Bgvideo />
                <Footer />
              </>
            }
          />
          <Route path="/api" element={<ApiComponent />} /> {/* API 頁面 */}
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* 關於我們頁面路由 */}
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
