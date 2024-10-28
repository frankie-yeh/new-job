// src/components/TodoListRedux.js
import TodoItem from '../TodoItem'; // 引入單個待辦事項
import TodoFilter from '../TodoFilter'; // 篩選按鈕
import TodoInput from '../TodoInput'; // 輸入框
import '../../../styles/Todo.css'; // 引入樣式
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  toggleComplete,
  deleteTask,
  setFilter,
} from '../List-Redux/TodoSlice';

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

  // 篩選條件過濾待辦事項
  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
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
  );
};

export default TodoListRedux;
