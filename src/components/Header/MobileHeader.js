import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box bg="blue.500" color="white">
      <Flex align="center" justify="space-between" p={4}>
        {/* Logo */}
        <Link as={RouterLink} to="/">
          <Image
            src="../assets/images/car-logo.png"
            alt="Logo"
            boxSize="50px"
          />
        </Link>

        {/* Menu Toggle Button */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        />
      </Flex>

      {/* Mobile Menu */}
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

          {/* Dropdown Menu within Menu Context */}
          <Menu>
            <MenuButton as={Button} variant="link" color="white" py={2}>
              選項3
            </MenuButton>
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
          </Menu>

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
