import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <Flex
      as="nav"
      bg="blue.500"
      p={4}
      color="white"
      align="center"
      justify="space-between"
    >
      {/* Logo 在左邊 */}
      <Box flex="1">
        <RouterLink to="/">
          <Image src="/assets/images/car-logo.png" alt="Logo" />
        </RouterLink>
      </Box>

      {/* 選單項目在右邊 */}
      <Flex flex="1" justify="flex-end" gap={10}>
        <RouterLink to="/">
          <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            回首頁
          </Text>
        </RouterLink>
        <RouterLink to="/api">
          <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            抓API
          </Text>
        </RouterLink>

        <Box
          onMouseOver={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
          cursor="pointer"
          position="relative"
        >
          <Text fontWeight="bold">待辦事項 {isDropdownOpen ? '▲' : '▼'}</Text>
          {isDropdownOpen && (
            <VStack
              width="250px"
              spacing={0}
              position="absolute"
              top="100%"
              bg="blue.600"
              boxShadow="lg"
              p={2}
              mt={0}
              zIndex={10}
            >
              <RouterLink to="/TodoList">
                <Text
                  _hover={{ bg: 'blue.700' }}
                  p={2}
                  w="full"
                  textAlign="center"
                >
                  待辦事項1 ( local-Storage )
                </Text>
              </RouterLink>
              <RouterLink to="/TodoListRedux">
                <Text
                  _hover={{ bg: 'blue.700' }}
                  p={2}
                  w="full"
                  textAlign="center"
                >
                  待辦事項2 ( Redux )
                </Text>
              </RouterLink>
              <RouterLink to="/TodoApi">
                <Text
                  _hover={{ bg: 'blue.700' }}
                  p={2}
                  w="full"
                  textAlign="center"
                >
                  待辦事項3 ( HookAPI )
                </Text>
              </RouterLink>
            </VStack>
          )}
        </Box>

        <RouterLink to="/AboutUs">
          <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            自我介紹
          </Text>
        </RouterLink>
      </Flex>
    </Flex>
  );
}

export default Navigation;
