import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入新的待辦事項"
      />
      <button onClick={handleAddTask}>新增</button>
    </div>
  );
};

export default TodoInput;
