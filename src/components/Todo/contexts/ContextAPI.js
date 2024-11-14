import React, { useContext } from 'react';
import { TodoContext } from './TodoContext'; // 引入 Context
import TodoItem from './TodoItem';
import TodoFilter from '../../Todo/TodoFilter';
import TodoInput from './TodoInput';
//import '../../styles/Todo.css';
import Wrapper from '../../Base/Wrapper';

const ContextAPI = () => {
  const { tasks, addTask, toggleComplete, deleteTask, filter, setFilter } =
    useContext(TodoContext);

  const filteredTasks = tasks.filter((task) =>
    filter === '全部'
      ? true
      : filter === '尚未完成'
        ? !task.completed
        : task.completed
  );

  return (
    <Wrapper>
      <div className="todo-container">
        <h1>你忘記的事</h1>
        <TodoInput addTask={addTask} />
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
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>
    </Wrapper>
  );
};

export default ContextAPI;
