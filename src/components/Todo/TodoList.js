import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // 單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入欄位
import '../../styles/Todo.css'; // 引入樣式
import Carousel from '../../components/Carousel'; // 輪播組件
import Footer from '../../components/Footer'; // 頁尾組件
import '../../App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // 儲存待辦事項
  const [input, setInput] = useState(''); // 新增的待辦事項
  const [filter, setFilter] = useState('全部'); // 當前篩選狀態

  // 使用 localStorage 來保存待辦事項
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks); // 如果 localStorage 中有待辦事項，設置到狀態中
    }
  }, []); // 在第一次渲染時讀取

  // 每當 tasks 狀態改變時，保存到 localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // 每當 tasks 改變，將其保存到 localStorage

  // 新增待辦事項
  const addTask = (text) => {
    if (text) {
      setTasks([...tasks, { text, completed: false }]); // 將新待辦事項加入到列表中
      setInput(''); // 清空輸入欄位
    }
  };

  // 切換待辦事項完成狀態
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks); // 更新完成狀態
  };

  // 刪除待辦事項
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // 過濾掉刪除的事項
  };

  // 篩選顯示的待辦事項
  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <div>
      <Carousel /> {/* 輪播 */}
      <div className="todo-container">
        <h1>你忘記的事，並不是那麼重要...</h1>
        <TodoInput input={input} setInput={setInput} addTask={addTask} />{' '}
        {/* 輸入欄位 */}
        <ul>
          {filteredTasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              toggleComplete={() => toggleComplete(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </ul>
        <TodoFilter filter={filter} setFilter={setFilter} /> {/* 篩選按鈕 */}
      </div>
      <Footer /> {/* 頁尾 */}
    </div>
  );
};

export default TodoList;
