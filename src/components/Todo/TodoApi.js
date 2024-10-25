import React, { useReducer, useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // 引入單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入框
import '../../styles/Todo.css'; // 引入樣式
import Wrapper from '../Base/Wrapper'; // 包裝组件

// 定義 reducer 函數來處理不同的 action
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

// 定義 TodoListHooks 組件
const TodoListHooks = () => {
  // 使用 useReducer 來管理狀態
  const [state, dispatch] = useReducer(todoReducer, {
    tasks: [],
    filter: '全部',
  });

  const [input, setInput] = useState(''); // 新增待辦事項的輸入框

  // 使用 localStorage 保存與讀取待辦事項
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'LOAD_TASKS', payload: storedTasks }); // 加載本地儲存的資料
    }
  }, []);

  // 當 tasks 改變時，保存到 localStorage
  useEffect(() => {
    if (state.tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  // 新增待辦事項
  const addTask = (text) => {
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setInput(''); // 清空輸入框
    }
  };

  // 切換待辦事項完成狀態
  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  // 刪除待辦事項
  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  // 篩選待辦事項
  const filteredTasks = state.tasks.filter((task) =>
    state.filter === '全部'
      ? true
      : state.filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <Wrapper>
      <div className="todo-container">
        <h1>Hooks API 待辦事項</h1>
        <TodoInput input={input} setInput={setInput} addTask={addTask} />{' '}
        {/* 輸入框 */}
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleComplete={() => toggleComplete(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          ))}
        </ul>
        <TodoFilter
          filter={state.filter}
          setFilter={(newFilter) =>
            dispatch({ type: 'SET_FILTER', payload: newFilter })
          }
        />{' '}
        {/* 篩選按鈕 */}
      </div>
    </Wrapper>
  );
};

export default TodoListHooks;
