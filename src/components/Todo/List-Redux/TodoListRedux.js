import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import TodoFilter from '../TodoFilter';
import TodoInput from '../TodoInput';
import {
  addTask,
  toggleComplete,
  deleteTask,
  setFilter,
} from '../List-Redux/TodoSlice';
import { Box, Heading, List } from '@chakra-ui/react';

const TodoListRedux = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);

  // 新增待辦事項
  const handleAddTask = () => {
    if (input) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  // 篩選條件過濾待辦事項
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
      bg="#e6dbc9"
      borderRadius="10px"
      boxShadow="md"
      mx="auto"
      textAlign="center"
      mt="8"
    >
      <Heading as="h1" size="lg" color="#dbc191" mb="4">
        Redux 待辦事項
      </Heading>
      <TodoInput input={input} setInput={setInput} addTask={handleAddTask} />
      <List spacing="4" mt="4">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={() => dispatch(toggleComplete(task.id))}
            deleteTask={() => dispatch(deleteTask(task.id))}
          />
        ))}
      </List>
      <TodoFilter
        filter={filter}
        setFilter={(newFilter) => dispatch(setFilter(newFilter))}
      />
    </Box>
  );
};

export default TodoListRedux;
