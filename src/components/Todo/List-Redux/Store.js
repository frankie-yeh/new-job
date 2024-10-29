import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../List-Redux/TodoSlice';

// 將來有其他的 reducers，可以用 combineReducers
const store = configureStore({
  reducer: {
    todos: todoReducer, // todos 為 todoSlice 管理狀態
  },
});

export default store;
