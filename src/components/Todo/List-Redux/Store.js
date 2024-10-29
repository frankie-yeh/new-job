// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../List-Redux/TodoSlice'; // 確保這裡的路徑正確

// 如果未來有其他的 reducers，可以改用 combineReducers
const store = configureStore({
  reducer: {
    todos: todoReducer, // 設定 todos 為 todoSlice 管理的狀態名稱
  },
});

export default store;
