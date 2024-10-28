// src/store/index.js (Redux Store)
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // 只保留你需要的其他 slice
  },
});

export default store;
