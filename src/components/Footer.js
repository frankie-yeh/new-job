import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="blue" borderTop="1px solid" borderColor="gray.200">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
      >
        <Box flex={1} mb={{ base: 4, md: 0 }} textAlign="center">
          <Image
            src="../assets/images/footer-car-logo.png"
            alt="Logo"
            maxW="100px"
            mx="auto"
          />
        </Box>

        <Box flex={1} mb={{ base: 4, md: 0 }} textAlign="center">
          <AspectRatio ratio={16 / 9} maxW="100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092883!2d144.95373631531882!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d1a5f9d1c6d!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1630648041925!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            />
          </AspectRatio>
        </Box>

        <VStack flex={1} spacing={2} align="center" textAlign="center">
          <Heading as="h2" size="md">
            Contact
          </Heading>
          <Text>Phone / +80 999 99 9999</Text>
          <Text>Email / info@domain.com</Text>
          <Text>Studio / Moonshine St. 14/05 Light City</Text>
          <Text fontSize="sm" color="gray.500">
            Copyright 2024 - React Designed by Frankie
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;
