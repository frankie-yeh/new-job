// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: '全部',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(), // 使用唯一 ID
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setTasks: (state, action) => {
      // 若從 API 取得資料，可以使用此 reducer 更新 tasks 狀態
      state.tasks = action.payload;
    },
  },
});

// 導出 actions
export const { addTask, toggleComplete, deleteTask, setFilter, setTasks } =
  todoSlice.actions;

export default todoSlice.reducer;
