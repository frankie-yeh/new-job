// src/components/TodoListRedux.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  toggleComplete,
  deleteTask,
  setFilter,
} from '../redux/todoSlice';
import TodoItem from './TodoItem'; // 單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入框
import Wrapper from '../Base/Wrapper'; // 包裝组件

const TodoListRedux = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);

  // 新增待辦事項
  const handleAddTask = () => {
    if (input) {
      dispatch(addTask(input));
      setInput(''); // 清空輸入框
    }
  };

  // 根據篩選條件過濾待辦事項
  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <Wrapper>
      <div className="todo-container">
        <h1>Redux 待辦事項</h1>
        <TodoInput
          input={input}
          setInput={setInput}
          addTask={handleAddTask}
        />{' '}
        {/* 輸入框 */}
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleComplete={() => dispatch(toggleComplete(task.id))}
              deleteTask={() => dispatch(deleteTask(task.id))}
            />
          ))}
        </ul>
        <TodoFilter
          filter={filter}
          setFilter={(newFilter) => dispatch(setFilter(newFilter))}
        />{' '}
        {/* 篩選按鈕 */}
      </div>
    </Wrapper>
  );
};

export default TodoListRedux;
