import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // 引用單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入框
import '../../styles/Todo.css'; // 引用CSS

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // 保存待辦事项
  const [input, setInput] = useState(''); // 新增待辦事项
  const [filter, setFilter] = useState('全部'); // 目前篩選狀態

  // 用 localStorage 保存待辦事項
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      console.log('Stored tasks found:', storedTasks); // 增加日誌
      setTasks(storedTasks); // 如果 localStorage 中有待辦事項，設置狀態
    }
  }, []); // 第一次渲染時讀取

  // 當 tasks 改變時，保存到 localStorage
  useEffect(() => {
    console.log('Saving tasks to localStorage:', tasks); // 增加日誌
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // 當 tasks 改變時，保存到 localStorage

  // 新增待辦事項，新增的每一個任務都會有一個唯一的 id
  const addTask = (text) => {
    if (text) {
      const newTask = { id: Date.now(), text, completed: false }; // 用 Date.now() 產生唯一的 id
      setTasks([...tasks, newTask]); // 將待辦事項加入列表裡
      setInput(''); // 清空輸入框
    }
  };

  // 切换待辦事項完成狀態
  const toggleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks); // 更新完狀態
  };

  // 删除待辦事項
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // 過濾掉指定 id 的待辦事項
  };

  // 篩選待辦事項
  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  console.log('Filtered tasks:', filteredTasks); // 增加日誌

  return (
    <div className="todo-container">
      <h1>你忘記的事</h1>
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
      <TodoFilter filter={filter} setFilter={setFilter} /> {/* 篩選按鈕 */}
    </div>
  );
};

export default TodoList;
