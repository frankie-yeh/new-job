// src/store/index.js (Redux Store)
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // 只保留需要的 slice
  },
});

export default store;
