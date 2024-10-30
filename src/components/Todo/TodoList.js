import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Input,
  List,
  Button,
  VStack,
  Stack,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('全部');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <Box
      width="90%"
      maxWidth="650px"
      p="6"
      bg="gray.100"
      borderRadius="md"
      mx="auto"
      boxShadow="md"
    >
      <Heading as="h1" size="lg" color="teal.600" mb="4" textAlign="center">
        你忘記的事
      </Heading>
      <VStack spacing={4}>
        <Input
          placeholder="新增待辦事項"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask(input)}
          borderColor="teal.300"
          bg="white"
        />
        <Button colorScheme="teal" onClick={() => addTask(input)} w="full">
          新增
        </Button>
      </VStack>
      <List spacing={3} mt="4">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={() => toggleComplete(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </List>
      <Stack direction="row" justify="center" mt="4" spacing={2}>
        <TodoFilter filter={filter} setFilter={setFilter} />
      </Stack>
    </Box>
  );
};

export default TodoList;
