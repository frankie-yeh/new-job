import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // 引入單個待辦事項
import TodoFilter from './TodoFilter'; // 篩選按鈕
import TodoInput from './TodoInput'; // 輸入框
import '../../styles/Todo.css'; // 引入樣式
import Wrapper from '../../components/Bast/Wrapper'; // 引入包裝组件

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // 保存待辦事项
  const [input, setInput] = useState(''); // 新增的待辦事项
  const [filter, setFilter] = useState('全部'); // 目前待辦事項

  // 使用 localStorage 保存待辦事項
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      console.log('Stored tasks found:', storedTasks); // 添加日誌
      setTasks(storedTasks); // 如果 localStorage 中有待辦事項，設置狀態中
    }
  }, []); // 在第一次渲染時讀取

  // 當 tasks 改變時，保存到 localStorage
  useEffect(() => {
    console.log('Saving tasks to localStorage:', tasks); // 添加日誌
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // 當 tasks 改變時，保存到 localStorage

  // 新增待辦事項
  const addTask = (text) => {
    if (text) {
      setTasks([...tasks, { text, completed: false }]); // 將待辦事項加入列表裡
      setInput(''); // 清空輸入框
    }
  };

  // 切换待辦事項完成狀態
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks); // 更新完成狀態
  };

  // 删除待辦事項
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // 過濾掉删除的事項
  };

  // 篩選的待辦事項
  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  console.log('Filtered tasks:', filteredTasks); // 添加日誌

  return (
    <Wrapper>
      <div className="todo-container">
        <h1>你忘記的事</h1>
        <TodoInput input={input} setInput={setInput} addTask={addTask} />{' '}
        {/* 輸入框 */}
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
    </Wrapper>
  );
};

export default TodoList;
