import React from 'react';
import PropTypes from 'prop-types'; // 引入 PropTypes

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span className={task.completed ? 'task-completed' : ''}>
        {task.text}
      </span>
      <button onClick={deleteTask}>刪除</button>
    </li>
  );
};

// 為 props 添加 PropTypes 驗證
TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
