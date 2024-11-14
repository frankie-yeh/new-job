import React, { createContext, useState, useEffect } from 'react';

// 建立 Context
export const TodoContext = createContext();

// Provider 組件
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('全部');

  // 讀取 localStorage 中的任務
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // 將任務保存到 localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 新增任務
  const addTask = (text) => {
    if (text) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  // 切換任務完成狀態
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 刪除任務
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, toggleComplete, deleteTask, filter, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};
