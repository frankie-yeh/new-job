import React from 'react';
import PropTypes from 'prop-types'; // 引用 PropTypes

const TodoInput = ({ input, setInput, addTask }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask(input);
      setInput(''); // 清空輸入框
    }
  };

  return (
    <input
      type="text"
      placeholder="接下來要做什麼呢？"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

// 為 props 增加 PropTypes 驗證
TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TodoInput;
