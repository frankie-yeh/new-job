import React from 'react';
import { Box } from '@chakra-ui/react';
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
        <Box width="100%" maxWidth="100%" pb="2em">
          <Routes>
            {/* 預設頁面顯示輪播圖和四個區塊 */}
            <Route
              path="/"
              element={
                <>
                  <Box width="100%" className="carousel-div">
                    <Carousel />
                  </Box>
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
        </Box>
      </Wrapper>
    </Router>
  );
}

export default App;
