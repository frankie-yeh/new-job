import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import FourDivs from './components/FourDivs';
import ApiComponent from './components/ApiComponent';
import AboutUs from './components/AboutUs';
import BgVideo from './components/BgVideo'; // 導入 BgVideo 組件
import TodoList from './components/Todo/TodoList'; // 導入 TodoList 組件
import TodoListRedux from './components/Todo/List-Redux/TodoListRedux';
import TodoApi from './components/Todo/TodoApi';
import Wrapper from './components/Base/Wrapper';

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="outer-div">
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
                  <BgVideo />
                </>
              }
            />
            <Route path="/api" element={<ApiComponent />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/TodoListRedux" element={<TodoListRedux />} />
            <Route path="/TodoApi" element={<TodoApi />} />
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
