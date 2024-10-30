import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

function ApiComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setData(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      maxW="800px"
      my="20px"
      p="20px"
      boxShadow="md"
      borderRadius="lg"
      bg={useColorModeValue('gray.50', 'gray.700')}
    >
      <Heading as="h2" size="lg" mb="20px" textAlign="center">
        API Call Example
      </Heading>
      {error ? (
        <Text color="red.500" textAlign="center">
          {error}
        </Text>
      ) : (
        <UnorderedList spacing={4}>
          {data.map((item) => (
            <ListItem
              key={item.id}
              p="15px"
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              boxShadow="sm"
            >
              <Heading as="h3" size="md" color="gray.700">
                {item.title}
              </Heading>
              <Text color="gray.600" mt="2">
                {item.body}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Container>
  );
}

export default ApiComponent;
