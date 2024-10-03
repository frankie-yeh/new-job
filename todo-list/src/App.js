import React, { useState } from 'react';
import './App.css'; // 引入樣式檔案

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>那些你忘記的事，可能不是那麼重要...</h1>
      <input
        type="text"
        placeholder="輸入代辦事項，按下 Enter 添加"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
      />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>刪除</button>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setFilter('all')}>全部</button>
        <button onClick={() => setFilter('active')}>進行中</button>
        <button onClick={() => setFilter('completed')}>已完成</button>
      </div>
    </div>
  );
}

export default App;
