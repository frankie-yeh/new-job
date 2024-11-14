import React from 'react';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={toggleComplete}>
        {task.completed ? '未完成' : '完成'}
      </button>
      <button onClick={deleteTask}>刪除</button>
    </li>
  );
};

export default TodoItem;
