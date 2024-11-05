import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';

function AboutUs() {
  return (
    <Box maxWidth="100%" mx="auto" p="5" px="96">
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        pb="5"
      >
        {/* 左側區域 */}
        <Box
          textAlign="left"
          w={{ base: '100%', md: '50%' }}
          mb={{ base: '5', md: '0' }}
        >
          <Heading as="h2" fontSize="2xl" color="blue.700">
            關於我
          </Heading>
          <Image
            src="../assets/images/subaru-logo.png"
            alt="Subaru Logo"
            boxSize="100px"
            my="4"
          />
          <Text fontSize="lg" color="blue.600">
            葉汶姍
          </Text>
          <Heading as="h2" fontSize="xl" color="blue.700" mt="4">
            學歷
          </Heading>
          <Text fontSize="lg" color="blue.600">
            北市康寧護理專校 | 資訊管理科 二專畢業
          </Text>
        </Box>

        {/* 右側區域 */}
        <Box textAlign="left" w={{ base: '100%', md: '50%' }}>
          <Heading as="h2" fontSize="2xl" color="blue.700">
            經歷
          </Heading>
          <Text fontSize="lg" color="blue.600">
            智寶數位行銷有限公司 12年工作經歷
          </Text>
          <Text fontSize="lg" color="blue.600">
            職位：網頁工程師
          </Text>
          <Heading as="h2" fontSize="xl" color="blue.700" mt="4">
            前端技術
          </Heading>
          <List spacing={2} color="blue.600">
            <ListItem>
              精通HTML、CSS、JavaScript、RWD（響應式網站）開發能力
            </ListItem>
            <ListItem>WordPress開發和PHP、ASP網頁修改能力</ListItem>
            <ListItem>React.js開發和Git控版能力</ListItem>
          </List>
          <Heading as="h2" fontSize="xl" color="blue.700" mt="4">
            專案作品
          </Heading>
          <Text fontSize="lg" color="blue.600">
            555
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default AboutUs;
