import React from 'react';
import { Box } from '@chakra-ui/react';

function Bgvideo() {
  return (
    <Box
      position="relative"
      width="100%"
      height="800px"
      overflow="hidden"
      zIndex="-1"
    >
      <Box
        as="video"
        controls
        autoPlay
        muted
        loop
        position="absolute"
        top="50%"
        left="50%"
        minWidth="100%"
        minHeight="100%"
        width="auto"
        height="auto"
        transform="translate(-50%, -50%)"
        opacity="0.5"
        backgroundSize="cover"
      >
        <source src="../assets/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </Box>
    </Box>
  );
}

export default Bgvideo;
