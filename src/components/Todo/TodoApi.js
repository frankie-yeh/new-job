import React, { useReducer, useState, useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem'; // 引用單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入框

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload || [],
      };
    default:
      return state;
  }
};

const TodoListHooks = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    tasks: [],
    filter: '全部',
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'LOAD_TASKS', payload: storedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (text) => {
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const filteredTasks = state.tasks.filter((task) =>
    state.filter === '全部'
      ? true
      : state.filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <Box
      width="90%"
      maxWidth="650px"
      padding="30px"
      backgroundColor="#e6dbc9"
      borderRadius="10px"
      margin="2em auto"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      fontFamily="'Courier New', Courier, monospace"
      color="#000"
      textAlign="center"
    >
      <Heading as="h1" fontSize="24px" color="#dbc191" marginBottom="20px">
        Hooks API 待辦事項
      </Heading>
      <TodoInput input={input} setInput={setInput} addTask={addTask} />

      <VStack as="ul" spacing={4} align="stretch" padding={0}>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={() => toggleComplete(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </VStack>

      <TodoFilter
        filter={state.filter}
        setFilter={(newFilter) =>
          dispatch({ type: 'SET_FILTER', payload: newFilter })
        }
      />
    </Box>
  );
};

export default TodoListHooks;
