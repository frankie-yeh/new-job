// MobileHeader.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  IconButton,
  Collapse,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box bg="blue.500" color="white">
      <Flex align="center" justify="space-between" p={4}>
        {/* 左側：Logo 部分 */}
        <Link as={RouterLink} to="/">
          <Image
            src="../assets/images/car-logo.png"
            alt="Logo"
            boxSize="50px"
          />
        </Link>

        {/* 右側：選單部分 */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        />
      </Flex>

      {/* 手機版選單部分 */}
      <Collapse in={isMenuOpen} animateOpacity>
        <Box bg="blue.600" p={4}>
          <Link
            as={RouterLink}
            to="/"
            onClick={toggleMenu}
            display="block"
            py={2}
          >
            回首頁
          </Link>
          <Link
            as={RouterLink}
            to="/api"
            onClick={toggleMenu}
            display="block"
            py={2}
          >
            抓API
          </Link>
          <Box>
            <Button
              variant="link"
              onClick={toggleDropdown}
              color="white"
              py={2}
            >
              選項3 {isDropdownOpen}
            </Button>
            <Collapse in={isDropdownOpen}>
              <MenuList bg="blue.700" border="none">
                <MenuItem as={RouterLink} to="/TodoList">
                  待辦事項1 ( local-Storage )
                </MenuItem>
                <MenuItem as={RouterLink} to="/TodoListRedux">
                  待辦事項2 ( Redux )
                </MenuItem>
                <MenuItem as={RouterLink} to="/TodoApi">
                  待辦事項3 ( HookAPI )
                </MenuItem>
              </MenuList>
            </Collapse>
          </Box>
          <Link
            as={RouterLink}
            to="/AboutUs"
            onClick={toggleMenu}
            display="block"
            py={2}
          >
            自我介紹
          </Link>
        </Box>
      </Collapse>
    </Box>
  );
}

export default MobileHeader;
