import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  console.log('Rendering TodoItem with task:', task); // 增加日誌

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span className={`todo-text ${task.completed ? 'completed-text' : ''}`}>
        {task.text}
      </span>
      <button onClick={deleteTask}>X</button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
