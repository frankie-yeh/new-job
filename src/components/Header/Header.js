import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import LaptopHeader from './LaptopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  // 用 useMediaQuery 判斷螢幕寬度是否大於 832px
  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  return <>{isDesktop ? <LaptopHeader /> : <MobileHeader />}</>;
};

export default Header;
