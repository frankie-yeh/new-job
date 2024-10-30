import React from 'react';
import Header from '../Header/Header'; // 判別組件
import Footer from '../Footer';
import PropTypes from 'prop-types';
import { Box, Container } from '@chakra-ui/react';

const Wrapper = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxW="container.lg" p={4}>
        {children} {/* 主內容區域 */}
      </Container>
      <Footer /> {/* 頁尾 */}
    </Box>
  );
};

// 設定 PropTypes 驗證
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
